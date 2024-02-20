import { Module } from '@nestjs/common';
import { BaseControllerService } from './base-controller.service';
import { BaseControllerController } from './base-controller.controller';

@Module({
  controllers: [BaseControllerController],
  providers: [BaseControllerService],
})
export class BaseControllerModule {}
