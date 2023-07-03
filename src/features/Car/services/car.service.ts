import { Injectable } from '@nestjs/common';
import { Car } from '../schemas/car.schema';
import { UpdateCarDto } from '../dtos/car.update.dto';
import { CarRepository } from '../repositories/car.repository';

@Injectable()
export class CarService {
  constructor(private readonly carRepository: CarRepository) {}

  async getCarById(carTypeObjectId): Promise<Car | any> {
    return this.carRepository.findById({ _id: carTypeObjectId });
  }

  async getCars(resPerPage: number, pageNo: number): Promise<Car[]> {
    return this.carRepository.find({}, resPerPage, pageNo);
  }

  async createCar(
    brand_id: string,
    variant_id: string,
    color_id: string,
    body_type_id: string,
    make_year_id: string,
    fuel_type_id: string,
    transmission: string,
    no_of_owners: number,
    price: number,
    kilometers: number,
    capacity: number,
    garage_id: string,
    car_number: number,
    chassis_no: number,
    engine_no: number,
    tax_valid_at: string,
    seller_id: string,
    insurance_type: string,
    idv: string,
    ncv: string,
    traffic_case: string,
    solved_by: string,
    amount: number,
    description: string,
    main_image_custom_name: string,
    main_image_name: string,
    car_images: [string],
    created_by: string,
  ): Promise<Car> {
    return this.carRepository.create({
      brand_id,
      variant_id,
      color_id,
      body_type_id,
      make_year_id,
      fuel_type_id,
      transmission,
      no_of_owners,
      price,
      kilometers,
      capacity,
      garage_id,
      car_number,
      chassis_no,
      engine_no,
      tax_valid_at,
      seller_id,
      insurance_type,
      idv,
      ncv,
      traffic_case,
      solved_by,
      amount,
      description,
      main_image_custom_name,
      main_image_name,
      car_images,
      created_by,
    });
  }

  async updateCar(
    carTypeObjectId: string,
    updateCarDot: UpdateCarDto,
  ): Promise<Car> {
    return this.carRepository.findOneAndUpdate(
      { _id: carTypeObjectId },
      updateCarDot,
    );
  }

  async deleteCar(carTypeObjectId: string): Promise<Car> {
    return this.carRepository.findOneAndDelete({ _id: carTypeObjectId });
  }

  async deleteManyCars(carTypeObjectIds: [string]): Promise<boolean> {
    return this.carRepository.findManyAndDelete({ _id: [carTypeObjectIds] });
  }
}
