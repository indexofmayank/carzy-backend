import { Resolver, Query, Args, ID, Mutation } from '@nestjs/graphql';
import { FuelTypeService } from './services/fuel-type.services';
import { FuelType } from './schemas/fuel-type.schema';
import { UpdateFuelTypeDto } from './dtos/fuel-type.update.dto';
import { CreateFuelTypeDto } from './dtos/fuel-type.created.dto';

@Resolver()
export class FuelTypeResolver {
  constructor(private readonly fuelTypeService: FuelTypeService) {}

  @Query(() => [FuelType], { name: 'listFuelType' })
  list(): Promise<FuelType[]> {
    return this.fuelTypeService.getFuelTypes(3, 1);
  }

  @Query(() => FuelType, { name: 'getFuelTypeDetail', nullable: true })
  getFuelTypeDetail(
    @Args({ name: 'fuelTypeId', type: () => ID }) id: string,
  ): Promise<FuelType> {
    return this.fuelTypeService.getFuelTypeById(id);
  }

  @Mutation(() => FuelType, { name: 'addFuelType' })
  addFuelType(
    @Args('addFuelTypeDto') addFuelTypeDto: CreateFuelTypeDto,
  ): Promise<FuelType> {
    return this.fuelTypeService.createFuelType(addFuelTypeDto.name);
  }

  @Mutation(() => FuelType, { name: 'deleteFuelType' })
  deleteFuelType(
    @Args({ name: 'fuelTypeId', type: () => ID }) id: string,
  ): Promise<FuelType> {
    return this.fuelTypeService.deleteFuelType(id);
  }

  @Mutation(() => FuelType, { name: 'deleteManyFuelTypes' })
  deleteManyFuelType(
    @Args({ name: 'fuelTypeIds', type: () => [ID] }) ids: [string],
  ): Promise<boolean> {
    return this.fuelTypeService.deleteManyFuelType(ids);
  }

  @Mutation(() => FuelType, { name: 'updateFuelType' })
  updateFuelType(
    @Args('UpdateFuelTypeDto') updateFuelTypeDto: UpdateFuelTypeDto,
    @Args({ name: 'fuelTypeId', type: () => ID }) id: string,
  ): Promise<FuelType> {
    return this.fuelTypeService.updateFuelType(id, updateFuelTypeDto);
  }
}
