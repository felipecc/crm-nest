import { BaseService } from 'src/shared/interfaces/base-service';
import { BookDto } from './dto/book-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService implements BaseService<BookDto, Book> {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}
  async create(createDto: Omit<BookDto, 'id'>): Promise<Book> {
    return await this.bookRepository.save(createDto);
  }
  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find();
  }
  async findOne(id: number): Promise<Book | null> {
    return await this.bookRepository.findOne({ where: { id } });
  }
  async update(updateDto: BookDto): Promise<Book> {
    return await this.bookRepository.save(updateDto);
  }
  async remove(id: number): Promise<Boolean> {
    try {
      await this.bookRepository.delete(id);
      return true;
    } catch (e) {
      return true;
    }
  }
}
