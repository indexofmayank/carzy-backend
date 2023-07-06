import { Injectable } from '@nestjs/common';
import { BodyType } from '../schemas/body-types.schema';
import { BodyTypeRepository } from '../repositories/body-types.repository';
import { UpdateBodyTypeDto } from '../inputs/update.body-type.dto';
import { CreateBodyTypeDto } from '../inputs/create.body-type.dto';
import { UpdateBodyTypeStatusDto } from '../inputs/update.body-type.status.dto';
import { BodyTypeIdDto } from '../inputs/body-type.id.dto';

@Injectable()
export class BodyTypeService {
  constructor(private readonly bodyTypeRepository: BodyTypeRepository) { }

  async getBodyTypeById(bodyTypeIdDto: BodyTypeIdDto): Promise<BodyType | any> {
    return this.bodyTypeRepository.findById(bodyTypeIdDto.bodyTypeId);
  }

  async getBodyTypes(resPerPage: number, pageNo: number): Promise<BodyType[]> {
    return this.bodyTypeRepository.find({}, resPerPage, pageNo);
  }

  async createBodyType(
    createBodyTypeDto: CreateBodyTypeDto,
  ): Promise<BodyType> {
    return this.bodyTypeRepository.create(createBodyTypeDto);
  }

  async updateBodyType(
    updateBodyTypeDto: UpdateBodyTypeDto
  ): Promise<BodyType> {
    return this.bodyTypeRepository.findOneAndUpdate(
      { _id: updateBodyTypeDto.bodyTypeId },
      {
        name: updateBodyTypeDto.name,
        status: updateBodyTypeDto.status
      },
    );
  }

  async updateBodyTypeStatus(
    updateBodyTypeStatusDto: UpdateBodyTypeStatusDto
  ): Promise<BodyType> {
    return this.bodyTypeRepository.findOneAndUpdate(
      { _id: updateBodyTypeStatusDto.bodyTypeId },
      { name: updateBodyTypeStatusDto.status },
    )
  }


  async deleteBodyType(bodyTypeIdDto: BodyTypeIdDto): Promise<any> {
    return this.bodyTypeRepository.findOneAndDelete({ _id: bodyTypeIdDto.bodyTypeId });
  }

  async deleteManyBodyType(bodyTypeIdDto: BodyTypeIdDto): Promise<boolean> {
    return this.bodyTypeRepository.findManyAndDelete({
      _id: bodyTypeIdDto.bodyTypeId
    });
  }
}
