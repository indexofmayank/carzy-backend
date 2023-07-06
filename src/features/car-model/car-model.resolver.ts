import { Resolver, Query, Args, ID, Mutation } from "@nestjs/graphql";
import { CarModelService } from "./services/car-models.service";
import { CarModel } from "./schemas/car-model.schema";
import { UpdateCarModelDto } from "./inputs/update.car-model.dto";
import { CreateCarModelDto } from "./inputs/create.car-model.dto";
import { CarModelIdDto } from "./inputs/car-model.id.dto";
import { UpdateCarModelStatusDto } from "./inputs/update.car-model.status.dto";

@Resolver()
export class CarModelResolver {
  constructor(private readonly carModelService: CarModelService) {}

  @Query(() => [CarModel], { name: "listCarModel", nullable: true })
  async list(): Promise<CarModel[]> {
    return this.carModelService.getCarModels(3, 1);
  }

  @Query(() => CarModel, { name: "getCarModelDetail", nullable: true })
  async getCarModelDetail(
    @Args({ name: "carModelId", type: () => ID }) id: string,
  ): Promise<CarModel> {
    return this.carModelService.getCarModelById(id);
  }

  @Mutation(() => CarModel, { name: "addCarModel" })
  async addCarModel(
    @Args("addCarModelDto") addCarModelDto: CreateCarModelDto,
  ): Promise<CarModel> {
    return this.carModelService.createCarModel(
      addCarModelDto
    );
  }

  @Mutation(() => CarModel, { name: "updateCarModel" })
  async updateCarModel(
    @Args("updateCarModelDto") updateCarModelDto: UpdateCarModelDto
    ): Promise<CarModel> {
    return this.carModelService.updateCarModel(updateCarModelDto);
  }

  @Mutation(() => CarModel, {name: "updateCarModelStatus"})
  async updateCarModelStatus(
    @Args("updateCarModelStatusDto") updateCarModelStatusDto: UpdateCarModelStatusDto
  ): Promise<CarModel> {
    return this.carModelService.updateCarModelStatus(updateCarModelStatusDto)
  }

  @Mutation(() => CarModel, { name: "deleteCarModel" })
  deleteCarModel(
      @Args("carModelIdDto") carModelIdDto: CarModelIdDto
    ): Promise<CarModel | any> {
    return this.carModelService.deleteSingleCarModel(carModelIdDto);
  }

  @Mutation(() => CarModel, { name: "deleteManyCarModel" })
  deleteManyCarModel(
    @Args("carModelIdDto") carModelIdDto: CarModelIdDto
    ): Promise<boolean> {
    return this.carModelService.deleteManyCarModel(carModelIdDto);
  }
}
