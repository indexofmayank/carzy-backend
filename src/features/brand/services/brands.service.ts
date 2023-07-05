import { Injectable } from '@nestjs/common';
import { Brand } from '../schemas/brand.schema';
import { BrandsRepository } from '../repositories/brand.repository';
import { UpdateBrandDto } from '../inputs/update.brand.dto';
import { CreateBrandDto } from '../inputs/create.brand.dto';
import { UpdateBrandStatusDto } from '../inputs/update.brand.status.dto';
import { BrandIdDto } from '../inputs/brand.id.input.dto';

@Injectable()
export class BrandsService {
  constructor(private readonly brandsRepository: BrandsRepository) { }

  async getBrandById(brandIdDto: BrandIdDto): Promise<Brand | any> {
    return this.brandsRepository.findById({_id: brandIdDto.brandId});
  }

  async getBrands(resPerPage: number, pageNo: number): Promise<Brand[]> {
    return this.brandsRepository.find({}, resPerPage, pageNo);
  }

  async createBrand(createBrandDto: CreateBrandDto): Promise<Brand> {
    return this.brandsRepository.create(createBrandDto);
  }

  async updateBrandService(
   updateBrandDto: UpdateBrandDto
  ): Promise<Brand> {
    return this.brandsRepository.findOneAndUpdate(
      { _id: updateBrandDto.brandId },
      {name: updateBrandDto.name,
        status: updateBrandDto.status
      },
    );
  }

  async updateBrandStatus(
    updateBrandStatusDto: UpdateBrandStatusDto
  ) : Promise<Brand> {
    return this.brandsRepository.findOneAndUpdate(
      {_id: updateBrandStatusDto.brandId},
      {status: updateBrandStatusDto.status},
    )
  }

  async deleteBrand(brandIdDto: BrandIdDto): Promise<any> {
    return this.brandsRepository.findOneAndDelete({ _id: brandIdDto.brandId });
  }

  async deleteManyBrand(brandIdDto: BrandIdDto): Promise<boolean> {
    return this.brandsRepository.findManyAndDelete({ _id: brandIdDto.brandId });
  }
}
