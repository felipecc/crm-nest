import { Test, TestingModule } from '@nestjs/testing';
import { BaseControllerService } from './base-controller.service';

describe('BaseControllerService', () => {
  let service: BaseControllerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaseControllerService],
    }).compile();

    service = module.get<BaseControllerService>(BaseControllerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
