import { Resolver, Query, Args, ID, Mutation } from '@nestjs/graphql';
import { Brand } from './schemas/brand.schema';
import { BrandsService } from './services/brands.service';
import { CreateBrandDto } from './inputs/create.brand.dto';
import { UpdateBrandDto } from './inputs/update.brand.dto';
import { UpdateBrandStatusDto } from './inputs/update.brand.status.dto';
import { BrandIdDto } from './inputs/brand.id.input.dto';

@Resolver()
export class BrandsResolver {
  constructor(private readonly brandService: BrandsService) { }

  @Query(() => [Brand], { name: 'listBrand', nullable: true })
  listAll(): Promise<Brand[]> {
    return this.brandService.getBrands(10, 1);
  }

  @Query(() => Brand, { name: 'getBrandDetail', nullable: true })
  getBrandDetail(
      @Args('brandIdDto') brandIdDto: BrandIdDto
    ): Promise<Brand> {
    return this.brandService.getBrandById(brandIdDto);
  }

  @Mutation(() => Brand, { name: 'addBrand' })
  addBrand(@Args('addBrandDto') addBrandDto: CreateBrandDto): Promise<Brand> {
    return this.brandService.createBrand(addBrandDto);
  }

  @Mutation(() => Brand, { name: 'updateBrand' })
  updateBrand(
      @Args('updateBrandDto') updateBrandDto: UpdateBrandDto 
    ): Promise<Brand> {
    return this.brandService.updateBrandService(updateBrandDto);
  }

  @Mutation(() => Brand, {name: 'updateBrandStatus'})
  updateBrandStatus(
    @Args('updateBrandStatusDto') updateBrandStatusDto: UpdateBrandStatusDto
  ): Promise<Brand> {
    return this.brandService.updateBrandStatus(updateBrandStatusDto)
  }

  @Mutation(() => Brand, { name: 'deleteBrand' })
  deleteBrand(
    @Args('brandIdDto') brandIdDto: BrandIdDto
    ): Promise<string> {
    return this.brandService.deleteBrand(brandIdDto);
  }

  @Mutation(() => Brand, { name: 'deleteManyBrands' })
  deleteManyBrand(
    @Args('brandIdDto') brandIdDto: BrandIdDto
    ): Promise<boolean> {
    return this.brandService.deleteManyBrand(brandIdDto);
  }
}
