import { Injectable } from '@nestjs/common';
import { LeadTypes } from '../schemas/lead-types.schema';
import { LeadTypeRepository } from '../repositories/lead-type.repository';
import { LeadTypeIdDto } from '../inputs/lead-type.id.dto';
import { CreateLeadTypeDto } from '../inputs/create.lead-type.dto';
import { UpdateLeadTypeDto } from '../inputs/update.lear-type.dto';
import { UpdateLeadTypeStatusDto } from '../inputs/update.lead-type.status.dto';

@Injectable()
export class LeadTypesService {
  constructor(private readonly leadTypesRepository: LeadTypeRepository) {}

  async getLeadTypes(
    resPerPage: number,
    pageNo: number,
  ): Promise<LeadTypes[] | any> {
    return this.leadTypesRepository.find({}, resPerPage, pageNo);
  }

  async getLeadTypesById(leadTypeIdDto: LeadTypeIdDto): Promise<LeadTypes | any> {
    return this.leadTypesRepository.findById(leadTypeIdDto.leadTypeId);
  }

  async createLeadType(
    createLeadTypeDto: CreateLeadTypeDto
    ): Promise<LeadTypes | any> {
    return this.leadTypesRepository.create(
      createLeadTypeDto
    );
  }

  async updateLeadType(
    updateLeadTypeDto: UpdateLeadTypeDto
    ): Promise<LeadTypes | any> {
    return this.leadTypesRepository.findOneAndUpdate(
      { _id: updateLeadTypeDto.leadTypeId },
      {name: updateLeadTypeDto.name,
      status: updateLeadTypeDto.status,
      dealer_id: updateLeadTypeDto.dealer_id
      },
    );
  }

  async updateLeadTypeStatus(
    updateLeadTypeStatusDto: UpdateLeadTypeStatusDto
  ): Promise<LeadTypes | any> {
    return this.leadTypesRepository.findOneAndUpdate(
      {_id: updateLeadTypeStatusDto.leadTypeId},
      {status: updateLeadTypeStatusDto.status},
    )
  }

  async deleteSingleLeadType(
    leadTypeIdDto: LeadTypeIdDto
    ): Promise<LeadTypes | any> {
    return this.leadTypesRepository.findOneAndDelete({ _id: leadTypeIdDto.leadTypeId });
  }

  async deleteManyLeadType(
    leadTypeIdDto: LeadTypeIdDto
    ): Promise<LeadTypes | boolean> {
    return this.leadTypesRepository.findManyAndDelete({ _id: leadTypeIdDto.leadTypeId });
  }
}
