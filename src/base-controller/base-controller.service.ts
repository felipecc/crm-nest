import { Injectable } from '@nestjs/common';
import { CreateBaseControllerDto } from './dto/create-base-controller.dto';
import { UpdateBaseControllerDto } from './dto/update-base-controller.dto';

@Injectable()
export class BaseControllerService {
  create(createBaseControllerDto: CreateBaseControllerDto) {
    return 'This action adds a new baseController';
  }

  findAll() {
    return `This action returns all baseController`;
  }

  findOne(id: number) {
    return `This action returns a #${id} baseController`;
  }

  update(id: number, updateBaseControllerDto: UpdateBaseControllerDto) {
    return `This action updates a #${id} baseController`;
  }

  remove(id: number) {
    return `This action removes a #${id} baseController`;
  }
}
