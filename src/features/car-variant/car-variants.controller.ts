import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
} from '@nestjs/common';
import { CarVariantService } from './services/car-varaint.service';
import { CarVariant } from './schemas/car-variant.schema';
import { CreateCarVariantDto } from './dtos/car-variant.create';
import { UpdateCarVariantDto } from './dtos/car-variant.update';

@Controller('car-variants')
export class CarVariantController {
  constructor(public readonly carVariantService: CarVariantService) {}

  @Get(':carVariantId')
  async getCarVariantById(
    @Param('carVariantId') carVarientId: string,
  ): Promise<CarVariant | any> {
    return this.carVariantService.getCarVaraintById(carVarientId);
  }

  @Get()
  async getCarVariants(): Promise<CarVariant[]> {
    return this.carVariantService.getCarVaraints(3, 1);
  }

  @Post()
  async createCarVariant(
    @Body() createVariantDto: CreateCarVariantDto,
  ): Promise<CarVariant> {
    return this.carVariantService.createCarVariant(
      createVariantDto.name,
      createVariantDto.model_id,
    );
  }

  @Put(':carVariantId')
  async updateCarVariant(
    @Param('carVariantId') carVariantId: string,
    @Body() updateCarVariantDto: UpdateCarVariantDto,
  ): Promise<CarVariant> {
    return this.carVariantService.updateCarVariant(
      carVariantId,
      updateCarVariantDto,
    );
  }

  @Delete(':carVariantId')
  async deleteCarVariant(
    @Param('carVariantId') carVariantId: string,
  ): Promise<CarVariant> {
    return this.carVariantService.deleteCarVariant(carVariantId);
  }

  @Delete()
  async deleteManyCarVariant(
    @Param('carVariantIds') carVariantIds: [string],
  ): Promise<boolean> {
    return this.carVariantService.deleteManyCarVariant(carVariantIds);
  }
}
