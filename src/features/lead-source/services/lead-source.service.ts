import { Injectable } from '@nestjs/common';
import { LeadSource } from '../schemas/lead-source.schema';
import { LeadSourcesRepository } from '../repositories/lead-source.repository';
import { LeadSourceIdDto } from '../inputs/lead-source.id.dto';
import { CreateLeadSourceDto } from '../inputs/create.lead-source.dto';
import { UpdateLeadSourceDto } from '../inputs/update.lead-source.dto';
import { UpdateLeadSourceStatusDto } from '../inputs/update.lead-source.status.dto';

@Injectable()
export class LeadSourceService {
  constructor(private readonly leadSourceRepository: LeadSourcesRepository) {}

  async getleadSourceById(leadSourceIdDto: LeadSourceIdDto): Promise<LeadSource | any> {
    return this.leadSourceRepository.findById(leadSourceIdDto.leadSourceId);
  }

  async getLeadSource(
    resPerPage: number,
    pageNo: number,
  ): Promise<LeadSource[]> {
    return this.leadSourceRepository.find({}, resPerPage, pageNo);
  }

  async createLeadSource(
    createdLeadSourceDto: CreateLeadSourceDto
    ): Promise<LeadSource | any> {
    return this.leadSourceRepository.create(createdLeadSourceDto);
  }

  async updateLeadSource(
    updateLeadSourceDto: UpdateLeadSourceDto
    ): Promise<LeadSource> {
    return this.leadSourceRepository.findOneAndUpdate(
      { _id: updateLeadSourceDto.leadSourceId },
      {
        name: updateLeadSourceDto.name,
        status: updateLeadSourceDto.status,
        dealer_id: updateLeadSourceDto.dealer_id
      },
    );
  }

  async updateLeadSourceStatus(
    updateLeadSourceStatusDto: UpdateLeadSourceStatusDto
    ): Promise<LeadSource> {
    return this.leadSourceRepository.findOneAndUpdate(
      {_id: updateLeadSourceStatusDto.leadSourceId},
      {
        status: updateLeadSourceStatusDto.status
      },
    )
  }

  async deleteLeadSource(
    leadSourceIdDto: LeadSourceIdDto
  ): Promise<LeadSource | any> {
    return this.leadSourceRepository.findOneAndDelete({_id: leadSourceIdDto.leadSourceId});
  }

  async deleteManyLeadSource(leadSourceIdDto: LeadSourceIdDto): Promise<boolean> {
    return this.leadSourceRepository.findManyAndDelete({_id: leadSourceIdDto.leadSourceId});
  }
}
