import { Resolver, Args, Query, Mutation, ID } from '@nestjs/graphql';
import { LeadTypes } from './schemas/lead-types.schema';
import { LeadTypesService } from './services/lead-types.service';
import { CreateLeadTypeDto } from './inputs/create.lead-type.dto';
import { LeadTypeIdDto } from './inputs/lead-type.id.dto';
import { UpdateLeadTypeDto } from './inputs/update.lear-type.dto';
import { UpdateLeadTypeStatusDto } from './inputs/update.lead-type.status.dto';

@Resolver()
export class LeadTypesResolver {
  constructor(private readonly leadTypesServic: LeadTypesService) {}

  @Query(() => [LeadTypes], { name: 'listLeadType', nullable: true })
  list(): Promise<LeadTypes | any> {
    return this.leadTypesServic.getLeadTypes(10, 1);
  }

  @Query(() => LeadTypes, { name: 'getLeadTypeDetail', nullable: true })
  getLeadTypeDetail(
    @Args('leadTypeIdDto') leadTypeIdDto: LeadTypeIdDto
    ): Promise<LeadTypes> {
    return this.leadTypesServic.getLeadTypesById(leadTypeIdDto);
  }

  @Mutation(() => LeadTypes, { name: 'addLeadType', nullable: true })
  addLeadType(
    @Args('addLeadTypeDto') addLeadTypeDto: CreateLeadTypeDto
  ): Promise<LeadTypes | any> {
    return this.leadTypesServic.createLeadType(
     addLeadTypeDto
    );
  }

  @Mutation(() => LeadTypes, { name: 'updateLeadType', nullable: true })
  updateLeadTypes(
    @Args('updateLeadTypeDto') updateLeadTypeDto: UpdateLeadTypeDto
    ): Promise<LeadTypes | any> {
    return this.leadTypesServic.updateLeadType(updateLeadTypeDto);
  }

  @Mutation(() => LeadTypes, {name: 'updateLeadTypeStatus', nullable: true})
  updateLeadTypeStatus(
    @Args('updateLeadTypeStatusDto') updateLeadTypeStatusDto: UpdateLeadTypeStatusDto
  ): Promise<LeadTypes | any> {
    return this.leadTypesServic.updateLeadTypeStatus(updateLeadTypeStatusDto)
  }

  @Mutation(() => LeadTypes, { name: 'deleteLeadType', nullable: true })
  deleteLeadType(
    @Args('leadTypeIdDto') leadTypeIdDto: LeadTypeIdDto
    ): Promise<LeadTypes | any> {
    return this.leadTypesServic.deleteSingleLeadType(leadTypeIdDto);
  }

  @Mutation(() => LeadTypes, { name: 'deleteManyLeadType', nullable: true })
  deleteManyLeadType(
    @Args('leadTypeIdDto') leadTypeIdDto: LeadTypeIdDto
    ): Promise<LeadTypes | boolean> {
    return this.leadTypesServic.deleteManyLeadType(leadTypeIdDto);
  }
}
