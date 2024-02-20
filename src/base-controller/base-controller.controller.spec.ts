import { Test, TestingModule } from '@nestjs/testing';
import { BaseControllerController } from './base-controller.controller';
import { BaseControllerService } from './base-controller.service';

describe('BaseControllerController', () => {
  let controller: BaseControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaseControllerController],
      providers: [BaseControllerService],
    }).compile();

    controller = module.get<BaseControllerController>(BaseControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
