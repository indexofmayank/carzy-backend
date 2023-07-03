import { Resolver, Query, Args, Mutation, ID } from '@nestjs/graphql';
import { MakeYearService } from './services/make-year.service';
import { MakeYear } from './schemas/make-year.schema';
import { CreateMakeYearDto } from './dtos/make-year.create.dto';
import { UpdateMakeYearDto } from './dtos/make-year.update.dto';

@Resolver()
export class MakeYearResolver {
  constructor(private readonly makeYearService: MakeYearService) {}

  @Query(() => [MakeYear], { name: 'listYear', nullable: true })
  list(): Promise<MakeYear[]> {
    return this.makeYearService.getYears(3, 1);
  }

  @Query(() => MakeYear, { name: 'getYeadDetail' })
  getMakeYearDetail(@Args('yearId') yearId: string): Promise<MakeYear> {
    return this.makeYearService.getYearById(yearId);
  }

  @Mutation(() => MakeYear, { name: 'addYear' })
  addYear(
    @Args('addYearDto') addYearDto: CreateMakeYearDto,
  ): Promise<MakeYear> {
    return this.makeYearService.createYear(addYearDto.year);
  }

  @Mutation(() => MakeYear, { name: 'updateYear', nullable: true })
  updateYear(
    @Args('updateYearDto') updateYearDto: UpdateMakeYearDto,
    @Args({ name: 'yearId', type: () => ID }) id: string,
  ): Promise<MakeYear> {
    return this.makeYearService.updateYear(id, updateYearDto);
  }

  @Mutation(() => [MakeYear], { name: 'deleteYear' })
  deleteYear(
    @Args({ name: 'YearId', type: () => ID }) id: string,
  ): Promise<MakeYear | any> {
    return this.makeYearService.deleteYear(id);
  }

  @Mutation(() => [MakeYear], { name: 'deleteManyYears' })
  deleteManyYears(
    @Args({ name: 'yearIds', type: () => [ID] }) ids: [string],
  ): Promise<boolean> {
    return this.makeYearService.deleteManyYear(ids);
  }
}
