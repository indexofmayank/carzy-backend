import { Injectable } from '@nestjs/common';
import { Color } from '../schemas/color.schema';
import { ColorsRepository } from '../repositories/color.repository';
import * as mongoose from 'mongoose';
import { UpdateColorDto } from '../inputs/update.color.dto';
import {CreateColorDto} from '../inputs/create.color.dto';
import { UpdateColorStatusDto } from '../inputs/update.color.status.dto';
import { ColorIdDto } from '../inputs/color.id.dto';

@Injectable()
export class ColorsService {
  constructor(private readonly colorRepository: ColorsRepository) {}

  async getColorById(colorTypeObjectId): Promise<Color | any> {
    return this.colorRepository.findById(colorTypeObjectId);
  }

  async getColors(resPerPage: number, pageNo: number): Promise<Color[]> {
    return this.colorRepository.find({}, resPerPage, pageNo);
  }

  async createColor(addColorDto: CreateColorDto): Promise<Color> {
    return this.colorRepository.create(addColorDto);
  }

  async updateColor(
   updateColorDto: UpdateColorDto
  ): Promise<Color> {
    const colorId = updateColorDto.colorId;
    return this.colorRepository.findOneAndUpdate(
      { _id: updateColorDto.colorId },
      {name: updateColorDto.name,
      status: updateColorDto.status
       },
    );
  }

  async updateColorStatus(
    updateColorStatusDto: UpdateColorStatusDto
  ): Promise<Color> {
    return this.colorRepository.findOneAndUpdate(
      {_id: updateColorStatusDto.colorId},
      {status: updateColorStatusDto.status},
    )
  }

  async deleteColor(colorIdDto: ColorIdDto): Promise<any> {
    return this.colorRepository.findOneAndDelete({ _id: colorIdDto.colorId });
  }

  async deleteManyColor(colorIdDto: ColorIdDto): Promise<boolean> {
    return this.colorRepository.findManyAndDelete({ _id: colorIdDto.colorId });
  }
}
