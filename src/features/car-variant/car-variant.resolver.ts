import { Resolver, Query, Args, ID, Mutation } from '@nestjs/graphql';
import { CarVariantService } from './services/car-varaint.service';
import { CarVariant } from './schemas/car-variant.schema';
import { CreateCarVariantDto } from './inputs/create.car-variant.dto';
import { UpdateCarVariantDto } from './inputs/update.car-variant.dto';
import { CarVariantIdDto } from './inputs/car-variant.id.dto';
import { UpdateCarModelStatusDto } from 'src/graphql';
import { UpdateCarVariantStatusDto } from './inputs/update.car-variant.status.dto';

@Resolver()
export class CarVariantResolver {
  constructor(private readonly carVariantService: CarVariantService) {}

  @Query(() => [CarVariant], { name: 'listCarVariant' })
  async list(): Promise<CarVariant[]> {
    return this.carVariantService.getCarVaraints(10, 1);
  }

  @Query(() => CarVariant, { name: 'getCarVariantDetail' })
  async getCarVariantDetail(
    @Args('carVariantIdDto') carVariantIdDto: CarVariantIdDto
    ): Promise<CarVariant | any> {
    return this.carVariantService.getCarVaraintById(carVariantIdDto);
  }

  @Mutation(() => CarVariant, { name: 'addCarVariant' })
  async addCarVariant(
    @Args('addCarVariantDto') addCarVariantDto: CreateCarVariantDto,
  ): Promise<CarVariant> {
    return this.carVariantService.createCarVariant(
      addCarVariantDto
    );
  }

  @Mutation(() => CarVariant, { name: 'updateCarVariant' })
  async updateCarVariant(
    @Args('updateCarVariantDto') updateCarVariantDto: UpdateCarVariantDto
  ): Promise<CarVariant> {
    return this.carVariantService.updateCarVariant(updateCarVariantDto);
  }

  @Mutation(() => CarVariant, {name: 'updateCarVariantStatus'})
  async updateCarVariantStatus(
    @Args('updateCarVariantStatusDto') updateCarVariantStatusDto: UpdateCarVariantStatusDto
  ): Promise<CarVariant> {
    return this.carVariantService.updatCarVariantStatus(updateCarVariantStatusDto)
  }

  @Mutation(() => CarVariant, { name: 'deleteCarVariant' })
  deleteCarVariant(
    @Args('carVariantIdDto') carVariantIdSto: CarVariantIdDto
    ): Promise<CarVariant | any> {
    return this.carVariantService.deleteCarVariant(carVariantIdSto);
  }

  @Mutation(() => CarVariant, { name: 'deleteManyCarVariant' })
  deleteManyCarVariant(
    @Args('carVariantIdDto') carVariantIdDto: CarVariantIdDto
    ): Promise<boolean> {
    return this.carVariantService.deleteManyCarVariant(carVariantIdDto);
  }
}
