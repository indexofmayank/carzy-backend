import { Injectable } from '@nestjs/common';
import { LeadTypes } from '../schemas/lead-types.schema';
import { LeadTypeUpdateDto } from '../dtos/lead-types.update.dto';
import { LeadTypeRepository } from '../repositories/lead-type.repository';

@Injectable()
export class LeadTypesService {
  constructor(private readonly leadTypesRepository: LeadTypeRepository) {}

  async getLeadTypes(
    resPerPage: number,
    pageNo: number,
  ): Promise<LeadTypes[] | any> {
    return this.leadTypesRepository.find({}, resPerPage, pageNo);
  }

  async getLeadTypesById(leadTypeObjectId: string): Promise<LeadTypes | any> {
    return this.leadTypesRepository.findById(leadTypeObjectId);
  }

  async createLeadType(
    name: string,
    dealer_id: string,
  ): Promise<LeadTypes | any> {
    return this.leadTypesRepository.create({
      name,
      dealer_id,
    });
  }

  async updateLeadType(
    leadTypeObjectId: string,
    updateLeadTypeDto: LeadTypeUpdateDto,
  ): Promise<LeadTypes | any> {
    return this.leadTypesRepository.findOneAndUpdate(
      { _id: leadTypeObjectId },
      updateLeadTypeDto,
    );
  }

  async deleteSingleLeadType(
    leadTypeObjectId: string,
  ): Promise<LeadTypes | any> {
    return this.leadTypesRepository.findOneAndDelete({ _id: leadTypeObjectId });
  }

  async deleteManyLeadType(
    leadTypesObjectIds: [string],
  ): Promise<LeadTypes | boolean> {
    return this.leadTypesRepository.findManyAndDelete({ _id: {} });
  }
}
