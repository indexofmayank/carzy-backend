
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    DELETED = "DELETED"
}

export interface ColorIdDto {
    colorId: string[];
}

export interface CreateBrandDto {
    name?: Nullable<string>;
    status?: Nullable<Status>;
    deleted_at?: Nullable<DateTime>;
}

export interface UpdateBrandDto {
    name?: Nullable<string>;
    status?: Nullable<Status>;
    deleted_at?: Nullable<DateTime>;
}

export interface CreateBodyTypeDto {
    name: string;
    status?: Nullable<Status>;
    deleted_at?: Nullable<DateTime>;
}

export interface DeleteBodyTypeDto {
    bodyTypeId: string[];
}

export interface UpdateBodyTypeDto {
    name: string;
    status?: Nullable<Status>;
    deleted_at?: Nullable<DateTime>;
}

export interface UpdateBodyTypeStatusDto {
    status: Status;
    bodyTypeId: string;
}

export interface CreateCarModelDto {
    name: string;
    status: string;
    created_by: string;
    body_type_id: string;
    brand_id: string;
}

export interface UpdateCarModelDto {
    name: string;
    status: string;
    created_by: string;
    body_type_id: string;
    brand_id: string;
}

export interface CreateColorDto {
    name: string;
    status?: Nullable<Status>;
}

export interface UpdateColorDto {
    name: string;
    status?: Nullable<Status>;
    colorId: string[];
}

export interface UpdateColorStatusDto {
    status: Status;
    colorId: string[];
}

export interface CreateFuelTypeDto {
    name: string;
    status: string;
}

export interface UpdateFuelTypeDto {
    name: string;
    status: string;
}

export interface CreateMakeYearDto {
    year: number;
    status: string;
}

export interface UpdateMakeYearDto {
    year: number;
    status: string;
}

export interface CreateCarVariantDto {
    name: string;
    status: string;
    model_id: string;
}

export interface UpdateCarVariantDto {
    name: string;
    status: string;
    model_id: string;
}

export interface CreateGarageDto {
    name: string;
    model_id: string;
    status: string;
}

export interface UpdateGarageDto {
    name: string;
    model_id: string;
    status: string;
}

export interface CreateSellerDetailDto {
    name: string;
    address: string;
    zip_code: string;
    phone: number;
    alternative_no: number;
    email: string;
    alternate_email: string;
    dob: string;
}

export interface UpdateSellerDetailDto {
    name: string;
    address: string;
    zip_code: string;
    phone: number;
    alternative_no: number;
    email: string;
    alternative_email: string;
    dob: string;
}

export interface DealerCreateDto {
    name: string;
    address: string;
    status: string;
    email: string;
    phone: string;
}

export interface DealerUpdateDto {
    name: string;
    address: string;
    status: string;
    email: string;
    phone: string;
}

export interface CreateEmployeeInput {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    password: string;
    confirm_password: string;
}

export interface UpdateEmployeeInput {
    first_name: string;
    last_name: string;
    phone: string;
    id: string;
}

export interface BuyerInputDto {
    name: string;
    contact_no: number;
    address: AddressInputDto;
    referral: string;
    email: string;
    status: string;
    dealer_id: string;
    dob: string;
    doa: string;
    spouse_details: SpouseDetailInputDto;
}

export interface AddressInputDto {
    address1: string;
    address2: string;
    city_id: string;
    state_id: string;
    pin: number;
}

export interface SpouseDetailInputDto {
    name: string;
    contact: number;
    dob: string;
    special_instruction: string;
    picture: string;
}

export interface CallTypeCreateDto {
    name: string;
    status: string;
    dealer_id: string;
}

export interface BuyerHasPurchaseDetailCreate {
    name: string;
    contact_no: number;
    requirement: string;
    car_number: string;
    call_type_id: string;
    lead_source_id: string;
    lead_type_id: string;
    referral: string;
    status: string;
}

export interface BuyerHasPurchaseDetailUpdate {
    name: string;
    contact_no: number;
    requirement: string;
    car_number: string;
    call_type_id: string;
    lead_source_id: string;
    lead_type_id: string;
    referral: string;
    status: string;
}

