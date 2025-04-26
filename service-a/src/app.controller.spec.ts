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

  it('get => Should send a number to microservice and get the number multiplied back', async () => {
    // Used a mock function because we're sending a quest to an external service.
    jest.spyOn(appService, 'getDouble').mockResolvedValue(20);
    const num = 10;
    const result = await appService.getDouble(num);

    expect(result).toEqual(20);
  });

  it('create => Should create a new number and return its data', async () => {
    const requestBody = {
      num: 23,
    };
    const result = await appService.createDouble(requestBody);

    expect(result).toEqual({
      message: '23 created successfully!',
      status: 201,
    });
  });

  it('update => should find a number by a "num" path param and update its data', async () => {
    const num = 3;

    const result = await appService.updateDouble(num);
    expect(result).toEqual({
      message: '3 updated successfully!',
      status: 200,
    });
  });

  it('delete => should find a number by a "num" path param and delete its data', async () => {
    const num = 456;

    const result = await appService.deleteDouble(num);
    expect(result).toEqual({
      message: '456 deleted successfully!',
      status: 200,
    });
  });
});
