import { Resolver, Query, Args, ID, Mutation } from '@nestjs/graphql';
import { Dealer } from './Schemas/dealer.schema';
import { DealersService } from './services/dealer.service';
import { DealerCreateDto } from './dtos/dealer.create.dto';
import { DealerUpdateDto } from './dtos/dealer.update.dto';
import { resourceUsage } from 'process';

@Resolver()
export class DealersResolver {
  constructor(private readonly dealerService: DealersService) {}

  @Query(() => Dealer, { name: 'listDealer', nullable: true })
  list(): Promise<Dealer[] | any> {
    return this.dealerService.getDealers(3, 1);
  }

  @Query(() => [Dealer], { name: 'getDealerDetail', nullable: true })
  getDealerById(
    @Args({ name: 'dealerId', type: () => ID }) id: string,
  ): Promise<Dealer | any> {
    return this.dealerService.getDealerById(id);
  }

  @Mutation(() => Dealer, { name: 'addDealer', nullable: true })
  createDealer(
    @Args('createDealerDto') createDealerDto: DealerCreateDto,
  ): Promise<Dealer | any> {
    return this.dealerService.createDealer(
      createDealerDto.name,
      createDealerDto.address,
      createDealerDto.status,
      createDealerDto.email,
      createDealerDto.phone,
    );
  }

  @Mutation(() => Dealer, { name: 'updateDealer', nullable: true })
  updateDealer(
    @Args('updateDealerId') updateDealerDto: DealerUpdateDto,
    @Args({ name: 'dealerId', type: () => ID }) id: string,
  ): Promise<Dealer | any> {
    return this.dealerService.updateDealer(id, updateDealerDto);
  }

  @Mutation(() => Dealer, { name: 'deleteDealer', nullable: true })
  deleteDealer(
    @Args({ name: 'dealerId', nullable: true }) id: string,
  ): Promise<Dealer | any> {
    return this.dealerService.deleteDealer(id);
  }

  @Mutation(() => Dealer, { name: 'deleteManyDealer', nullable: true })
  deleteManyDealer(
    @Args({ name: 'dealerIds', type: () => [ID] }) ids: [string],
  ): Promise<Dealer | boolean | any> {
    return this.dealerService.deleteManyDealer(ids);
  }
}
