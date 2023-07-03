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
import { Garage } from './schemas/garage.schema';
import { GarageService } from './services/garage.service';
import { CreateGarageDto } from './dtos/garage.create.dto';
import { UpdateGarageDto } from './dtos/garage.update.dto';

@Controller('garages')
export class GarageController {
  constructor(public readonly garageService: GarageService) {}

  @Get(':garageId')
  async getGarageById(
    @Param('garageId') garageId: string,
  ): Promise<Garage | any> {
    return this.garageService.getGarageById(garageId);
  }

  @Get()
  async getGarages(): Promise<Garage[]> {
    return this.garageService.getGarages(3, 1);
  }

  @Post()
  async createGarage(
    @Body() createGarageDto: CreateGarageDto,
  ): Promise<Garage> {
    return this.garageService.createGarage(
      createGarageDto.name,
      createGarageDto.model_id,
    );
  }

  @Put(':garageId')
  async updateGarage(
    @Param('garageId') garageId: string,
    @Body() updateGarageDto: UpdateGarageDto,
  ): Promise<Garage> {
    return this.garageService.updateGarage(garageId, updateGarageDto);
  }

  @Delete(':garageId')
  async deleteSingleGarage(
    @Param('garageId') garageId: string,
  ): Promise<Garage> {
    return this.garageService.deleteGarage(garageId);
  }

  @Delete()
  async deleteManyGarage(
    @Param('garageIds') garageIds: [string],
  ): Promise<boolean> {
    return this.garageService.deleteManyGarage(garageIds);
  }
}