export interface TeleCallingEntryCreate {
    buyer_id: string;
    visited_next_date: string;
    next_visit_date: string;
    finance_required: boolean;
    remarks: string;
    next_call_date: string;
    created_by: string;
    specail_instruction: string;
}

export interface TeleCallingEntryUpdate {
    buyer_id: string;
    visited_next_date: DateTime;
    next_visit_date: DateTime;
    finance_required: boolean;
    remarks: string;
    next_call_date: DateTime;
    created_by: string;
    specail_instruction: string;
}

export interface LeadSoucreUpdateDto {
    name: string;
    status: string;
    dealer_id: string;
}

export interface LeadTypeCreateDto {
    name: string;
    status: string;
    dealer_id: string;
}

export interface LeadTypeUpdateDto {
    name: string;
    status: string;
    dealer_id: string;
}

export interface Brand {
    name?: Nullable<string>;
    status?: Nullable<Status>;
    deleted_at?: Nullable<DateTime>;
    created_at?: Nullable<DateTime>;
    updated_at?: Nullable<DateTime>;
}

export interface BodyType {
    name?: Nullable<string>;
    status?: Nullable<Status>;
    deleted_at?: Nullable<DateTime>;
    updated_at?: Nullable<DateTime>;
    created_at?: Nullable<DateTime>;
}

export interface CarModel {
    name: string;
    body_type_id: string;
    brand_id: string;
    status: string;
    created_by: string;
    deleted_at: DateTime;
}

export interface Color {
    name?: Nullable<string>;
    status?: Nullable<Status>;
    deleted_at?: Nullable<DateTime>;
}

export interface FuelType {
    name: string;
    status: string;
    deleted_at: DateTime;
}

export interface MakeYear {
    year: number;
    status: string;
    deleted_at: DateTime;
}

export interface CarVariant {
    name: string;
    status: string;
    model_id: string;
    deleted_at: DateTime;
}

export interface Garage {
    name: string;
    model_id: string;
    status: string;
    deleted_at: DateTime;
}

export interface SellerDetail {
    name: string;
    address: string;
    zip_code: string;
    phone: number;
    alternative_no: number;
    email: string;
    alternate_email: string;
    dob: string;
    deleted_at: DateTime;
}

export interface Dealer {
    name: string;
    address: string;
    status: string;
    email: string;
    phone: string;
    deleted_at: DateTime;
}

export interface DealerHasEmployee {
    _id: string;
    first_name: string;
    last_name: string;
    status: string;
    phone: number;
    email: string;
    dealer_id: Dealer;
    password: string;
    deleted_at: DateTime;
}

export interface AddressOutputDto {
    address1: string;
    address2: string;
    city_id: string;
    state_id: string;
    pin: number;
}

export interface SpouseDetailOutputDto {
    name: string;
    contact: number;
    dob: string;
    special_instruction: string;
    picture: string;
}

export interface BuyerOutputDto {
    name: string;
    contact_no: number;
    address: AddressOutputDto;
    referral: string;
    email: string;
    status: string;
    dealer_id: string;
    dob: string;
    doa: string;
    spouse_details: SpouseDetailOutputDto;
}

export interface CallType {
    name: string;
    status: string;
    dealer_id: string;
    deleted_at: DateTime;
}

export interface BuyerHasPurchaseDetail {
    name: string;
    contact_no: number;
    requirement: string;
    car_number: string;
    call_type_id: string;
    lead_source_id: string;
    lead_type_id: string;
    referral: string;
    status: string;
}

export interface TeleCallingEntry {
    buyer_id: string;
    visited_next_date: string;
    next_visit_date: string;
    finance_required: boolean;
    remarks: string;
    next_call_date: string;
    created_by: string;
    specail_instruction: string;
    deleted_at: DateTime;
}

export interface LeadSource {
    name: string;
    status: string;
    dealer_id: string;
}

export interface LeadTypes {
    name: string;
    status: string;
    dealer_id: string;
    deleted_id: DateTime;
}

