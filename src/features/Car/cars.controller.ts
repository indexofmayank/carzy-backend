import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
} from '@nestjs/common';
import { CarService } from './services/car.service';
import { Car } from './schemas/car.schema';
import { CreateCarDto } from './dtos/car.create.dto';
import { UpdateCarDto } from './dtos/car.update.dto';

@Controller('cars')
export class CarController {
  constructor(public readonly carServices: CarService) {}

  @Get(':carId')
  async getCarById(@Param('carId') carId: string): Promise<Car | any> {
    return this.carServices.getCarById(carId);
  }

  @Get()
  async getCars(): Promise<Car[]> {
    return this.carServices.getCars(3, 1);
  }

  @Post()
  async createCar(@Body() createCarDto: CreateCarDto): Promise<Car> {
    return this.carServices.createCar(
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

  @Patch(':carId')
  async updateCar(
    @Param('carId') carId: string,
    @Body() updateCarDot: UpdateCarDto,
  ): Promise<Car> {
    return this.carServices.updateCar(carId, updateCarDot);
  }

  @Delete(':carId')
  async deleteSingleCar(@Param('carId') carId: string): Promise<Car> {
    return this.carServices.deleteCar(carId);
  }

  @Delete()
  async deleteManyCars(@Param('carIds') carIds: [string]): Promise<boolean> {
    return this.carServices.deleteManyCars(carIds);
  }
}
