import { Module } from '@nestjs/common';
import { BookController } from './book-controller';
import { BookService } from './book.service';
import { Book } from './book.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BookService],
  controllers: [BookController],
  exports: [BookService],
})
export class BookModule {}