export interface IQuery {
    index(): string | Promise<string>;
    listBrand(): Nullable<Brand[]> | Promise<Nullable<Brand[]>>;
    getBrandDetail(brandId: string): Nullable<Brand> | Promise<Nullable<Brand>>;
    listBodyType(): Nullable<BodyType[]> | Promise<Nullable<BodyType[]>>;
    getBodyTypeDetail(bodyTypeId: string): Nullable<BodyType> | Promise<Nullable<BodyType>>;
    listCarModel(): Nullable<CarModel[]> | Promise<Nullable<CarModel[]>>;
    getCarModelDetail(carModelId: string): Nullable<CarModel> | Promise<Nullable<CarModel>>;
    listColors(): Nullable<Color[]> | Promise<Nullable<Color[]>>;
    getColorDetail(colorIdDto: ColorIdDto): Nullable<Color> | Promise<Nullable<Color>>;
    listFuelType(): FuelType[] | Promise<FuelType[]>;
    getFuelTypeDetail(fuelTypeId: string): Nullable<FuelType> | Promise<Nullable<FuelType>>;
    listYear(): Nullable<MakeYear[]> | Promise<Nullable<MakeYear[]>>;
    getYeadDetail(yearId: string): MakeYear | Promise<MakeYear>;
    listCarVariant(): CarVariant[] | Promise<CarVariant[]>;
    getCarVariantDetail(carVariantId: string): CarVariant | Promise<CarVariant>;
    listGarage(): Nullable<Garage[]> | Promise<Nullable<Garage[]>>;
    getGarageDetail(garageById: string): Garage | Promise<Garage>;
    listSellerDetail(): Nullable<SellerDetail[]> | Promise<Nullable<SellerDetail[]>>;
    getSellerDetail(sellerId: string): SellerDetail | Promise<SellerDetail>;
    listDealer(): Nullable<Dealer> | Promise<Nullable<Dealer>>;
    getDealerDetail(dealerId: string): Nullable<Dealer[]> | Promise<Nullable<Dealer[]>>;
    listDealerHasEmployee(): Nullable<DealerHasEmployee[]> | Promise<Nullable<DealerHasEmployee[]>>;
    getDealerHasEmployeeDetail(employeeId: string): Nullable<DealerHasEmployee> | Promise<Nullable<DealerHasEmployee>>;
    getBuyerDetail(buyerId: string): Nullable<BuyerOutputDto> | Promise<Nullable<BuyerOutputDto>>;
    listBuyer(): Nullable<BuyerOutputDto[]> | Promise<Nullable<BuyerOutputDto[]>>;
    listCallType(): Nullable<CallType[]> | Promise<Nullable<CallType[]>>;
    getCallTypeDetail(callTypeId: string): Nullable<CallType> | Promise<Nullable<CallType>>;
    listPurchaseDetails(): Nullable<BuyerHasPurchaseDetail[]> | Promise<Nullable<BuyerHasPurchaseDetail[]>>;
    getPurchaseDetail(purchaseDetailId: string): Nullable<BuyerHasPurchaseDetail> | Promise<Nullable<BuyerHasPurchaseDetail>>;
    listTeleCallingEntry(): Nullable<TeleCallingEntry[]> | Promise<Nullable<TeleCallingEntry[]>>;
    getTeleCallingEntryDetail(teleCallingId: string): Nullable<TeleCallingEntry> | Promise<Nullable<TeleCallingEntry>>;
    listLeadSource(): Nullable<LeadSource[]> | Promise<Nullable<LeadSource[]>>;
    getLeadSourceDetail(leadSourceObjectId: string): Nullable<LeadSource> | Promise<Nullable<LeadSource>>;
    listLeadType(): Nullable<LeadTypes[]> | Promise<Nullable<LeadTypes[]>>;
    getLeadTypeDetail(leadTypeId: string): Nullable<LeadTypes> | Promise<Nullable<LeadTypes>>;
}

