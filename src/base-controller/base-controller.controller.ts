import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BaseControllerService } from './base-controller.service';
import { CreateBaseControllerDto } from './dto/create-base-controller.dto';
import { UpdateBaseControllerDto } from './dto/update-base-controller.dto';

@Controller('base-controller')
export class BaseControllerController {
  constructor(private readonly baseControllerService: BaseControllerService) {}

  @Post()
  create(@Body() createBaseControllerDto: CreateBaseControllerDto) {
    return this.baseControllerService.create(createBaseControllerDto);
  }

  @Get()
  findAll() {
    return this.baseControllerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.baseControllerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBaseControllerDto: UpdateBaseControllerDto) {
    return this.baseControllerService.update(+id, updateBaseControllerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baseControllerService.remove(+id);
  }
}
