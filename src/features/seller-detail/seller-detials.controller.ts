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
import {
  SellerDetail,
  SellerDetailSchema,
} from './schemas/seller-detial.schema';
import { SellerDetailService } from './services/seller-detail.service';
import { CreateSellerDetailDto } from './dtos/seller-detail.create.dto';
import { UpdateSellerDetailDto } from './dtos/seller-detail.update.dto';

@Controller('seller-details')
export class SellerDetailsController {
  constructor(public readonly sellerDetailService: SellerDetailService) {}

  @Get(':sellerId')
  async getSellerById(
    @Param('sellerId') sellerId: string,
  ): Promise<SellerDetail> {
    return this.sellerDetailService.getSellerById(sellerId);
  }

  @Get()
  async getSellers(): Promise<SellerDetail[]> {
    return this.sellerDetailService.getSellers(3, 1);
  }

  @Post()
  async createSeller(
    @Body() createSellerDto: CreateSellerDetailDto,
  ): Promise<SellerDetail> {
    return this.sellerDetailService.createSeller(
      createSellerDto.name,
      createSellerDto.address,
      createSellerDto.zip_code,
      createSellerDto.phone,
      createSellerDto.alternative_no,
      createSellerDto.email,
      createSellerDto.alternate_email,
      createSellerDto.dob,
    );
  }

  @Put(':sellerId')
  async updateSeller(
    @Param('sellerId') sellerId: string,
    @Body() updateSellerDto: UpdateSellerDetailDto,
  ): Promise<SellerDetail> {
    return this.sellerDetailService.updateSellerDetail(
      sellerId,
      updateSellerDto,
    );
  }

  @Delete(':sellerId')
  async deleteSingleSeller(
    @Param('sellerId') sellerId: string,
  ): Promise<SellerDetail> {
    return this.sellerDetailService.deleteSingleSeller(sellerId);
  }

  @Delete()
  async deleteManySeller(
    @Param('sellerIds') sellerIds: [string],
  ): Promise<boolean> {
    return this.sellerDetailService.deleteManySeller(sellerIds);
  }
}
