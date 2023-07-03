import { Resolver, Args, Query, Mutation, ID } from '@nestjs/graphql';
import { LeadTypes } from './schemas/lead-types.schema';
import { LeadTypesService } from './services/lead-types.service';
import { LeadTypeCreateDto } from './dtos/lead-types.create.dto';
import { LeadTypeUpdateDto } from './dtos/lead-types.update.dto';

@Resolver()
export class LeadTypesResolver {
  constructor(private readonly leadTypesServic: LeadTypesService) {}

  @Query(() => [LeadTypes], { name: 'listLeadType', nullable: true })
  list(): Promise<LeadTypes | any> {
    return this.leadTypesServic.getLeadTypes(3, 1);
  }

  @Query(() => LeadTypes, { name: 'getLeadTypeDetail', nullable: true })
  getLeadTypeDetail(
    @Args({ name: 'leadTypeId', type: () => ID }) id: string,
  ): Promise<LeadTypes> {
    return this.leadTypesServic.getLeadTypesById(id);
  }

  @Mutation(() => LeadTypes, { name: 'addLeadTypes', nullable: true })
  addLeadTypes(
    @Args('createLeadTypeDto') createLeadTypeDto: LeadTypeCreateDto,
  ): Promise<LeadTypes | any> {
    return this.leadTypesServic.createLeadType(
      createLeadTypeDto.name,
      createLeadTypeDto.dealer_id,
    );
  }

  @Mutation(() => LeadTypes, { name: 'updateLeadTypes', nullable: true })
  updateLeadTypes(
    @Args({ name: 'leadTypeId', type: () => ID }) leadTypeId: string,
    @Args('updateLeadTypeDto') updateLeadTypeDto: LeadTypeUpdateDto,
  ): Promise<LeadTypes | any> {
    return this.leadTypesServic.updateLeadType(leadTypeId, updateLeadTypeDto);
  }

  @Mutation(() => LeadTypes, { name: 'deleteLeadTypes', nullable: true })
  deleteSingleLeadType(
    @Args({ name: 'leadTypeId', type: () => ID }) id: string,
  ): Promise<LeadTypes | any> {
    return this.leadTypesServic.deleteSingleLeadType(id);
  }

  @Mutation(() => LeadTypes, { name: 'deleteManyLeadTypes', nullable: true })
  deleteManyLeadTypes(
    @Args({ name: 'leadTypesIds', type: () => [ID] }) ids: [string],
  ): Promise<LeadTypes | boolean> {
    return this.leadTypesServic.deleteManyLeadType(ids);
  }
}