export interface IMutation {
    addBrand(addBrandDto: CreateBrandDto): Brand | Promise<Brand>;
    updateBrand(updateBrandDto: UpdateBrandDto, brandId: string): Brand | Promise<Brand>;
    deleteBrand(brandId: string): Brand | Promise<Brand>;
    deleteManyBrands(brandIds: string[]): Brand | Promise<Brand>;
    addBodyType(addBodyTypeDto: CreateBodyTypeDto): BodyType | Promise<BodyType>;
    deleteBodyType(deleteBodyTypeDto: DeleteBodyTypeDto): BodyType | Promise<BodyType>;
    deleteManyBodyTypes(deleteManyBodyTypeDto: DeleteBodyTypeDto): BodyType | Promise<BodyType>;
    updateBodyType(updateBodyTypeDto: UpdateBodyTypeDto, bodyTypeId: string): BodyType | Promise<BodyType>;
    updateBodyTypeStatus(updateBodyTypeStatusDto: UpdateBodyTypeStatusDto): BodyType | Promise<BodyType>;
    addCarModel(addCarModelDto: CreateCarModelDto): CarModel | Promise<CarModel>;
    updateCarModel(updateCarModelDto: UpdateCarModelDto, carModelId: string): CarModel | Promise<CarModel>;
    deleteCarModel(carModelId: string): CarModel | Promise<CarModel>;
    deleteManyCarModel(carModelIds: string[]): CarModel | Promise<CarModel>;
    addColor(addColorDto: CreateColorDto): Nullable<Color> | Promise<Nullable<Color>>;
    deleteColor(colorIdDto: ColorIdDto): Nullable<Color> | Promise<Nullable<Color>>;
    deleteManyColor(colorIdDto: ColorIdDto): Color[] | Promise<Color[]>;
    updateColor(updateColorDto: UpdateColorDto): Color | Promise<Color>;
    updateColorStatus(updateColorStatusDto: UpdateColorStatusDto): Color | Promise<Color>;
    addFuelType(addFuelTypeDto: CreateFuelTypeDto): FuelType | Promise<FuelType>;
    deleteFuelType(fuelTypeId: string): FuelType | Promise<FuelType>;
    deleteManyFuelTypes(fuelTypeIds: string[]): FuelType | Promise<FuelType>;
    updateFuelType(UpdateFuelTypeDto: UpdateFuelTypeDto, fuelTypeId: string): FuelType | Promise<FuelType>;
    addYear(addYearDto: CreateMakeYearDto): MakeYear | Promise<MakeYear>;
    updateYear(updateYearDto: UpdateMakeYearDto, yearId: string): Nullable<MakeYear> | Promise<Nullable<MakeYear>>;
    deleteYear(YearId: string): MakeYear[] | Promise<MakeYear[]>;
    deleteManyYears(yearIds: string[]): MakeYear[] | Promise<MakeYear[]>;
    addCarVariant(addCarVariantDto: CreateCarVariantDto): CarVariant | Promise<CarVariant>;
    updateCarVariant(updateCarVariantDto: UpdateCarVariantDto, carVariantId: string): CarVariant | Promise<CarVariant>;
    deleteCarVariant(carVariantId: string): CarVariant | Promise<CarVariant>;
    deleteManyCarVariant(carVariantIds: string[]): CarVariant | Promise<CarVariant>;
    addGarage(addGarageDto: CreateGarageDto): Nullable<Garage> | Promise<Nullable<Garage>>;
    updateGarage(updateGarageDto: UpdateGarageDto, garageId: string): Garage | Promise<Garage>;
    deleteGarage(garageId: string): Garage | Promise<Garage>;
    deleteManyGarage(garageIds: string[]): Garage | Promise<Garage>;
    addSeller(addSellerDto: CreateSellerDetailDto): SellerDetail | Promise<SellerDetail>;
    updateSeller(updateSellerDto: UpdateSellerDetailDto, sellerId: string): SellerDetail | Promise<SellerDetail>;
    deleteSeller(SellerID: string): SellerDetail[] | Promise<SellerDetail[]>;
    deleteManySeller(SellerID: string[]): SellerDetail[] | Promise<SellerDetail[]>;
    addDealer(createDealerDto: DealerCreateDto): Nullable<Dealer> | Promise<Nullable<Dealer>>;
    updateDealer(updateDealerId: DealerUpdateDto, dealerId: string): Nullable<Dealer> | Promise<Nullable<Dealer>>;
    deleteDealer(dealerId?: Nullable<string>): Nullable<Dealer> | Promise<Nullable<Dealer>>;
    deleteManyDealer(dealerIds: string[]): Nullable<Dealer> | Promise<Nullable<Dealer>>;
    addDealerHasEmployee(addDealerHasEmployeeDto: CreateEmployeeInput): Nullable<DealerHasEmployee> | Promise<Nullable<DealerHasEmployee>>;
    updateDealerHasEmployee(employeeId: string, updateDealerHasEmployeeDto: UpdateEmployeeInput): Nullable<DealerHasEmployee> | Promise<Nullable<DealerHasEmployee>>;
    deleteDealerHasEmployee(employeeId?: Nullable<string>): Nullable<DealerHasEmployee> | Promise<Nullable<DealerHasEmployee>>;
    deleteManyDealerHasEmployee(employeeIds: string[]): Nullable<DealerHasEmployee> | Promise<Nullable<DealerHasEmployee>>;
    addBuyer(addBuyerDto: BuyerInputDto): Nullable<BuyerOutputDto> | Promise<Nullable<BuyerOutputDto>>;
    updateBuyer(buyerId: string, updateBuyerDto: BuyerInputDto): BuyerOutputDto | Promise<BuyerOutputDto>;
    deleteBuyer(buyerId: string): BuyerOutputDto | Promise<BuyerOutputDto>;
    deleteManyBuyers(buyerIds: string[]): BuyerOutputDto | Promise<BuyerOutputDto>;
    addCallType(createCallTypeDto: CallTypeCreateDto): Nullable<CallType> | Promise<Nullable<CallType>>;
    updateCallType(updateCallTypeDto: CallTypeCreateDto, updateCallTypeId: string): Nullable<CallType> | Promise<Nullable<CallType>>;
    deleteCallType(callTypeId: string): Nullable<CallType> | Promise<Nullable<CallType>>;
    addPurchaseDetail(addPurchaseDetailDto: BuyerHasPurchaseDetailCreate): BuyerHasPurchaseDetail | Promise<BuyerHasPurchaseDetail>;
    updatePurchaseDetail(updatePruchaseDetailDto: BuyerHasPurchaseDetailUpdate, purchaseDetailId: string): BuyerHasPurchaseDetail | Promise<BuyerHasPurchaseDetail>;
    deletePurchaseDetail(purchaseDetailId: string): BuyerHasPurchaseDetail | Promise<BuyerHasPurchaseDetail>;
    deleteManyPurchaseDetail(purchaseDetailIds: string[]): BuyerHasPurchaseDetail | Promise<BuyerHasPurchaseDetail>;
    addTeleCallingEntry(addTeleCallingDto: TeleCallingEntryCreate): Nullable<TeleCallingEntry> | Promise<Nullable<TeleCallingEntry>>;
    updateTeleCallingEntry(updateTeleCallingDto: TeleCallingEntryUpdate, teleCallingId: string): Nullable<TeleCallingEntry> | Promise<Nullable<TeleCallingEntry>>;
    deleteTeleCalling(teleCalledId: string): Nullable<TeleCallingEntry> | Promise<Nullable<TeleCallingEntry>>;
    deleteManyTeleCalling(teleCallingIds: string): Nullable<TeleCallingEntry> | Promise<Nullable<TeleCallingEntry>>;
    addLeadSource(addLeadSourceDto: LeadSoucreUpdateDto): Nullable<LeadSource> | Promise<Nullable<LeadSource>>;
    updateLeadSource(updateLeadSourceDto: LeadSoucreUpdateDto, leadSourceObjectId: string): Nullable<LeadSource> | Promise<Nullable<LeadSource>>;
    deleteLeadSource(leadSourceObectId: string): Nullable<LeadSource> | Promise<Nullable<LeadSource>>;
    deleteManyLeadSource(leadSourceObjectIds: string[]): Nullable<LeadSource[]> | Promise<Nullable<LeadSource[]>>;
    addLeadTypes(createLeadTypeDto: LeadTypeCreateDto): Nullable<LeadTypes> | Promise<Nullable<LeadTypes>>;
    updateLeadTypes(leadTypeId: string, updateLeadTypeDto: LeadTypeUpdateDto): Nullable<LeadTypes> | Promise<Nullable<LeadTypes>>;
    deleteLeadTypes(leadTypeId: string): Nullable<LeadTypes> | Promise<Nullable<LeadTypes>>;
    deleteManyLeadTypes(leadTypesIds: string[]): Nullable<LeadTypes> | Promise<Nullable<LeadTypes>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
