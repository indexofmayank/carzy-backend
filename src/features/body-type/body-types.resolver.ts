import { Resolver, Query, Args, ID, Mutation } from '@nestjs/graphql';
import { BodyType } from './schemas/body-types.schema';
import { BodyTypeService } from './services/body-types.service';
import { CreateBodyTypeDto } from './inputs/create.body-type.dto';
import { UpdateBodyTypeDto } from './inputs/update.body-type.dto';
import { UpdateBodyTypeStatusDto } from './inputs/update.body-type.status.dto';
import { DeleteBodyTypeDto } from './inputs/delete.body-type.dto';

@Resolver()
export class BodyTypeResolver {
  constructor(private readonly bodyTypeService: BodyTypeService) {}

  @Query(() => [BodyType], { name: 'listBodyType', nullable: true })
  list(): Promise<BodyType[]> {
    return this.bodyTypeService.getBodyTypes(10, 1);
  }

  @Query(() => BodyType, { name: 'getBodyTypeDetail', nullable: true })
  getBodyTypeDetail(
    @Args({ name: 'bodyTypeId', type: () => ID }) id: string,
  ): Promise<BodyType> {
    return this.bodyTypeService.getBodyTypeById(id);
  }

  @Mutation(() => BodyType, { name: 'addBodyType' })
  addBodyType(
    @Args('addBodyTypeDto') addBodyTypeDto: CreateBodyTypeDto,
  ): Promise<BodyType> {
    return this.bodyTypeService.createBodyType(addBodyTypeDto);
  }

  @Mutation(() => BodyType, { name: 'deleteBodyType' })
  deleteBodyType(
    @Args('deleteBodyTypeDto') deleteBodyTypeDto: DeleteBodyTypeDto,
  ): Promise<BodyType | any> {
    return this.bodyTypeService.deleteBodyType(deleteBodyTypeDto);
  }

  @Mutation(() => BodyType, { name: 'deleteManyBodyTypes' })
  deleteManyBodyType(
    @Args('deleteManyBodyTypeDto') deleteManyBodyTypeDto: DeleteBodyTypeDto ,
  ): Promise<boolean> {
    return this.bodyTypeService.deleteManyBodyType(deleteManyBodyTypeDto);
  }

  @Mutation(() => BodyType, { name: 'updateBodyType' })
  updateBodyType(
    @Args('updateBodyTypeDto') updateBodyTypeDto: UpdateBodyTypeDto,
    @Args({ name: 'bodyTypeId', type: () => ID }) id: string,
  ): Promise<BodyType> {
    return this.bodyTypeService.updateBodyType(id, updateBodyTypeDto);
  }

  @Mutation(() => BodyType, {name: 'updateBodyTypeStatus'})
  updateBodyTypeStatus(
    @Args('updateBodyTypeStatusDto') updateBodyTypeStatusDto: UpdateBodyTypeStatusDto,
  ): Promise<BodyType> {
    return this.bodyTypeService.updateBodyTypeStatus(updateBodyTypeStatusDto.bodyTypeId, updateBodyTypeStatusDto.status)
  }
}
