import { Injectable } from "@nestjs/common";
import { CarVariantRepository } from "../repositories/car-variant.repository";
import { CarVariant } from "../schemas/car-variant.schema";
import { UpdateCarVariantDto } from "../inputs/update.car-variant.dto";
import { CarVariantIdDto } from "../inputs/car-variant.id.dto";
import { CreateCarVariantDto } from "../inputs/create.car-variant.dto";
import { UpdateCarVariantStatusDto } from "../inputs/update.car-variant.status.dto";

@Injectable()
export class CarVariantService {
  constructor(private readonly carVariantRepository: CarVariantRepository) {}

  async getCarVaraintById(
      carVariantIdDto: CarVariantIdDto
    ): Promise<CarVariant | any> {
    return this.carVariantRepository.findById(carVariantIdDto.carVariantId);
  }

  async getCarVaraints(
    resPerPage: number,
    pageNo: number,
  ): Promise<CarVariant[]> {
    return this.carVariantRepository.find({}, resPerPage, pageNo);
  }

  async createCarVariant(createCarVariantDto: CreateCarVariantDto): Promise<CarVariant> {
    return this.carVariantRepository.create(
      createCarVariantDto
    );
  }

  async updateCarVariant(
   updateCarVariantDto: UpdateCarVariantDto
  ): Promise<CarVariant> {
    return this.carVariantRepository.findOneAndUpdate(
      { _id: updateCarVariantDto.carVariantId },
      {name: updateCarVariantDto.name,
        status: updateCarVariantDto.status,
        model_id: updateCarVariantDto.model_id
      },
    );
  }

  async updatCarVariantStatus(
    updateCarVariantStatusDto: UpdateCarVariantStatusDto
  ): Promise<CarVariant> {
    return this.carVariantRepository.findOneAndUpdate(
      {_id: updateCarVariantStatusDto.carVariantId},
      {
        status: updateCarVariantStatusDto.status
      },
    )
  }


  async deleteCarVariant(carVariantIdDto: CarVariantIdDto): Promise<CarVariant> {
    return this.carVariantRepository.findOneAndDelete({
      _id: carVariantIdDto.carVariantId,
    });
  }

  async deleteManyCarVariant(carVariantIdDto: CarVariantIdDto): Promise<boolean> {
    return this.carVariantRepository.findManyAndDelete({
      _id: carVariantIdDto.carVariantId,
    });
  }
}
