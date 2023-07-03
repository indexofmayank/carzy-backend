import { Injectable } from '@nestjs/common';
import { BodyType } from '../schemas/body-types.schema';
import { BodyTypeRepository } from '../repositories/body-types.repository';
import mongoose, { FilterQuery, Mongoose } from 'mongoose';
import { UpdateBodyTypeDto } from '../inputs/update.body-type.dto';
import { CreateBodyTypeDto } from '../inputs/create.body-type.dto';
import { UpdateBodyTypeStatusDto } from '../inputs/update.body-type.status.dto';
import { Status } from 'src/status.enums';
import { DeleteBodyTypeDto } from '../inputs/delete.body-type.dto';

@Injectable()
export class BodyTypeService {
  constructor(private readonly bodyTypeRepository: BodyTypeRepository) {}

  async getBodyTypeById(bodyTypeObjectId): Promise<BodyType | any> {
    return this.bodyTypeRepository.findById(bodyTypeObjectId);
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
    bodyTypeObjectId: string,
    updateBodyTypeDto: UpdateBodyTypeDto,
  ): Promise<BodyType> {
    return this.bodyTypeRepository.findOneAndUpdate(
      { _id: bodyTypeObjectId },
      updateBodyTypeDto,
    );
  }

  async updateBodyTypeStatus(
    bodyTypeId: string,
    status: string
  ): Promise<BodyType> {
    return this.bodyTypeRepository.findOneAndUpdate(
      {_id: bodyTypeId},
      {status: status}
    )
  }


  async deleteBodyType(deleteBodyTypeDto: DeleteBodyTypeDto): Promise<any> {
    return this.bodyTypeRepository.findOneAndDelete({ _id: deleteBodyTypeDto.bodyTypeId });
  }

  async deleteManyBodyType(deleteManyBodyTypeDto: DeleteBodyTypeDto): Promise<boolean> {
    return this.bodyTypeRepository.findManyAndDelete({
      _id:  deleteManyBodyTypeDto.bodyTypeId
    });
  }
}
