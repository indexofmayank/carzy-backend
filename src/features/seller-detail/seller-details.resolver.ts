import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SellerDetailService } from './services/seller-detail.service';
import { SellerDetail } from './schemas/seller-detial.schema';
import { CreateSellerDetailDto } from './dtos/seller-detail.create.dto';
import { UpdateSellerDetailDto } from './dtos/seller-detail.update.dto';

@Resolver()
export class SellerDetailResolver {
  constructor(private readonly sellerDetailService: SellerDetailService) {}

  @Query(() => [SellerDetail], { name: 'listSellerDetail', nullable: true })
  list(): Promise<SellerDetail[]> {
    return this.sellerDetailService.getSellers(3, 1);
  }

  @Query(() => SellerDetail, { name: 'getSellerDetail' })
  getSellerDetail(
    @Args('sellerId') sellerId: string,
  ): Promise<SellerDetail | any> {
    return this.sellerDetailService.getSellerById(sellerId);
  }

  @Mutation(() => SellerDetail, { name: 'addSeller' })
  addSeller(
    @Args('addSellerDto') addSellerDto: CreateSellerDetailDto,
  ): Promise<SellerDetail> {
    return this.sellerDetailService.createSeller(
      addSellerDto.name,
      addSellerDto.address,
      addSellerDto.zip_code,
      addSellerDto.phone,
      addSellerDto.alternative_no,
      addSellerDto.email,
      addSellerDto.alternate_email,
      addSellerDto.dob,
    );
  }

  @Mutation(() => SellerDetail, { name: 'updateSeller' })
  updateSeller(
    @Args('updateSellerDto') updateSellerDto: UpdateSellerDetailDto,
    @Args({ name: 'sellerId', type: () => ID }) id: string,
  ): Promise<SellerDetail> {
    return this.sellerDetailService.updateSellerDetail(id, updateSellerDto);
  }

  @Mutation(() => [SellerDetail], { name: 'deleteSeller' })
  deleteSeller(
    @Args({ name: 'SellerID', type: () => ID }) id: string,
  ): Promise<SellerDetail | any> {
    return this.sellerDetailService.deleteSingleSeller(id);
  }

  @Mutation(() => [SellerDetail], { name: 'deleteManySeller' })
  deleteManyYears(
    @Args({ name: 'SellerID', type: () => [ID] }) ids: [string],
  ): Promise<boolean> {
    return this.sellerDetailService.deleteManySeller(ids);
  }
}
