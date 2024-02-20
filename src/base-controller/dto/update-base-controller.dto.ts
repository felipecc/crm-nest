import { PartialType } from '@nestjs/mapped-types';
import { CreateBaseControllerDto } from './create-base-controller.dto';

export class UpdateBaseControllerDto extends PartialType(CreateBaseControllerDto) {}
