import { Injectable } from '@nestjs/common';
import { CarModel } from '../schemas/car-model.schema';
import { CarModelsRepository } from '../respositories/car-models.respository';
import { UpdateCarModelDto } from '../inputs/update.car-model.dto';
import { CreateCarModelDto } from '../inputs/create.car-model.dto';
import { CarModelIdDto } from '../inputs/car-model.id.dto';
import { UpdateCarModelStatusDto } from '../inputs/update.car-model.status.dto';

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
    createCarModelDto: CreateCarModelDto
  ): Promise<CarModel> {
    return this.carModelRepository.create(createCarModelDto);
  }

 async updateCarModel(
    updateCarModelDto: UpdateCarModelDto
  ): Promise<any> {
    return this.carModelRepository.findOneAndUpdate(
      {_id: updateCarModelDto.carModelId},
      {name: updateCarModelDto.name,
      status: updateCarModelDto.status,
      brand_id: updateCarModelDto.brand_id,
      body_type_id: updateCarModelDto.body_type_id
      },
    );
  }

  async updateCarModelStatus(updateCarModelStatusDto: UpdateCarModelStatusDto): Promise<CarModel> {
    return this.carModelRepository.findOneAndUpdate(
      {_id: updateCarModelStatusDto.carModelId},
      {status: updateCarModelStatusDto.status}
    )
  }


  async deleteSingleCarModel(carModelIdDto: CarModelIdDto): Promise<CarModel> {
    return this.carModelRepository.findOneAndDelete({ _id: carModelIdDto.carModelId });
  }

  async deleteManyCarModel(carModelIdDto: CarModelIdDto): Promise<boolean> {
    return this.carModelRepository.findManyAndDelete({ _id: carModelIdDto.carModelId });
  }
}
