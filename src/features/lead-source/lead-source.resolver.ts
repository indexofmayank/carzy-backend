import { Args, Mutation, Resolver, ID } from '@nestjs/graphql';
import { LeadSourceService } from './services/lead-source.service';
import { Query } from '@nestjs/graphql';
import { LeadSource } from './schemas/lead-source.schema';
import { LeadSourceIdDto } from './inputs/lead-source.id.dto';
import { CreateLeadSourceDto } from './inputs/create.lead-source.dto';
import { UpdateLeadSourceDto } from './inputs/update.lead-source.dto';
import { UpdateLeadSourceStatusDto } from './inputs/update.lead-source.status.dto';

@Resolver()
export class LeadSourceResolver {
  constructor(private readonly leadSourcesService: LeadSourceService) {}

  @Query(() => [LeadSource], { name: 'listLeadSource', nullable: true })
  list(): Promise<LeadSource[]> {
    return this.leadSourcesService.getLeadSource(10, 1);
  }

  @Query(() => LeadSource, { name: 'getLeadSourceDetail', nullable: true })
  getLeadSourceDetail(
    @Args('leadSourceIdDto') leadSourceIdDto: LeadSourceIdDto
  ): Promise<LeadSource | any> {
    return this.leadSourcesService.getleadSourceById(leadSourceIdDto);
  }

  @Mutation(() => LeadSource, { name: 'addLeadSource', nullable: true })
  addLeadSource(
    @Args('addLeadSourceDto') addLeadSourceDto: CreateLeadSourceDto,
  ): Promise<LeadSource | any> {
    return this.leadSourcesService.createLeadSource(addLeadSourceDto);
  }

  @Mutation(() => LeadSource, { name: 'updateLeadSource', nullable: true })
  updateLeadSource(
    @Args('updateLeadSourceDto') updateLeadSourceDto: UpdateLeadSourceDto,
  ): Promise<LeadSource | any> {
    return this.leadSourcesService.updateLeadSource(updateLeadSourceDto);
  }

  @Mutation(() => LeadSource, {name: 'updateLeadSourceStatus', nullable: true})
  updateLeadSourceStatus(
    @Args('updateLeadSourceStatusDto') updateLeadSourceStatusDto: UpdateLeadSourceStatusDto
  ): Promise<LeadSource> {
    return this.leadSourcesService.updateLeadSourceStatus(updateLeadSourceStatusDto)
  }

  @Mutation(() => LeadSource, { name: 'deleteLeadSource', nullable: true })
  deleteLeadSource(
    @Args('leadSourceIdDto') leadSourceIdDto: LeadSourceIdDto
    ): Promise<LeadSource | any> {
    return this.leadSourcesService.deleteLeadSource(leadSourceIdDto);
  }

  @Mutation(() => [LeadSource], {
    name: 'deleteManyLeadSource',
    nullable: true,
  })
  deleteManyLeadSource(
    @Args('leadSourceIdDto') leadSourceIdDto: LeadSourceIdDto
    ): Promise<boolean | any> {
    return this.leadSourcesService.deleteManyLeadSource(leadSourceIdDto);
  }
}
