import { Injectable } from '@nestjs/common';
import { CarModel } from '../schemas/car-model.schema';
import { CarModelsRepository } from '../respositories/car-models.respository';
import { UpdateCarModelDto } from '../dtos/car-model.update.dto';

@Injectable()
export class CarModelService {
  constructor(private readonly carModelRepository: CarModelsRepository) {}

  async getCarModelById(carModelObjectId): Promise<CarModel | any> {
    return this.carModelRepository.findById(carModelObjectId);
  }

  async getCarModels(resPerPage: number, pageNo: number): Promise<CarModel[]> {
    return this.carModelRepository.find({}, resPerPage, pageNo);
  }

  async createCarModel(
    name: string,
    created_by: string,
    body_type_id: string,
    brand_id: string,
  ): Promise<CarModel> {
    return this.carModelRepository.create({
      name,
      created_by,
      body_type_id,
      brand_id,
    });
  }

  async updateCarModel(
    carModelId: string,
    updateCarModelDto: UpdateCarModelDto,
  ): Promise<any> {
    return this.carModelRepository.findOneAndUpdate(
      { _id: carModelId },
      updateCarModelDto,
    );
  }

  async deleteSingleCarModel(carModelId: string): Promise<CarModel> {
    return this.carModelRepository.findOneAndDelete({ _id: carModelId });
  }

  async deleteManyCarModel(carModelIds: [string]): Promise<boolean> {
    return this.carModelRepository.findManyAndDelete({ _id: carModelIds });
  }
}
