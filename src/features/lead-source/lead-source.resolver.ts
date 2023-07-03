import { Args, Mutation, Resolver, ID } from '@nestjs/graphql';
import { LeadSourceService } from './services/lead-source.service';
import { Query } from '@nestjs/graphql';
import { LeadSource } from './schemas/lead-source.schema';
import { LeadSourceCreateDto } from './dtos/lead-source.create.dto';
import { LeadSoucreUpdateDto } from './dtos/lead-source.update.dto';

@Resolver()
export class LeadSourceResolver {
  constructor(private readonly leadSourcesService: LeadSourceService) {}

  @Query(() => [LeadSource], { name: 'listLeadSource', nullable: true })
  list(): Promise<LeadSource[]> {
    return this.leadSourcesService.getLeadSource(3, 1);
  }

  @Query(() => LeadSource, { name: 'getLeadSourceDetail', nullable: true })
  getLeadSourceDetail(
    @Args({ name: 'leadSourceObjectId', type: () => ID })
    leadSourceObjectId: string,
  ): Promise<LeadSource | any> {
    return this.leadSourcesService.getleadSourceById(leadSourceObjectId);
  }

  @Mutation(() => LeadSource, { name: 'addLeadSource', nullable: true })
  addLeadSource(
    @Args('addLeadSourceDto') addLeadSourceDto: LeadSoucreUpdateDto,
  ): Promise<LeadSource | any> {
    return this.leadSourcesService.createLeadSource(
      addLeadSourceDto.name,
      addLeadSourceDto.dealer_id,
    );
  }

  @Mutation(() => LeadSource, { name: 'updateLeadSource', nullable: true })
  updateLeadSource(
    @Args('updateLeadSourceDto') updateLeadSourceDto: LeadSoucreUpdateDto,
    @Args({ name: 'leadSourceObjectId', type: () => ID })
    leadSourceObjectId: string,
  ): Promise<LeadSource | any> {
    return this.leadSourcesService.updateLeadSource(
      leadSourceObjectId,
      updateLeadSourceDto,
    );
  }

  @Mutation(() => LeadSource, { name: 'deleteLeadSource', nullable: true })
  deleteLeadSource(
    @Args({ name: 'leadSourceObectId', type: () => ID })
    leadSourceObjectId: string,
  ): Promise<LeadSource | any> {
    return this.leadSourcesService.deleteLeadSource(leadSourceObjectId);
  }

  @Mutation(() => [LeadSource], {
    name: 'deleteManyLeadSource',
    nullable: true,
  })
  deleteManyLeadSource(
    @Args({ name: 'leadSourceObjectIds', type: () => [ID] })
    leadSourceObjectIds: [string],
  ): Promise<boolean | any> {
    return this.leadSourcesService.deleteManyLeadSource(leadSourceObjectIds);
  }
}
