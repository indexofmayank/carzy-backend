import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
} from '@nestjs/common';
import { LeadTypesService } from './services/lead-types.service';
import { LeadTypes } from './schemas/lead-types.schema';
import { LeadTypeCreateDto } from './dtos/lead-types.create.dto';
import { LeadTypeUpdateDto } from './dtos/lead-types.update.dto';

@Controller('lead-types')
export class LeadTypesController {
  constructor(public readonly leadTypesService: LeadTypesService) {}

  @Get(':leadTypesId')
  async leadTypesById(
    @Param('leadTypesId') leadTypesId: string,
  ): Promise<LeadTypes | any> {
    return this.leadTypesService.getLeadTypesById(leadTypesId);
  }

  @Get()
  async leadTypes(): Promise<LeadTypes[] | any> {
    return this.leadTypesService.getLeadTypes(3, 1);
  }

  @Put(':leadTypesId')
  async updateLeadType(
    @Param('leadTypesId') leadTypesId: string,
    @Body() updateLeadTypeDto: LeadTypeUpdateDto,
  ): Promise<LeadTypes | any> {
    return this.leadTypesService.updateLeadType(leadTypesId, updateLeadTypeDto);
  }

  @Post()
  async createLeadType(
    @Body() createLeadTypeDto: LeadTypeCreateDto,
  ): Promise<LeadTypes | any> {
    return this.leadTypesService.createLeadType(
      createLeadTypeDto.name,
      createLeadTypeDto.dealer_id,
    );
  }

  @Delete(':leadTypeId')
  async deleteLeadType(
    @Param('leadTypeId') leadTypeId: string,
  ): Promise<LeadTypes | any> {
    return this.leadTypesService.deleteSingleLeadType(leadTypeId);
  }

  @Delete()
  async deleteManyLeadType(
    @Param('leadTypeIds') leadTypeIds: [string],
  ): Promise<LeadTypes | boolean> {
    return this.leadTypesService.deleteManyLeadType(leadTypeIds);
  }
}
