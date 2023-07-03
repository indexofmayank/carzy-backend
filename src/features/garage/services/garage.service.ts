import { Injectable } from '@nestjs/common';
import { Garage } from '../schemas/garage.schema';
import { GarageRepository } from '../repositories/garage.repository';
import { UpdateGarageDto } from '../dtos/garage.update.dto';

@Injectable()
export class GarageService {
  constructor(private readonly garageRepository: GarageRepository) {}

  async getGarageById(garageTypeObjectId): Promise<Garage | any> {
    return this.garageRepository.findById(garageTypeObjectId);
  }

  async getGarages(resPerPage: number, pageNo: number): Promise<Garage[]> {
    return this.garageRepository.find({}, resPerPage, pageNo);
  }

  async createGarage(name: string, model_id: string): Promise<Garage> {
    return this.garageRepository.create({
      name,
      model_id,
      created_at: undefined,
      deleted_at: undefined,
    });
  }

  async updateGarage(
    garageTypeObjectId: string,
    updateGarageDto: UpdateGarageDto,
  ): Promise<Garage> {
    return this.garageRepository.findOneAndUpdate(
      { _id: garageTypeObjectId },
      updateGarageDto,
    );
  }

  async deleteGarage(garageTypeObjectId): Promise<Garage> {
    return this.garageRepository.findOneAndDelete({ _id: garageTypeObjectId });
  }

  async deleteManyGarage(garageTypeObjectIds: [string]): Promise<boolean> {
    return this.garageRepository.findManyAndDelete({
      _id: { garageTypeObjectIds },
    });
  }
}
