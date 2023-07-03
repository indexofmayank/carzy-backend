import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CallType, CallTypeSchema } from './schemas/call-types.schema';
import { CallTypesController } from './call-types.controller';
import { CallTypeService } from './services/call-types.service';
import { CallTypesRepository } from './repositories/call-types.repository';
import { CallTypesResolver } from './call-types.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CallType.name, schema: CallTypeSchema },
    ]),
  ],
  controllers: [CallTypesController],
  providers: [CallTypeService, CallTypesRepository, CallTypesResolver],
})
export class CallTypeModule {}
