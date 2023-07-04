import { Resolver, Query, Args, ID, Mutation } from '@nestjs/graphql';
import { GarageService } from './services/garage.service';
import { Garage } from './schemas/garage.schema';
import { GarageIdDto } from './inputs/garage.Id.dto';
import { CreateGarageDto } from './inputs/create.garage.dto';
import { UpdateGarageDto } from './inputs/update.garage.dto';
import { UpdateGarageStatusDto } from './inputs/update.garage.status.dto';

@Resolver()
export class GarageResolver {
  constructor(private readonly GarageService: GarageService) {}

  @Query(() => [Garage], { name: 'listGarage', nullable: true })
  list(): Promise<Garage[]> {
    return this.GarageService.getGarages(10, 1);
  }

  @Query(() => Garage, { name: 'getGarageDetail' })
  getGarageDetail(
    @Args('garageIdDto') garageIdDto: GarageIdDto
    ): Promise<Garage | any> {
    return this.GarageService.getGarageById(garageIdDto);
  }

  @Mutation(() => Garage, { name: 'addGarage', nullable: true })
  addGarage(
    @Args('addGarageDto') addGarageDto: CreateGarageDto
    ): Promise<Garage> {
    return this.GarageService.createGarage(addGarageDto);
  }

  @Mutation(() => Garage, { name: 'updateGarage' })
  updateGarage(
    @Args('updateGarageDto') updateGarageDto: UpdateGarageDto
    ): Promise<Garage> {
    return this.GarageService.updateGarage(updateGarageDto);
  }

  @Mutation(() => Garage, {name: 'updateGarageStatus'})
  updateGarageStatus(
    @Args('updateGarageStatusDto') updateGarageStatusDto: UpdateGarageStatusDto
  ): Promise<Garage> {
    return this.GarageService.updateGarageStatus(updateGarageStatusDto)
  }

  @Mutation(() => Garage, { name: 'deleteGarage' })
  deleteGarage(
    @Args('garageIdDto') garageIdDto: GarageIdDto
    ): Promise<Garage> {
    return this.GarageService.deleteGarage(garageIdDto);
  }

  @Mutation(() => Garage, { name: 'deleteManyGarage' })
  deleteManyGarage(
    @Args('garageIdDto') garageIdDto: GarageIdDto
    ): Promise<boolean> {
    return this.GarageService.deleteManyGarage(garageIdDto);
  }
}
