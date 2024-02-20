import { BaseController } from 'src/shared/interfaces/base-controller';
import { Book } from './book.repository';
import { BookDto } from './dto/book-dto';
import { Controller } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController extends BaseController<Book, BookDto> {
  constructor(private readonly bookService: BookService) {
    super(bookService);
  }
}
