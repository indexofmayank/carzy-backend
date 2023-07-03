import { Injectable } from '@nestjs/common';
import { Brand } from '../schemas/brand.schema';
import { BrandsRepository } from '../repositories/brand.repository';
import { UpdateBrandDto } from '../inputs/update.brand.dto';
import { CreateBrandDto } from '../inputs/create.brand.dto';

@Injectable()
export class BrandsService {
  constructor(private readonly brandsRepository: BrandsRepository) { }

  async getBrandById(brandObjectId): Promise<Brand | any> {
    return this.brandsRepository.findById(brandObjectId);
  }

  async getBrands(resPerPage: number, pageNo: number): Promise<Brand[]> {
    return this.brandsRepository.find({}, resPerPage, pageNo);
  }

  async createBrand(createBrandDto: CreateBrandDto): Promise<Brand> {
    return this.brandsRepository.create(createBrandDto);
  }

  async updateBrandService(
    brandId: string,
    updateBrandDto: UpdateBrandDto,
  ): Promise<Brand> {
    return this.brandsRepository.findOneAndUpdate(
      { _id: brandId },
      updateBrandDto,
    );
  }

  async deleteBrand(brandId: string): Promise<any> {
    return this.brandsRepository.findOneAndDelete({ _id: brandId });
  }

  async deleteManyBrand(brandIds: [string]): Promise<boolean> {
    return this.brandsRepository.findManyAndDelete({ brandId: { brandIds } });
  }
}
