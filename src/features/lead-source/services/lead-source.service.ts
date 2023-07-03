import { Injectable } from '@nestjs/common';
import { LeadSource } from '../schemas/lead-source.schema';
import { LeadSoucreUpdateDto } from '../dtos/lead-source.update.dto';
import { LeadSourcesRepository } from '../repositories/lead-source.repository';

@Injectable()
export class LeadSourceService {
  constructor(private readonly leadSourceRepository: LeadSourcesRepository) {}

  async getleadSourceById(leadSourceObjectId): Promise<LeadSource | any> {
    return this.leadSourceRepository.findById(leadSourceObjectId);
  }

  async getLeadSource(
    resPerPage: number,
    pageNo: number,
  ): Promise<LeadSource[]> {
    return this.leadSourceRepository.find({}, resPerPage, pageNo);
  }

  async createLeadSource(
    name: string,
    dealer_id: string,
  ): Promise<LeadSource | any> {
    return this.leadSourceRepository.create({
      name,
      dealer_id,
    });
  }

  async updateLeadSource(
    leadSourceObjectId: string,
    updateLeadSourceDto: LeadSoucreUpdateDto,
  ): Promise<LeadSource> {
    return this.leadSourceRepository.findOneAndUpdate(
      { _id: leadSourceObjectId },
      updateLeadSourceDto,
    );
  }

  async deleteLeadSource(
    leadSourceObjectId: string,
  ): Promise<LeadSource | any> {
    return this.leadSourceRepository.findOneAndDelete({
      _id: leadSourceObjectId,
    });
  }

  async deleteManyLeadSource(leadSourceObjectIds: [string]): Promise<boolean> {
    return this.leadSourceRepository.findManyAndDelete({
      _id: { leadSourceObjectIds },
    });
  }
}
