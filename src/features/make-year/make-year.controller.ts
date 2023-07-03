import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { MakeYearService } from './services/make-year.service';
import { MakeYear } from './schemas/make-year.schema';
import { CreateMakeYearDto } from './dtos/make-year.create.dto';
import { UpdateMakeYearDto } from './dtos/make-year.update.dto';

@Controller('make-years')
export class MakeYearController {
  constructor(public readonly makeYearService: MakeYearService) {}

  @Get(':yearId')
  async getYearById(@Param('yearId') yearId: string): Promise<MakeYear> {
    return this.makeYearService.getYearById(yearId);
  }

  @Get()
  async getYears(): Promise<MakeYear[]> {
    return this.makeYearService.getYears(3, 1);
  }

  @Post()
  async createYear(
    @Body() createYearDto: CreateMakeYearDto,
  ): Promise<MakeYear> {
    return this.makeYearService.createYear(createYearDto.year);
  }

  @Put(':yearId')
  async updateYear(
    @Param('yearId') yearId: string,
    @Body() updateYearDto: UpdateMakeYearDto,
  ): Promise<MakeYear> {
    return this.makeYearService.updateYear(yearId, updateYearDto);
  }

  @Delete(':yearId')
  async deleteYear(@Param('yearId') yearId: string): Promise<MakeYear> {
    return this.makeYearService.deleteYear(yearId);
  }

  @Delete()
  async deleteManyYear(@Param('yearIds') yearIds: [string]): Promise<boolean> {
    return this.makeYearService.deleteManyYear(yearIds);
  }
}
