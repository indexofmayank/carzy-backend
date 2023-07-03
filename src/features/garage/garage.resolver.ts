import { Resolver, Query, Args, ID, Mutation } from '@nestjs/graphql';
import { GarageService } from './services/garage.service';
import { Garage } from './schemas/garage.schema';
import { CreateGarageDto } from './dtos/garage.create.dto';
import { UpdateGarageDto } from './dtos/garage.update.dto';

@Resolver()
export class GarageResolver {
  constructor(private readonly GarageService: GarageService) {}

  @Query(() => [Garage], { name: 'listGarage', nullable: true })
  list(): Promise<Garage[]> {
    return this.GarageService.getGarages(3, 1);
  }

  @Query(() => Garage, { name: 'getGarageDetail' })
  getGarageDetail(
    @Args({ name: 'garageById', type: () => ID }) id: string,
  ): Promise<Garage | any> {
    return this.GarageService.getGarageById(id);
  }

  @Mutation(() => Garage, { name: 'addGarage', nullable: true })
  addGarage(
    @Args('addGarageDto') addGarageDto: CreateGarageDto,
  ): Promise<Garage> {
    return this.GarageService.createGarage(
      addGarageDto.name,
      addGarageDto.model_id,
    );
  }

  @Mutation(() => Garage, { name: 'updateGarage' })
  updateGarage(
    @Args('updateGarageDto') updateGarageDto: UpdateGarageDto,
    @Args({ name: 'garageId', type: () => ID }) id: string,
  ): Promise<Garage> {
    return this.GarageService.updateGarage(id, updateGarageDto);
  }

  @Mutation(() => Garage, { name: 'deleteGarage' })
  deleteGarage(
    @Args({ name: 'garageId', type: () => ID }) id: string,
  ): Promise<Garage> {
    return this.GarageService.deleteGarage(id);
  }

  @Mutation(() => Garage, { name: 'deleteManyGarage' })
  deleteManyGarage(
    @Args({ name: 'garageIds', type: () => [ID] }) ids: [string],
  ): Promise<boolean> {
    return this.GarageService.deleteManyGarage(ids);
  }
}
