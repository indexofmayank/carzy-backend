import { Injectable } from "@nestjs/common";
import { MakeYearRepository } from "../repositories/make-year.repository";
import { MakeYear } from "../schemas/make-year.schema";
import { MakeYearIdDto } from "../inputs/make-year.id.dto";
import { UpdateMakeYearDto } from "../inputs/update.make-year.dto";
import { UpdateMakeyearStatusDto } from "../inputs/update.make-year.status.dto";
import { CreateMakeYearDto } from "../inputs/create.make-year.dto";

@Injectable()
export class MakeYearService {
  constructor(private readonly makeYearRepository: MakeYearRepository) {}

  async getYearById(makeYearIdDto: MakeYearIdDto): Promise<MakeYear | any> {
    return this.makeYearRepository.findById(
      {_id: makeYearIdDto.makeYearId}
    );
  }

  async getYears(resPerPage, pageNo): Promise<MakeYear[]> {
    return this.makeYearRepository.find({}, resPerPage, pageNo);
  }

  async createYear(addMakeYearDto: CreateMakeYearDto): Promise<MakeYear> {
    return this.makeYearRepository.create(addMakeYearDto);
  }

  async updateYear(
    updateMakeYearDto: UpdateMakeYearDto
    ): Promise<MakeYear> {
    return this.makeYearRepository.findOneAndUpdate(
      { _id: updateMakeYearDto.makeYearId },
      {year: updateMakeYearDto.year},
    );
  }

  async updateYearStatus(
    updateMakeYearStatusDto: UpdateMakeyearStatusDto
  ): Promise<MakeYear> {
    return this.makeYearRepository.findOneAndUpdate(
      {_id: updateMakeYearStatusDto.makeYearId},
      {status: updateMakeYearStatusDto.status},
    )
  }

  async deleteYear(makeYearIdDto: MakeYearIdDto): Promise<MakeYear> {
    return this.makeYearRepository.findOneAndDelete({ _id: makeYearIdDto.makeYearId });
  }

  async deleteManyYear(makeYearIdDto: MakeYearIdDto): Promise<boolean> {
    return this.makeYearRepository.findManyAndDelete({
      _id: makeYearIdDto.makeYearId
    });
  }
}
