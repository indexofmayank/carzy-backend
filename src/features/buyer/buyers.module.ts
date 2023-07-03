import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Buyer, BuyerSchema } from './schemas/buyers.schema';
import { BuyersController } from './buyers.controller';
import { BuyersService } from './services/buyer.service';
import { BuyersResolver } from './buyers.resolver';
import { BuyerRepository } from './repositories/buyers.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Buyer.name, schema: BuyerSchema }]),
  ],
  controllers: [BuyersController],
  providers: [BuyerRepository, BuyersService, BuyersResolver],
})
export class BuyersModule {}
