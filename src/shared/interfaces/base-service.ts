export interface BaseService<T> {
  create(createDto: T): Promise<T>;
  findAll(): Promise<T[]>;
  findOne(id: number): Promise<T>;
  update(id: number, updateDto: T): Promise<T>;
  remove(id: number): Promise<T>;
}
