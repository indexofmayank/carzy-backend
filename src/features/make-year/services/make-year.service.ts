import { Injectable } from '@nestjs/common';
import { MakeYearRepository } from '../repositories/make-year.repository';
import { MakeYear } from '../schemas/make-year.schema';
import { UpdateMakeYearDto } from '../dtos/make-year.update.dto';

@Injectable()
export class MakeYearService {
  constructor(private readonly makeYearRepository: MakeYearRepository) {}

  async getYearById(yearObjectId): Promise<MakeYear | any> {
    return this.makeYearRepository.findById(yearObjectId);
  }

  async getYears(resPerPage, pageNo): Promise<MakeYear[]> {
    return this.makeYearRepository.find({}, resPerPage, pageNo);
  }

  async createYear(year: number): Promise<MakeYear> {
    return this.makeYearRepository.create({
      year,
    });
  }

  async updateYear(
    yearObjectId: string,
    updateYearDto: UpdateMakeYearDto,
  ): Promise<MakeYear> {
    return this.makeYearRepository.findOneAndUpdate(
      { _id: yearObjectId },
      updateYearDto,
    );
  }

  async deleteYear(yearObjectId: string): Promise<MakeYear> {
    return this.makeYearRepository.findOneAndDelete({ _id: yearObjectId });
  }

  async deleteManyYear(yearObjestIds: [string]): Promise<boolean> {
    return this.makeYearRepository.findManyAndDelete({
      _id: { yearObjestIds },
    });
  }
}
