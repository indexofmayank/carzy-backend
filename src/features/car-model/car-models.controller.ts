import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { CarModelService } from './services/car-models.service';
import { CarModel } from './schemas/car-model.schema';
import * as mongoose from 'mongoose';
import { CreateCarModelDto } from './dtos/car-model.create.dto';
import { UpdateCarModelDto } from './dtos/car-model.update.dto';

@Controller('car-models')
export class CarModelsController {
  constructor(public readonly carModelService: CarModelService) {}

  @Get(':carModelId')
  async getCarModelById(
    @Param('carModelId') carModelId: string,
  ): Promise<CarModel> {
    return this.carModelService.getCarModelById(carModelId);
  }

  @Get()
  async getCarModels(): Promise<CarModel[]> {
    return this.carModelService.getCarModels(4, 1);
  }

  @Post()
  async createCarModel(
    @Body() createCarModelDto: CreateCarModelDto,
  ): Promise<CarModel> {
    return this.carModelService.createCarModel(
      createCarModelDto.name,
      createCarModelDto.created_by,
      createCarModelDto.body_type_id,
      createCarModelDto.brand_id,
    );
  }

  @Put(':carModelId')
  async updateCarModel(
    @Param('carModelId') carModelId: string,
    @Body() updateCarModelDto: UpdateCarModelDto,
  ): Promise<CarModel> {
    return this.carModelService.updateCarModel(carModelId, updateCarModelDto);
  }

  @Delete(':carModelId')
  async deleteCarModel(
    @Param('carModelId') carModelId: string,
  ): Promise<CarModel> {
    return this.carModelService.deleteSingleCarModel(carModelId);
  }

  @Delete()
  async deleteManyCarModel(
    @Param('carModelIds') carModelIds: [string],
  ): Promise<boolean> {
    return this.carModelService.deleteManyCarModel(carModelIds);
  }
}
