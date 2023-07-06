import { Injectable } from "@nestjs/common";
import { FuelTypeRepository } from "../repositories/fuel-type.repository";
import { FuelType } from "../schemas/fuel-type.schema";
import { CreateFuelTypeDto } from "../inputs/create.fuel-type.dto";
import {UpdateFuelTypeDto} from "../inputs/update.fuel-type.dto";
import { FuelTypeIdDto } from "../inputs/fuel-type.id.dto";
import { UpdateFuelTypeStatusDto } from "../inputs/update.fuel-type.status.dto";

@Injectable()
export class FuelTypeService {
  constructor(private readonly fuelTypeRepository: FuelTypeRepository) {}

  async getFuelTypeById(fuelTypeIdDto: FuelTypeIdDto): Promise<FuelType | any> {
    return this.fuelTypeRepository.findById(fuelTypeIdDto.fuelTypeId);
  }

  async getFuelTypes(resPerPage: number, pageNo: number): Promise<FuelType[]> {
    return this.fuelTypeRepository.find({}, resPerPage, pageNo);
  }

  async createFuelType(createFuelTypeDto: CreateFuelTypeDto): Promise<FuelType> {
    return this.fuelTypeRepository.create(createFuelTypeDto);
  }

  async updateFuelType(
    updateFuelTypeDto: UpdateFuelTypeDto
  ): Promise<FuelType> {
    return this.fuelTypeRepository.findOneAndUpdate(
      { _id: updateFuelTypeDto.fuelTypeId },
      {name: updateFuelTypeDto.name,
       status: updateFuelTypeDto.status },
    );
  }

  async updateFuelTypeStatus(
    updateFuelTypeStatusDto: UpdateFuelTypeStatusDto
  ): Promise<FuelType> {
    return this.fuelTypeRepository.findOneAndUpdate(
      {_id: updateFuelTypeStatusDto.fuelTypeId},
      {
        status: updateFuelTypeStatusDto.status
      },
    )
  }

  async deleteFuelType(fuelTypeIdDto: FuelTypeIdDto): Promise<FuelType> {
    return this.fuelTypeRepository.findOneAndDelete({ _id: fuelTypeIdDto.fuelTypeId });
  }

  async deleteManyFuelType(fuelTypeIdDto: FuelTypeIdDto): Promise<boolean> {
    return this.fuelTypeRepository.findManyAndDelete({
      _id: fuelTypeIdDto.fuelTypeId
    });
  }
}
