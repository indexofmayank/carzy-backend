import { Injectable } from '@nestjs/common';
import { Garage } from '../schemas/garage.schema';
import { GarageRepository } from '../repositories/garage.repository';
import { GarageIdDto } from '../inputs/garage.Id.dto';
import { CreateGarageDto } from '../inputs/create.garage.dto';
import { UpdateGarageDto } from '../inputs/update.garage.dto';
import { UpdateGarageStatusDto } from '../inputs/update.garage.status.dto';

@Injectable()
export class GarageService {
  constructor(private readonly garageRepository: GarageRepository) {}

  async getGarageById(garageIdDto: GarageIdDto): Promise<Garage | any> {
    return this.garageRepository.findById(garageIdDto.garageId);
  }

  async getGarages(resPerPage: number, pageNo: number): Promise<Garage[]> {
    return this.garageRepository.find({}, resPerPage, pageNo);
  }

  async createGarage(createdGarageDto: CreateGarageDto): Promise<Garage> {
    return this.garageRepository.create(createdGarageDto);
  }

  async updateGarage(
    updateGarageDto: UpdateGarageDto
    ): Promise<Garage> {
    return this.garageRepository.findOneAndUpdate(
      { _id: updateGarageDto.garageId },
      {
        name: updateGarageDto.name,
        model_id: updateGarageDto.model_id,
        status: updateGarageDto.status
      },
    );
  }

  async updateGarageStatus(updateGarageStatusDto: UpdateGarageStatusDto): Promise<Garage> {
    return this.garageRepository.findOneAndUpdate(
      {_id: updateGarageStatusDto.garageId},
      {status: updateGarageStatusDto.status}
    )
  }


  async deleteGarage(garageIdDto: GarageIdDto): Promise<Garage> {
    return this.garageRepository.findOneAndDelete({ _id: garageIdDto.garageId });
  }

  async deleteManyGarage(garageIdDto: GarageIdDto): Promise<boolean> {
    return this.garageRepository.findManyAndDelete({
      _id: garageIdDto.garageId
    });
  }
}
