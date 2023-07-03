import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MakeYear, MakeYearSchema } from './schemas/make-year.schema';
import { MakeYearRepository } from './repositories/make-year.repository';
import { MakeYearService } from './services/make-year.service';
import { MakeYearController } from './make-year.controller';
import { MakeYearResolver } from './make-year.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MakeYear.name, schema: MakeYearSchema },
    ]),
  ],
  controllers: [MakeYearController],
  providers: [MakeYearRepository, MakeYearService, MakeYearResolver],
})
export class MakeYearModule {}
