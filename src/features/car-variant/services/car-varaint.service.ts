import { Injectable } from '@nestjs/common';
import { CarVariantRepository } from '../repositories/car-variant.repository';
import { CarVariant } from '../schemas/car-variant.schema';
import { UpdateCarVariantDto } from '../dtos/car-variant.update';

@Injectable()
export class CarVariantService {
  constructor(private readonly carVariantRepository: CarVariantRepository) {}

  async getCarVaraintById(
    carVariantObjectId: string,
  ): Promise<CarVariant | any> {
    return this.carVariantRepository.findById(carVariantObjectId);
  }

  async getCarVaraints(
    resPerPage: number,
    pageNo: number,
  ): Promise<CarVariant[]> {
    return this.carVariantRepository.find({}, resPerPage, pageNo);
  }

  async createCarVariant(name: string, model_id: string): Promise<CarVariant> {
    return this.carVariantRepository.create({
      name,
      model_id,
    });
  }

  async updateCarVariant(
    carVaraintObjectId: string,
    updateCarVariantDto: UpdateCarVariantDto,
  ): Promise<CarVariant> {
    return this.carVariantRepository.findOneAndUpdate(
      { _id: carVaraintObjectId },
      updateCarVariantDto,
    );
  }

  async deleteCarVariant(carVaraintObjectId: string): Promise<CarVariant> {
    return this.carVariantRepository.findOneAndDelete({
      _id: carVaraintObjectId,
    });
  }

  async deleteManyCarVariant(carVaraintObjectIds: [string]): Promise<boolean> {
    return this.carVariantRepository.findManyAndDelete({
      _id: { carVaraintObjectIds },
    });
  }
}
