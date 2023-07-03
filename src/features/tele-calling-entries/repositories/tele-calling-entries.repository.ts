import { Injectable } from '@nestjs/common';
import {
  TeleCallingEntry,
  TeleCallingEntrySchema,
} from '../schemas/tele-calling-entry.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';

@Injectable()
export class TeleCallingEntriesRepository extends EntityRepository<TeleCallingEntrySchema> {
  constructor(
    @InjectModel(TeleCallingEntry.name)
    private teleCallingModel: Model<TeleCallingEntrySchema>,
  ) {
    super(teleCallingModel);
  }
}
