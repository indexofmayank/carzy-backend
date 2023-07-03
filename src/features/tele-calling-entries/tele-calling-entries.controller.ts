import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
} from '@nestjs/common';

import { TeleCallingEntriesService } from './services/tele-calling-entries.service';
import { TeleCallingEntry } from './schemas/tele-calling-entry.schema';
import { TeleCallingEntryCreate } from './dtos/tele-calling-entry.create.dto';
import { TeleCallingEntryUpdate } from './dtos/tele-calling-entry.update.dto';

@Controller('tele-calling-entries')
export class TeleCallingEntriesController {
  constructor(public readonly teleCalllingService: TeleCallingEntriesService) {}

  @Get(':teleCallingId')
  async getTeleCallingById(@Param('teleCallingId') teleCallingId: string) {
    return this.teleCalllingService.getTeleCallingEntriesById(teleCallingId);
  }

  @Get()
  async getTeleCallings(): Promise<TeleCallingEntry[]> {
    return this.teleCalllingService.getTeleCallingEntries(3, 1);
  }

  @Post()
  async createTeleCalling(
    @Body() createTeleCallingDto: TeleCallingEntryCreate,
  ): Promise<TeleCallingEntry> {
    return this.teleCalllingService.createTeleCallingEntries(
      createTeleCallingDto.buyer_id,
      createTeleCallingDto.visited_next_date,
      createTeleCallingDto.next_visit_date,
      createTeleCallingDto.next_call_date,
      createTeleCallingDto.finance_required,
      createTeleCallingDto.remarks,
      createTeleCallingDto.created_by,
      createTeleCallingDto.specail_instruction,
    );
  }

  @Put(':teleCallingId')
  async updateTeleCalling(
    @Param('teleCallingId') teleCallingId: string,
    @Body() updateTeleCallingDto: TeleCallingEntryUpdate,
  ): Promise<TeleCallingEntry> {
    return this.teleCalllingService.updateTeleCallingEntries(
      teleCallingId,
      updateTeleCallingDto,
    );
  }

  @Delete(':teleCallingId')
  async deleteSingleTeleCalling(
    @Param('teleCallingId') teleCallingId: string,
  ): Promise<TeleCallingEntry | any> {
    return this.teleCalllingService.deleteTeleCallingEntry(teleCallingId);
  }

  @Delete()
  async deleteManyTeleCalling(
    @Param('teleCallingIds') teleCallingIds: [string],
  ): Promise<boolean> {
    return this.teleCalllingService.deleteManyTeleCallingEntry(teleCallingIds);
  }
}
