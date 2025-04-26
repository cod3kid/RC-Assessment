import { Injectable } from '@nestjs/common';
import { UserResponse } from './app.dto';

@Injectable()
export class AppService {
  getDouble(num): number {
    return num * 2;
  }

  getSquare(num): number {
    return Math.pow(num, 2);
  }

  createSquare(body: { num: number }): UserResponse {
    const { num } = body;

    return {
      message: `${num} created successfully!`,
      status: 201,
    };
  }

  updateSquare(num: number): UserResponse {
    return {
      message: `${num} updated successfully!`,
      status: 200,
    };
  }

  deleteSquare(num: number): UserResponse {
    return {
      message: `${num} deleted successfully!`,
      status: 200,
    };
  }
}
