import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseControllerModule } from './base-controller/base-controller.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm-config';

@Module({
  imports: [TypeOrmModule.forRoot(config), BaseControllerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
