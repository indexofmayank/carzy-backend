import { Resolver, Query, Args, ID, Mutation } from "@nestjs/graphql";
import { CallType } from "./schemas/call-types.schema";
import { CallTypeService } from "./services/call-types.service";
import { CallTypeCreateDto } from "./dtos/call-types.create.dto";

@Resolver()
export class CallTypesResolver {
  constructor(private readonly callTypeService: CallTypeService) { }

  @Query(() => [CallType], { name: "listCallType", nullable: true })
  list(): Promise<CallType[]> {
    return this.callTypeService.getCallTypes(3, 1);
  }

  @Query(() => CallType, { name: "getCallTypeDetail", nullable: true })
  getCallTypeDetail(
    @Args({ name: "callTypeId", type: () => ID }) id: string,
  ): Promise<CallType | any> {
    return this.callTypeService.getCallTypeById(id);
  }

  @Mutation(() => CallType, { name: "addCallType", nullable: true })
  addCallType(
    @Args("createCallTypeDto") createCallTypeDto: CallTypeCreateDto,
  ): Promise<CallType | any> {
    return this.callTypeService.createCallType(
      createCallTypeDto.name,
      createCallTypeDto.dealer,
    );
  }

  @Mutation(() => CallType, { name: "updateCallType", nullable: true })
  updateCallType(
    @Args("updateCallTypeDto") updateCallTypeDto: CallTypeCreateDto,
    @Args({ name: "updateCallTypeId", type: () => ID }) id: string,
  ): Promise<CallType | any> {
    return this.callTypeService.updateCallType(id, updateCallTypeDto);
  }

  @Mutation(() => CallType, { name: "deleteCallType", nullable: true })
  deleteCallType(@Args({ name: "callTypeId", type: () => ID }) id: string) {
    return this.callTypeService.deleteCallType(id);
  }
}
