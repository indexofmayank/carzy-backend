import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarService } from './services/car.service';
import { Car } from './schemas/car.schema';
import { CreateCarDto } from './dtos/car.create.dto';
import { UpdateCarDto } from './dtos/car.update.dto';

@Resolver()
export class CarsResolver {
  constructor(private readonly carService: CarService) {}

  @Query(() => [Car], { name: 'listCar', nullable: true })
  list(): Promise<Car[]> {
    return this.carService.getCars(3, 1);
  }

  @Query(() => [Car], { name: 'getCarDetail', nullable: true })
  getCarDetail(
    @Args({ name: 'carId', type: () => ID }) carId: string,
  ): Promise<Car> {
    return this.carService.getCarById(carId);
  }

  @Mutation(() => [Car], { name: 'createCar', nullable: true })
  createCar(
    @Args('createCarDto') createCarDto: CreateCarDto,
  ): Promise<Car | any> {
    return this.carService.createCar(
      createCarDto.brand_id,
      createCarDto.variant_id,
      createCarDto.color_id,
      createCarDto.body_type_id,
      createCarDto.make_year_id,
      createCarDto.fuel_type_id,
      createCarDto.transmission,
      createCarDto.no_of_owners,
      createCarDto.price,
      createCarDto.kilometers,
      createCarDto.capacity,
      createCarDto.garage_id,
      createCarDto.car_number,
      createCarDto.chassis_no,
      createCarDto.engine_no,
      createCarDto.tax_valid_at,
      createCarDto.seller_id,
      createCarDto.insurance_type,
      createCarDto.idv,
      createCarDto.ncv,
      createCarDto.traffic_case,
      createCarDto.solved_by,
      createCarDto.amount,
      createCarDto.description,
      createCarDto.main_image_custom_name,
      createCarDto.main_image_name,
      createCarDto.car_images,
      createCarDto.created_by,
    );
  }

  @Mutation(() => [Car], { name: 'updateCar', nullable: true })
  updateCar(
    @Args('updateCarDto') updateCarDto: UpdateCarDto,
    @Args({ name: 'carId', type: () => ID }) id: string,
  ): Promise<Car> {
    return this.carService.updateCar(id, updateCarDto);
  }

  @Mutation(() => Car, { name: 'DeleteCar' })
  deleteCar(@Args({ name: 'carId', type: () => ID }) id: string): Promise<Car> {
    return this.carService.deleteCar(id);
  }

  @Mutation(() => Car, { name: 'DeleteManyCars' })
  deleteManyCars(
    @Args({ name: 'carIds', type: () => [ID] }) ids: [string],
  ): Promise<boolean> {
    return this.carService.deleteManyCars(ids);
  }
}
