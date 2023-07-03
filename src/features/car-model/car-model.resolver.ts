import { Resolver, Query, Args, ID, Mutation } from '@nestjs/graphql';
import { CarModelService } from './services/car-models.service';
import { CarModel } from './schemas/car-model.schema';
import { CreateCarModelDto } from './dtos/car-model.create.dto';
import { UpdateCarModelDto } from './dtos/car-model.update.dto';

@Resolver()
export class CarModelResolver {
  constructor(private readonly carModelService: CarModelService) {}

  @Query(() => [CarModel], { name: 'listCarModel', nullable: true })
  async list(): Promise<CarModel[]> {
    return this.carModelService.getCarModels(3, 1);
  }

  @Query(() => CarModel, { name: 'getCarModelDetail', nullable: true })
  async getCarModelDetail(
    @Args({ name: 'carModelId', type: () => ID }) id: string,
  ): Promise<CarModel> {
    return this.carModelService.getCarModelById(id);
  }

  @Mutation(() => CarModel, { name: 'addCarModel' })
  async addCarModel(
    @Args('addCarModelDto') addCarModelDto: CreateCarModelDto,
  ): Promise<CarModel> {
    return this.carModelService.createCarModel(
      addCarModelDto.name,
      addCarModelDto.created_by,
      addCarModelDto.body_type_id,
      addCarModelDto.brand_id,
    );
  }

  @Mutation(() => CarModel, { name: 'updateCarModel' })
  async updateCarModel(
    @Args('updateCarModelDto') updateCarModelDto: UpdateCarModelDto,
    @Args({ name: 'carModelId', type: () => ID }) id: string,
  ): Promise<CarModel> {
    return this.carModelService.updateCarModel(id, updateCarModelDto);
  }

  @Mutation(() => CarModel, { name: 'deleteCarModel' })
  deleteCarModel(
    @Args({ name: 'carModelId', type: () => ID }) id: string,
  ): Promise<CarModel | any> {
    return this.carModelService.deleteSingleCarModel(id);
  }

  @Mutation(() => CarModel, { name: 'deleteManyCarModel' })
  deleteManyCarModel(
    @Args({ name: 'carModelIds', type: () => [ID] }) ids: [string],
  ): Promise<boolean> {
    return this.carModelService.deleteManyCarModel(ids);
  }
}
