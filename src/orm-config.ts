import { DataSourceOptions } from 'typeorm';
import { Book } from './book/book.repository';

export const config: DataSourceOptions = {
  type: 'sqlite',
  database: 'db/crm.db',
  entities: [Book],
};
