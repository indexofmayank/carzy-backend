import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Color, ColorSchema } from '../schemas/color.schema';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';

@Injectable()
export class ColorsRepository extends EntityRepository<ColorSchema> {
  constructor(@InjectModel(Color.name) private colorModel: Model<ColorSchema>) {
    super(colorModel);
  }
}
