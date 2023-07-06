import { BuyersService } from './services/buyer.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { Buyer } from './schemas/buyers.schema';
import { CreateBuyerDto } from './dtos/create.buyer.dto';
import { UpdateBuyerDto } from './dtos/update.buyer.dto';

@Controller('buyers')
export class BuyersController {
  constructor(public readonly buyerService: BuyersService) { }

  @Get(':buyerId')
  async getBuyerById(@Param('buyerId') buyerId: string): Promise<Buyer> {
    return this.buyerService.getBuyerById(buyerId);
  }

  @Get()
  async getBuyers(): Promise<Buyer[]> {
    return this.buyerService.getBuyers(3, 1);
  }

  @Post()
  async createBuyer(@Body() createBuyerDto: CreateBuyerDto): Promise<Buyer> {
    return this.buyerService.createBuyer(
      createBuyerDto.name,
      createBuyerDto.contact_no,
      createBuyerDto.address,
      createBuyerDto.referral,
      createBuyerDto.email,
      createBuyerDto.status,
      createBuyerDto.dealer,
      createBuyerDto.dob,
      createBuyerDto.doa,
      createBuyerDto.spouse_details,
    );
  }

  @Put(':buyerId')
  async updateBuyer(
    @Param('buyerId') buyerId: string,
    @Body() updateBuyerDto: UpdateBuyerDto,
  ): Promise<Buyer | any> {
    return this.buyerService.updateBuyer(buyerId, updateBuyerDto);
  }

  @Delete(':buyerId')
  async deleteSingleBuyer(@Param('buyerId') buyerId: string): Promise<any> {
    return this.buyerService.deleteBuyer(buyerId);
  }

  @Delete()
  async deleteManyBuyers(
    @Param('buyerIds') buyerIds: [string],
  ): Promise<boolean> {
    return this.buyerService.deleteManyBuyer(buyerIds);
  }
}
