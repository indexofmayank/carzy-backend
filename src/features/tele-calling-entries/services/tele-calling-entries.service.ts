import { Injectable } from '@nestjs/common';
import { TeleCallingEntriesRepository } from '../repositories/tele-calling-entries.repository';
import { TeleCallingEntry } from '../schemas/tele-calling-entry.schema';
import { TeleCallingEntryUpdate } from '../dtos/tele-calling-entry.update.dto';

@Injectable()
export class TeleCallingEntriesService {
  constructor(
    private readonly teleCallingRepository: TeleCallingEntriesRepository,
  ) {}

  async getTeleCallingEntriesById(
    teleCallingObjectId,
  ): Promise<TeleCallingEntry | any> {
    return this.teleCallingRepository.findById(teleCallingObjectId);
  }

  async getTeleCallingEntries(
    resPerPage: number,
    pageNo: number,
  ): Promise<TeleCallingEntry[]> {
    return this.teleCallingRepository.find({}, resPerPage, pageNo);
  }

  async createTeleCallingEntries(
    buyer_id: string,
    visited_next_date: string,
    next_visit_date: string,
    next_call_date: string,
    finance_required: boolean,
    remarks: string,
    created_by: string,
    specail_instruction: string,
  ): Promise<TeleCallingEntry> {
    return this.teleCallingRepository.create({
      buyer_id,
      visited_next_date,
      next_call_date,
      next_visit_date,
      finance_required,
      remarks,
      created_by,
      specail_instruction,
    });
  }

  async updateTeleCallingEntries(
    teleCallingObjectId: string,
    updateTeleCallingDto: TeleCallingEntryUpdate,
  ): Promise<TeleCallingEntry> {
    return this.teleCallingRepository.findOneAndUpdate(
      { _id: teleCallingObjectId },
      updateTeleCallingDto,
    );
  }

  async deleteTeleCallingEntry(teleCallingEntryObjectId: string): Promise<any> {
    return this.teleCallingRepository.findOneAndDelete({
      _id: teleCallingEntryObjectId,
    });
  }

  async deleteManyTeleCallingEntry(
    teleCallingEntryObjectIds: [string],
  ): Promise<boolean> {
    return this.teleCallingRepository.findManyAndDelete({
      _id: { teleCallingEntryObjectIds },
    });
  }
}
