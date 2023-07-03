import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { FuelTypeService } from './services/fuel-type.services';
import { FuelType } from './schemas/fuel-type.schema';
import { CreateFuelTypeDto } from './dtos/fuel-type.created.dto';
import { UpdateFuelTypeDto } from './dtos/fuel-type.update.dto';

@Controller('fuel-types')
export class FuelTypeController {
  constructor(public readonly fuelTypeService: FuelTypeService) {}

  @Get(':fuelTypeId')
  async getFuelTypeById(
    @Param('fuelTypeId') fuelTypeId: string,
  ): Promise<FuelType | any> {
    return this.fuelTypeService.getFuelTypeById(fuelTypeId);
  }

  @Post()
  async createFuelType(
    @Body() createFuelTypeDto: CreateFuelTypeDto,
  ): Promise<FuelType> {
    return this.fuelTypeService.createFuelType(createFuelTypeDto.name);
  }

  @Get()
  async getFuelTypes(): Promise<FuelType[]> {
    return this.fuelTypeService.getFuelTypes(3, 1);
  }

  @Put(':fuelTypeId')
  async updateFuelType(
    @Param('fuelTypeId') fuelTypeId: string,
    @Body() updateFuelTypeDto: UpdateFuelTypeDto,
  ): Promise<FuelType> {
    return this.fuelTypeService.updateFuelType(fuelTypeId, updateFuelTypeDto);
  }

  @Delete(':fuelTypeId')
  async deleteSingleFuelType(
    @Param('fuelTypeId') fuelTypeId: string,
  ): Promise<FuelType> {
    return this.fuelTypeService.deleteFuelType(fuelTypeId);
  }

  @Delete()
  async deleteManyFuelType(
    @Param('fuelTypeIds') fuelTypeIds: [string],
  ): Promise<boolean> {
    return this.fuelTypeService.deleteManyFuelType(fuelTypeIds);
  }
}
