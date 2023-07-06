import { Resolver, Query, Args, Mutation, ID } from "@nestjs/graphql";
import { MakeYearService } from "./services/make-year.service";
import { MakeYear } from "./schemas/make-year.schema";
import { MakeYearIdDto } from "./inputs/make-year.id.dto";
import { CreateMakeYearDto } from "./inputs/create.make-year.dto";
import { UpdateMakeYearDto } from "./inputs/update.make-year.dto";
import { UpdateMakeyearStatusDto } from "./inputs/update.make-year.status.dto";

@Resolver()
export class MakeYearResolver {
  constructor(private readonly makeYearService: MakeYearService) {}

  @Query(() => [MakeYear], { name: "listYear", nullable: true })
  list(): Promise<MakeYear[]> {
    return this.makeYearService.getYears(10, 1);
  }

  @Query(() => MakeYear, { name: "getYeadDetail" })
  getMakeYearDetail(
    @Args("makeYearIdDto") makeYearIdDto: MakeYearIdDto
  ): Promise<MakeYear> {
    return this.makeYearService.getYearById(makeYearIdDto);
  }

  @Mutation(() => MakeYear, { name: "addYear" })
  addYear(
    @Args("addMakeYearDto") addMakeYearDto: CreateMakeYearDto
    ): Promise<MakeYear> {
    return this.makeYearService.createYear(addMakeYearDto);
  }

  @Mutation(() => MakeYear, {name: "updateYearStatus"})
  updateYearStatus(
    @Args("updateMakeYearStatusDto") updateMakeYearStatusDto: UpdateMakeyearStatusDto 
  ): Promise<MakeYear> {
    return this.makeYearService.updateYearStatus(updateMakeYearStatusDto)
  }

  @Mutation(() => MakeYear, { name: "updateYear", nullable: true })
  updateYear(
    @Args("updateMakeYearDto") updateMakeYearDto: UpdateMakeYearDto
    ): Promise<MakeYear> {
    return this.makeYearService.updateYear(updateMakeYearDto);
  }

  @Mutation(() => [MakeYear], { name: "deleteYear" })
  deleteYear(
    @Args("makeYearIdDto") makeYearIdDto: MakeYearIdDto
    ): Promise<MakeYear | any> {
    return this.makeYearService.deleteYear(makeYearIdDto);
  }

  @Mutation(() => [MakeYear], { name: "deleteManyYears" })
  deleteManyYears(
    @Args("makeYearIdDto") makeYearIdDto: MakeYearIdDto
    ): Promise<boolean> {
    return this.makeYearService.deleteManyYear(makeYearIdDto);
  }
}
