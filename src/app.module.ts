import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm-config';
import { BookModule } from './book/book.module';
import { BookController } from './book/book-controller';

@Module({
  imports: [BookModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController, BookController],
  providers: [AppService],
})
export class AppModule {}
