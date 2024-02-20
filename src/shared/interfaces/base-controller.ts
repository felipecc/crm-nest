import { BaseService } from './base-service';
import { Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';

export abstract class BaseController<T> {
  private readonly service: BaseService<T>;

  constructor(service: BaseService<T>) {
    this.service = service;
  }

  @Post()
  create(@Body() createBaseControllerDto: T) {
    return this.service.create(createBaseControllerDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateBaseControllerDto: T) {
    return this.service.update(id, updateBaseControllerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
