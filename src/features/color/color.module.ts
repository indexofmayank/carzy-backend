import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ColorSchema } from './schemas/color.schema';
import { ColorsRepository } from './repositories/color.repository';
import { ColorsService } from './services/color.service';
import { ColorsResolver } from './color.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Color', schema: ColorSchema }]),
  ],
  controllers: [],
  providers: [ColorsRepository, ColorsService, ColorsResolver],
})
export class ColorModule {}
