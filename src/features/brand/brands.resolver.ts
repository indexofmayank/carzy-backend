import { Resolver, Query, Args, ID, Mutation } from '@nestjs/graphql';
import { Brand } from './schemas/brand.schema';
import { BrandsService } from './services/brands.service';
import { CreateBrandDto } from './inputs/create.brand.dto';
import { UpdateBrandDto } from './inputs/update.brand.dto';

@Resolver()
export class BrandsResolver {
  constructor(private readonly brandService: BrandsService) { }

  @Query(() => [Brand], { name: 'listBrand', nullable: true })
  listAll(): Promise<Brand[]> {
    return this.brandService.getBrands(3, 1);
  }

  @Query(() => Brand, { name: 'getBrandDetail', nullable: true })
  getBrandDetail(
    @Args({ name: 'brandId', type: () => ID }) id: string,
  ): Promise<Brand> {
    return this.brandService.getBrandById(id);
  }

  @Mutation(() => Brand, { name: 'addBrand' })
  addBrand(@Args('addBrandDto') addBrandDto: CreateBrandDto): Promise<Brand> {
    return this.brandService.createBrand(addBrandDto);
  }

  @Mutation(() => Brand, { name: 'updateBrand' })
  updateBrand(
    @Args('updateBrandDto') updateBrandDto: UpdateBrandDto,
    @Args({ name: 'brandId', type: () => ID }) id: string,
  ): Promise<Brand> {
    return this.brandService.updateBrandService(id, updateBrandDto);
  }

  @Mutation(() => Brand, { name: 'deleteBrand' })
  deleteBrand(
    @Args({ name: 'brandId', type: () => ID }) id: string,
  ): Promise<string> {
    return this.brandService.deleteBrand(id);
  }

  @Mutation(() => Brand, { name: 'deleteManyBrands' })
  deleteManyBrand(
    @Args({ name: 'brandIds', type: () => [ID] }) ids: [string],
  ): Promise<boolean> {
    return this.brandService.deleteManyBrand(ids);
  }
}
