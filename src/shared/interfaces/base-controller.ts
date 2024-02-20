import { BaseService } from './base-service';
import { Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';

export abstract class BaseController<T, U> {
  private readonly service: BaseService<T, U>;

  constructor(service: BaseService<T, U>) {
    this.service = service;
  }

  @Post()
  async create(@Body() createBaseControllerDto: T): Promise<U> {
    return await this.service.create(createBaseControllerDto);
  }

  @Get()
  async findAll(): Promise<U[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<U | null> {
    return await this.service.findOne(id);
  }

  @Patch()
  async update(@Body() updateBaseControllerDto: T): Promise<U> {
    return await this.service.update(updateBaseControllerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Boolean> {
    return await this.service.remove(id);
  }
}
