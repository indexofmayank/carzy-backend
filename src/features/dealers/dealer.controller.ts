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
import { DealersService } from './services/dealer.service';
import { Dealer } from './Schemas/dealer.schema';
import { DealerUpdateDto } from './dtos/dealer.update.dto';

@Controller('dealers')
export class DealersController {
  constructor(public readonly dealerService: DealersService) {}

  @Get(':dealerId')
  async getDealerById(
    @Param('dealerId') dealerId: string,
  ): Promise<Dealer | any> {
    return this.dealerService.getDealerById(dealerId);
  }

  @Get()
  async getDealers(): Promise<Dealer[] | any> {
    return this.dealerService.getDealers(3, 1);
  }

  @Post()
  async createDealer(
    @Body() createDealerDto: DealerUpdateDto,
  ): Promise<Dealer | any> {
    return this.dealerService.createDealer(
      createDealerDto.name,
      createDealerDto.address,
      createDealerDto.status,
      createDealerDto.email,
      createDealerDto.phone,
    );
  }

  @Put(':dealerId')
  async updateDealer(
    @Param('dealerId') dealerId: string,
    @Body() updateDealerDto: DealerUpdateDto,
  ): Promise<Dealer | any> {
    return this.dealerService.updateDealer(dealerId, updateDealerDto);
  }

  @Delete(':dealerId')
  async deleteSingleDealer(@Param('dealerId') dealerId: string): Promise<any> {
    return this.dealerService.deleteDealer(dealerId);
  }

  @Delete()
  async deleteManyDealer(
    @Param('dealerIds') dealerIds: [string],
  ): Promise<boolean | Dealer> {
    return this.dealerService.deleteManyDealer(dealerIds);
  }
}
