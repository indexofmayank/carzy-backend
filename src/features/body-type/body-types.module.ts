import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BodyType, BodyTypeSchema } from './schemas/body-types.schema';
import { BodyTypeService } from './services/body-types.service';
import { BodyTypeRepository } from './repositories/body-types.repository';
import { BodyTypeResolver } from './body-types.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BodyType.name, schema: BodyTypeSchema },
    ]),
  ],
  controllers: [],
  providers: [BodyTypeService, BodyTypeRepository, BodyTypeResolver],
})
export class BodyTypesModule {}
