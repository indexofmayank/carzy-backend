import { Injectable } from "@nestjs/common";
import { MakeYear, MakeYearSchema } from "../schemas/make-year.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EntityRepository } from "src/database/entity.repository";

@Injectable()
export class MakeYearRepository extends EntityRepository<MakeYearSchema> {
  constructor(
    @InjectModel(MakeYear.name) private makeYearModel: Model<MakeYearSchema>,
  ) {
    super(makeYearModel);
  }
}
