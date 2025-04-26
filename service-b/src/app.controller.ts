import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { UserResponse } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // This is a handler that get's invoked when it receives 'double' command
  @MessagePattern({ cmd: 'double' })
  getDouble(num: number): number {
    return this.appService.getDouble(num);
  }

  // Basic CRUD route handlers
  @Get('square/:num')
  getSquare(@Param('num') num): number {
    return this.appService.getSquare(num);
  }

  @Post('square')
  createSquare(@Body() body: { num: number }): UserResponse {
    return this.appService.createSquare(body);
  }

  @Put('square/:num')
  updateSquare(@Param('num') num: string): UserResponse {
    return this.appService.updateSquare(parseInt(num));
  }

  @Delete('square/:num')
  deleteSquare(@Param('num') num: string): UserResponse {
    return this.appService.deleteSquare(parseInt(num));
  }
}
