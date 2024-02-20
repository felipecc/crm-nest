export interface BaseService<T, U> {
  create(createDto: Omit<T, 'id'>): Promise<U>;
  findAll(): Promise<U[]>;
  findOne(id: number): Promise<U | null>;
  update(updateDto: T): Promise<U>;
  remove(id: number): Promise<Boolean>;
}
