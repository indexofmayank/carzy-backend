import { Resolver, Query, Args, ID, Mutation } from '@nestjs/graphql';
import { BuyersService } from './services/buyer.service';
import { CreateBuyerDto } from './dtos/create.buyer.dto';
import { UpdateBuyerDto } from './dtos/update.buyer.dto';
import { BuyerOutputDto } from './dtos/buyer.output.dto';
import { Buyer } from './schemas/buyers.schema';
import { BuyerInputDto } from './dtos/buyer.input.dto';

@Resolver()
export class BuyersResolver {
  constructor(private readonly buyerService: BuyersService) { }

  @Query(() => BuyerOutputDto, { name: 'getBuyerDetail', nullable: true })
  getBuyerDetail(
    @Args({ name: 'buyerId', type: () => ID })
    id: string,
  ): Promise<Buyer> {
    return this.buyerService.getBuyerById(id);
  }

  @Query(() => [BuyerOutputDto], { name: 'listBuyer', nullable: true })
  list(): Promise<Buyer[]> {
    return this.buyerService.getBuyers(3, 1);
  }

  @Mutation(() => BuyerOutputDto, { name: 'addBuyer', nullable: true })
  addBuyer(@Args('addBuyerDto') addBuyerDto: BuyerInputDto): Promise<Buyer> {
    return this.buyerService.createBuyer(
      addBuyerDto.name,
      addBuyerDto.contact_no,
      addBuyerDto.address,
      addBuyerDto.referral,
      addBuyerDto.email,
      addBuyerDto.status,
      addBuyerDto.dealer,
      addBuyerDto.dob,
      addBuyerDto.doa,
      addBuyerDto.spouse_details,
    );
  }

  @Mutation(() => BuyerOutputDto, { name: 'updateBuyer' })
  updateBuyer(
    @Args({ name: 'buyerId', type: () => ID }) id: string,
    @Args('updateBuyerDto') updateBuyerDto: BuyerInputDto,
  ): Promise<Buyer> {
    return this.buyerService.updateBuyer(id, updateBuyerDto);
  }

  @Mutation(() => BuyerOutputDto, { name: 'deleteBuyer' })
  deleteBuyer(
    @Args({ name: 'buyerId', type: () => ID }) id: string,
  ): Promise<Buyer | any> {
    return this.buyerService.deleteBuyer(id);
  }

  @Mutation(() => BuyerOutputDto, { name: 'deleteManyBuyers' })
  deleteManyBuyers(
    @Args({ name: 'buyerIds', type: () => [ID] }) ids: [string],
  ): Promise<boolean> {
    return this.buyerService.deleteManyBuyer(ids);
  }
}
