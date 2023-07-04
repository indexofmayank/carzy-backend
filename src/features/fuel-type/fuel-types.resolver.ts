import { Resolver, Query, Args, ID, Mutation } from '@nestjs/graphql';
import { FuelTypeService } from './services/fuel-type.services';
import { FuelType } from './schemas/fuel-type.schema';
import { CreateFuelTypeDto } from './inputs/create.fuel-type.dto';
import { UpdateFuelTypeDto } from './inputs/update.fuel-type.dto';
import { FuelTypeIdDto } from './inputs/fuel-type.id.dto';
import { UpdateFuelTypeStatusDto } from './inputs/update.fuel-type.status.dto';


@Resolver()
export class FuelTypeResolver {
  constructor(private readonly fuelTypeService: FuelTypeService) {}

  @Query(() => [FuelType], { name: 'listFuelType' })
  list(): Promise<FuelType[]> {
    return this.fuelTypeService.getFuelTypes(10, 1);
  }

  @Query(() => FuelType, { name: 'getFuelTypeDetail', nullable: true })
  getFuelTypeDetail(
    @Args('fuelTypeIdDto') fuelTypeIdDto: FuelTypeIdDto
    ): Promise<FuelType> {
    return this.fuelTypeService.getFuelTypeById(fuelTypeIdDto);
  }

  @Mutation(() => FuelType, { name: 'addFuelType' })
  addFuelType(
    @Args('addFuelTypeDto') createFuelTypeDto: CreateFuelTypeDto
    ): Promise<FuelType> {
    return this.fuelTypeService.createFuelType(createFuelTypeDto);
  }

  @Mutation(() => FuelType, { name: 'deleteFuelType' })
  deleteFuelType(
   @Args('fuelTypeIdDto') fuelTypeIdDto: FuelTypeIdDto
  ): Promise<FuelType> {
    return this.fuelTypeService.deleteFuelType(fuelTypeIdDto);
  }

  @Mutation(() => FuelType, { name: 'deleteManyFuelTypes' })
  deleteManyFuelType(
    @Args('fuelTypeIdDto') fuelTypeIdDto: FuelTypeIdDto
    ): Promise<boolean> {
    return this.fuelTypeService.deleteManyFuelType(fuelTypeIdDto);
  }

  @Mutation(() => FuelType, { name: 'updateFuelType' })
  updateFuelType(
   @Args('updateFuelTypeDto') updateFuelTypeDto: UpdateFuelTypeDto
  ): Promise<FuelType> {
    return this.fuelTypeService.updateFuelType(updateFuelTypeDto);
  }

  @Mutation(() => FuelType, {name: 'updateFuelTypeStatus'})
  updateFuelTypeStatus(
    @Args('updateFuelTypeStatusDto') updateFuelTypeStatusDto: UpdateFuelTypeStatusDto
  ): Promise<FuelType> {
    return this.fuelTypeService.updateFuelTypeStatus(updateFuelTypeStatusDto)
  }

}
