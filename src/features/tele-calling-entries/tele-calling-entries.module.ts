import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TeleCallingEntrySchema,
  TeleCallingEntry,
} from './schemas/tele-calling-entry.schema';
import { TeleCallingEntriesRepository } from './repositories/tele-calling-entries.repository';
import { TeleCallingEntriesService } from './services/tele-calling-entries.service';
import { TeleCallingResolver } from './tele-calling-entries.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TeleCallingEntry.name, schema: TeleCallingEntrySchema },
    ]),
  ],
  controllers: [],
  providers: [
    TeleCallingEntriesRepository,
    TeleCallingEntriesService,
    TeleCallingResolver,
  ],
})
export class TeleCallingEntryModule {}
