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
import { UserResponse } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Read API
  @Get('/double/:num')
  async getDouble(@Param('num') num): Promise<number> {
    return this.appService.getDouble(num);
  }

  // Basic REST Create, Update and Delete Route Handlers
  @Post('double')
  createDouble(@Body() body: { num: number }): UserResponse {
    return this.appService.createDouble(body);
  }

  @Put('double/:num')
  updateDouble(@Param('num') num: string): UserResponse {
    return this.appService.updateDouble(parseInt(num));
  }

  @Delete('double/:num')
  deleteDouble(@Param('num') num: string): UserResponse {
    return this.appService.deleteDouble(parseInt(num));
  }
}
