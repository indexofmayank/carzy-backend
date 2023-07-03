import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
} from '@nestjs/common';
import { LeadSource } from './schemas/lead-source.schema';
import { LeadSourceService } from './services/lead-source.service';
import { LeadSoucreUpdateDto } from './dtos/lead-source.update.dto';
import { LeadSourceCreateDto } from './dtos/lead-source.create.dto';

@Controller('lead-sources')
export class LeadSourceController {
  constructor(public readonly leadSourceServic: LeadSourceService) {}

  @Get(':leadSourceId')
  async getLeadSoucreById(
    @Param('leadSourceId') leadSourceId: string,
  ): Promise<LeadSource | any> {
    return this.leadSourceServic.getleadSourceById(leadSourceId);
  }

  @Get()
  async LeadSources(): Promise<LeadSource[]> {
    return this.leadSourceServic.getLeadSource(3, 1);
  }

  @Post()
  async createLeadSource(
    @Body() createLeadSourceDto: LeadSoucreUpdateDto,
  ): Promise<LeadSource | any> {
    return this.leadSourceServic.createLeadSource(
      createLeadSourceDto.name,
      createLeadSourceDto.dealer_id,
    );
  }

  @Put(':leadSourceId')
  async updateLeadSource(
    @Param('leadSourceId') leadSourceId: string,
    @Body() updateLeadSourceDto: LeadSoucreUpdateDto,
  ): Promise<LeadSource> {
    return this.leadSourceServic.updateLeadSource(
      leadSourceId,
      updateLeadSourceDto,
    );
  }

  @Delete(':leadSourceId')
  async deleteSingleLeadSource(
    @Param('leadSourceId') leadSourceId: string,
  ): Promise<LeadSource> {
    return this.leadSourceServic.deleteLeadSource(leadSourceId);
  }

  @Delete()
  async deleteManyLeadSource(
    @Param('leadSourceIds') leadSoucrIds: [string],
  ): Promise<boolean> {
    return this.leadSourceServic.deleteManyLeadSource(leadSoucrIds);
  }
}
