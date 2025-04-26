import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { UserResponse } from './app.dto';

@Injectable()
export class AppService {
  private serviceBClient: ClientProxy;

  constructor() {
    // creates a client to communicate with the microservice
    this.serviceBClient = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: { host: '127.0.0.1', port: 6379 },
    });
  }

  async getDouble(number: number): Promise<number> {
    /* 
       Send a command to 'service B' so that "double" handler from 'service B' can respond
       Note: toPromise() method is a deprecated API, Idk rxjs and I'm not allowed to use Generative AI
    */
    return this.serviceBClient.send({ cmd: 'double' }, number).toPromise();
  }

  createDouble(body: { num: number }): UserResponse {
    const { num } = body;

    return {
      message: `${num} created successfully!`,
      status: 201,
    };
  }

  updateDouble(num: number): UserResponse {
    return {
      message: `${num} updated successfully!`,
      status: 200,
    };
  }

  deleteDouble(num: number): UserResponse {
    return {
      message: `${num} deleted successfully!`,
      status: 200,
    };
  }
}
