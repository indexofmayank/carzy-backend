import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Dealer, DealerSchema } from './Schemas/dealer.schema';
import { DealersRepository } from './repositories/dealer.repository';
import { DealersService } from './services/dealer.service';
import { DealersController } from './dealer.controller';
import { DealersResolver } from './dealer.resolver';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Dealer.name, schema: DealerSchema }]),
    EmployeeModule,
  ],
  controllers: [DealersController],
  providers: [DealersRepository, DealersService, DealersResolver],
  exports: [EmployeeModule],
})
export class DealersModule { }
