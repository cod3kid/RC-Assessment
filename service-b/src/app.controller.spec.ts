import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  it('read => Should send a number and return double the value', async () => {
    const num = 100;
    const result = await appService.getDouble(num);

    expect(result).toEqual(200);
  });

  it('read => Should send a number and return its square', async () => {
    const num = 5;
    const result = await appService.getSquare(num);

    expect(result).toEqual(25);
  });

  it('create => Should create a new number and return its data', async () => {
    const requestBody = {
      num: 23,
    };
    const result = await appService.createSquare(requestBody);

    expect(result).toEqual({
      message: '23 created successfully!',
      status: 201,
    });
  });

  it('update => should find a number by a "num" path param and update its data', async () => {
    const num = 3;

    const result = await appService.updateSquare(num);
    expect(result).toEqual({
      message: '3 updated successfully!',
      status: 200,
    });
  });

  it('delete => should find a number by a "num" path param and delete its data', async () => {
    const num = 456;

    const result = await appService.deleteSquare(num);
    expect(result).toEqual({
      message: '456 deleted successfully!',
      status: 200,
    });
  });
});
