import { Resolver, Query, Args, ID, Mutation } from "@nestjs/graphql";
import { Dealer } from "./Schemas/dealer.schema";
import { DealersService } from "./services/dealer.service";
import { CreateDealerInput } from "./dtos/inputs/create-dealer.input";
import { UpdateDealerInput } from "./dtos/inputs/update-dealer.input";

@Resolver()
export class DealersResolver {
  constructor(private readonly dealerService: DealersService) { }

  @Query(() => Dealer, { name: "listDealer", nullable: true })
  list(): Promise<Dealer[] | any> {
    return this.dealerService.getDealers(3, 1);
  }

  @Query(() => [Dealer], { name: "getDealerDetail", nullable: true })
  getDealerById(
    @Args({ name: "dealerId", type: () => ID }) id: string,
  ): Promise<Dealer | any> {
    return this.dealerService.getDealerById(id);
  }

  @Mutation(() => Dealer)
  async createDealer(
    @Args("createDealerInput") createDealerInput: CreateDealerInput,
  ): Promise<Dealer> {
    return await this.dealerService.createDealer(createDealerInput);
  }

  @Mutation(() => Dealer)
  async updateDealer(
    @Args("updateDealer") updateDealerInput: UpdateDealerInput
  ): Promise<Dealer> {
    return await this.dealerService.updateDealer(updateDealerInput);
  }

  @Mutation(() => Dealer, { name: "deleteDealer", nullable: true })
  deleteDealer(
    @Args({ name: "dealerId", nullable: true }) id: string,
  ): Promise<Dealer | any> {
    return this.dealerService.deleteDealer(id);
  }

  @Mutation(() => Dealer, { name: "deleteManyDealer", nullable: true })
  deleteManyDealer(
    @Args({ name: "dealerIds", type: () => [ID] }) ids: [string],
  ): Promise<Dealer | boolean | any> {
    return this.dealerService.deleteManyDealer(ids);
  }
}
