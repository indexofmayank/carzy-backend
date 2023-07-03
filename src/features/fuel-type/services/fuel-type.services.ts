import { Injectable } from '@nestjs/common';
import { FuelTypeRepository } from '../repositories/fuel-type.repository';
import { FuelType } from '../schemas/fuel-type.schema';
import { UpdateFuelTypeDto } from '../dtos/fuel-type.update.dto';

@Injectable()
export class FuelTypeService {
  constructor(private readonly fuelTypeRepository: FuelTypeRepository) {}

  async getFuelTypeById(fuelTypeObjectId): Promise<FuelType | any> {
    return this.fuelTypeRepository.findById(fuelTypeObjectId);
  }

  async getFuelTypes(resPerPage: number, pageNo: number): Promise<FuelType[]> {
    return this.fuelTypeRepository.find({}, resPerPage, pageNo);
  }

  async createFuelType(name: string): Promise<FuelType> {
    return this.fuelTypeRepository.create({
      name,
    });
  }

  async updateFuelType(
    fuelTypeObjectId: string,
    updateFuelTypeDto: UpdateFuelTypeDto,
  ): Promise<FuelType> {
    return this.fuelTypeRepository.findOneAndUpdate(
      { _id: fuelTypeObjectId },
      updateFuelTypeDto,
    );
  }

  async deleteFuelType(fuelTypeObjectId: string): Promise<FuelType> {
    return this.fuelTypeRepository.findOneAndDelete({ _id: fuelTypeObjectId });
  }

  async deleteManyFuelType(fuelTypeObjectIds: [string]): Promise<boolean> {
    return this.fuelTypeRepository.findManyAndDelete({
      _id: { fuelTypeObjectIds },
    });
  }
}
