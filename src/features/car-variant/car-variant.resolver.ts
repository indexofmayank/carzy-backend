import { Resolver, Query, Args, ID, Mutation } from '@nestjs/graphql';
import { CarVariantService } from './services/car-varaint.service';
import { CarVariant } from './schemas/car-variant.schema';
import { CreateCarVariantDto } from './dtos/car-variant.create';
import { UpdateCarVariantDto } from './dtos/car-variant.update';

@Resolver()
export class CarVariantResolver {
  constructor(private readonly carVariantService: CarVariantService) {}

  @Query(() => [CarVariant], { name: 'listCarVariant' })
  async list(): Promise<CarVariant[]> {
    return this.carVariantService.getCarVaraints(3, 1);
  }

  @Query(() => CarVariant, { name: 'getCarVariantDetail' })
  async getCarVariantDetail(
    @Args({ name: 'carVariantId', type: () => ID }) id: string,
  ): Promise<CarVariant | any> {
    return this.carVariantService.getCarVaraintById(id);
  }

  @Mutation(() => CarVariant, { name: 'addCarVariant' })
  async addCarVariant(
    @Args('addCarVariantDto') addCarVariantDto: CreateCarVariantDto,
  ): Promise<CarVariant> {
    return this.carVariantService.createCarVariant(
      addCarVariantDto.name,
      addCarVariantDto.model_id,
    );
  }

  @Mutation(() => CarVariant, { name: 'updateCarVariant' })
  async updateCarVariant(
    @Args('updateCarVariantDto') updateCarVariantDto: UpdateCarVariantDto,
    @Args({ name: 'carVariantId', type: () => ID }) id: string,
  ): Promise<CarVariant> {
    return this.carVariantService.updateCarVariant(id, updateCarVariantDto);
  }

  @Mutation(() => CarVariant, { name: 'deleteCarVariant' })
  deleteCarVariant(
    @Args({ name: 'carVariantId', type: () => ID }) id: string,
  ): Promise<CarVariant | any> {
    return this.carVariantService.deleteCarVariant(id);
  }

  @Mutation(() => CarVariant, { name: 'deleteManyCarVariant' })
  deleteManyCarVariant(
    @Args({ name: 'carVariantIds', type: () => [ID] }) ids: [string],
  ): Promise<boolean> {
    return this.carVariantService.deleteManyCarVariant(ids);
  }
}
