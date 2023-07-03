import { Resolver, Query, Args, ID, Mutation } from '@nestjs/graphql';
import { TeleCallingEntriesService } from './services/tele-calling-entries.service';
import { TeleCallingEntry } from './schemas/tele-calling-entry.schema';
import { TeleCallingEntryCreate } from './dtos/tele-calling-entry.create.dto';
import { TeleCallingEntryUpdate } from './dtos/tele-calling-entry.update.dto';

@Resolver()
export class TeleCallingResolver {
  constructor(private readonly teleCallingService: TeleCallingEntriesService) {}

  @Query(() => [TeleCallingEntry], {
    name: 'listTeleCallingEntry',
    nullable: true,
  })
  list(): Promise<TeleCallingEntry[]> {
    return this.teleCallingService.getTeleCallingEntries(3, 1);
  }

  @Query(() => TeleCallingEntry, {
    name: 'getTeleCallingEntryDetail',
    nullable: true,
  })
  getTeleCallingEntryDetail(
    @Args({ name: 'teleCallingId', type: () => ID }) id: string,
  ) {
    return this.teleCallingService.getTeleCallingEntriesById(id);
  }

  @Mutation(() => TeleCallingEntry, {
    name: 'addTeleCallingEntry',
    nullable: true,
  })
  addTeleCallingEntry(
    @Args('addTeleCallingDto') addTeleCallingDto: TeleCallingEntryCreate,
  ): Promise<TeleCallingEntry> {
    return this.teleCallingService.createTeleCallingEntries(
      addTeleCallingDto.buyer_id,
      addTeleCallingDto.visited_next_date,
      addTeleCallingDto.next_visit_date,
      addTeleCallingDto.next_call_date,
      addTeleCallingDto.finance_required,
      addTeleCallingDto.remarks,
      addTeleCallingDto.created_by,
      addTeleCallingDto.specail_instruction,
    );
  }

  @Mutation(() => TeleCallingEntry, {
    name: 'updateTeleCallingEntry',
    nullable: true,
  })
  updateTeleCallingEntry(
    @Args('updateTeleCallingDto') updateTeleCallingDto: TeleCallingEntryUpdate,
    @Args('teleCallingId') teleCallingId: string,
  ): Promise<TeleCallingEntry> {
    return this.teleCallingService.updateTeleCallingEntries(
      teleCallingId,
      updateTeleCallingDto,
    );
  }

  @Mutation(() => TeleCallingEntry, {
    name: 'deleteTeleCalling',
    nullable: true,
  })
  deleteTeleCalling(
    @Args({ name: 'teleCalledId', type: () => ID }) id: string,
  ): Promise<TeleCallingEntry | any> {
    return this.teleCallingService.deleteTeleCallingEntry(id);
  }

  @Mutation(() => TeleCallingEntry, {
    name: 'deleteManyTeleCalling',
    nullable: true,
  })
  deleteManyTeleCalling(
    @Args({ name: 'teleCallingIds', type: () => ID }) ids: [string],
  ): Promise<TeleCallingEntry | any> {
    return this.teleCallingService.deleteManyTeleCallingEntry(ids);
  }
}
