
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

export interface BrandIdDto {
    brandId: string;
}

export interface BodyTypeIdDto {
    bodyTypeId: string[];
}

export interface ColorIdDto {
    colorId: string[];
}

export interface FuelTypeIdDto {
    fuelTypeId: string[];
}

export interface MakeYearIdDto {
    makeYearId: string[];
}

export interface CarVariantIdDto {
    carVariantId: string[];
}

export interface GarageIdDto {
    garageId: string[];
}

export interface LeadSourceIdDto {
    leadSourceId: string[];
}

export interface LeadTypeIdDto {
    leadTypeId: string[];
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
    brandId?: Nullable<string[]>;
}

export interface UpdateBrandStatusDto {
    status: Status;
    brandId: string[];
}

export interface CreateBodyTypeDto {
    name: string;
    status?: Nullable<Status>;
    deleted_at?: Nullable<DateTime>;
}

export interface UpdateBodyTypeDto {
    name: string;
    status?: Nullable<Status>;
    deleted_at?: Nullable<DateTime>;
    bodyTypeId: string;
}

export interface UpdateBodyTypeStatusDto {
    status: Status;
    bodyTypeId: string;
}

export interface CreateCarModelDto {
    name?: Nullable<string>;
    status?: Nullable<Status>;
    body_type_id?: Nullable<string>;
    brand_id?: Nullable<string>;
}

export interface UpdateCarModelDto {
    name?: Nullable<string>;
    status?: Nullable<Status>;
    body_type_id?: Nullable<string>;
    brand_id?: Nullable<string>;
    carModelId: string;
}

export interface UpdateCarModelStatusDto {
    status: Status;
    carModelId: string[];
}

export interface CarModelIdDto {
    carModelId: string[];
}

export interface CreateColorDto {
    name?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateColorDto {
    name?: Nullable<string>;
    status?: Nullable<Status>;
    colorId: string[];
}

export interface UpdateColorStatusDto {
    status: Status;
    colorId: string[];
}

export interface CreateFuelTypeDto {
    name?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateFuelTypeDto {
    name?: Nullable<string>;
    status?: Nullable<Status>;
    fuelTypeId: string[];
}

export interface UpdateFuelTypeStatusDto {
    status: Status;
    fuelTypeId: string[];
}

export interface CreateMakeYearDto {
    year: number;
    status?: Nullable<string>;
}

export interface UpdateMakeyearStatusDto {
    status: Status;
    makeYearId: string[];
}

export interface UpdateMakeYearDto {
    year: number;
    status?: Nullable<string>;
    makeYearId: string[];
}

export interface CreateCarVariantDto {
    name?: Nullable<string>;
    status?: Nullable<Status>;
    model_id?: Nullable<string>;
}

export interface UpdateCarVariantDto {
    name?: Nullable<string>;
    status?: Nullable<Status>;
    model_id?: Nullable<string>;
    carVariantId: string;
}

export interface UpdateCarVariantStatusDto {
    status: Status;
    carVariantId: string[];
}

export interface CreateGarageDto {
    name: string;
    model_id: string[];
    status?: Nullable<Status>;
}

export interface UpdateGarageDto {
    name: string;
    model_id: string[];
    status?: Nullable<Status>;
    garageId: string[];
}

export interface UpdateGarageStatusDto {
    status: Status;
    garageId: string[];
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

export interface CreateLeadSourceDto {
    name: string;
    status?: Nullable<Status>;
    dealer_id?: Nullable<string[]>;
}

export interface UpdateLeadSourceDto {
    name: string;
    status?: Nullable<Status>;
    dealer_id?: Nullable<string[]>;
    leadSourceId: string[];
}

export interface UpdateLeadSourceStatusDto {
    status: Status;
    leadSourceId: string[];
}

export interface CreateLeadTypeDto {
    name: string;
    status?: Nullable<Status>;
    dealer_id?: Nullable<string>;
}

export interface UpdateLeadTypeDto {
    name: string;
    status?: Nullable<Status>;
    dealer_id?: Nullable<string>;
    leadTypeId: string[];
}

export interface UpdateLeadTypeStatusDto {
    leadTypeId: string[];
    status: Status;
}

export interface Brand {
    name?: Nullable<string>;
    status?: Nullable<Status>;
    deleted_at?: Nullable<DateTime>;
}

export interface BodyType {
    name?: Nullable<string>;
    status?: Nullable<Status>;
    deleted_at?: Nullable<DateTime>;
}

export interface CarModel {
    name?: Nullable<string>;
    body_type_id?: Nullable<string>;
    brand_id?: Nullable<string>;
    status?: Nullable<Status>;
    deleted_at?: Nullable<DateTime>;
}

export interface Color {
    name?: Nullable<string>;
    status?: Nullable<Status>;
    deleted_at?: Nullable<DateTime>;
}

export interface FuelType {
    name: string;
    status?: Nullable<Status>;
    deleted_at?: Nullable<DateTime>;
}

export interface MakeYear {
    year: number;
    status?: Nullable<Status>;
    deleted_at?: Nullable<DateTime>;
}

export interface CarVariant {
    name?: Nullable<string>;
    status?: Nullable<Status>;
    model_id?: Nullable<string>;
    deleted_at?: Nullable<DateTime>;
}

export interface Garage {
    name: string;
    model_id?: Nullable<string>;
    status?: Nullable<Status>;
    deleted_at?: Nullable<DateTime>;
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
    name?: Nullable<string>;
    status?: Nullable<Status>;
    dealer_id?: Nullable<string>;
}

export interface LeadTypes {
    name: string;
    status?: Nullable<Status>;
    dealer_id?: Nullable<string>;
    deleted_at?: Nullable<DateTime>;
}

export interface IQuery {
    index(): string | Promise<string>;
    listBrand(): Nullable<Brand[]> | Promise<Nullable<Brand[]>>;
    getBrandDetail(brandIdDto: BrandIdDto): Nullable<Brand> | Promise<Nullable<Brand>>;
    listBodyType(): Nullable<BodyType[]> | Promise<Nullable<BodyType[]>>;
    getBodyTypeDetail(bodyTypeIdDto: BodyTypeIdDto): Nullable<BodyType> | Promise<Nullable<BodyType>>;
    listCarModel(): Nullable<CarModel[]> | Promise<Nullable<CarModel[]>>;
    getCarModelDetail(carModelId: string): Nullable<CarModel> | Promise<Nullable<CarModel>>;
    listColors(): Nullable<Color[]> | Promise<Nullable<Color[]>>;
    getColorDetail(colorIdDto: ColorIdDto): Nullable<Color> | Promise<Nullable<Color>>;
    listFuelType(): FuelType[] | Promise<FuelType[]>;
    getFuelTypeDetail(fuelTypeIdDto: FuelTypeIdDto): Nullable<FuelType> | Promise<Nullable<FuelType>>;
    listYear(): Nullable<MakeYear[]> | Promise<Nullable<MakeYear[]>>;
    getYeadDetail(makeYearIdDto: MakeYearIdDto): MakeYear | Promise<MakeYear>;
    listCarVariant(): CarVariant[] | Promise<CarVariant[]>;
    getCarVariantDetail(carVariantIdDto: CarVariantIdDto): CarVariant | Promise<CarVariant>;
    listGarage(): Nullable<Garage[]> | Promise<Nullable<Garage[]>>;
    getGarageDetail(garageIdDto: GarageIdDto): Garage | Promise<Garage>;
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
    getLeadSourceDetail(leadSourceIdDto: LeadSourceIdDto): Nullable<LeadSource> | Promise<Nullable<LeadSource>>;
    listLeadType(): Nullable<LeadTypes[]> | Promise<Nullable<LeadTypes[]>>;
    getLeadTypeDetail(leadTypeIdDto: LeadTypeIdDto): Nullable<LeadTypes> | Promise<Nullable<LeadTypes>>;
}

export interface IMutation {
    addBrand(addBrandDto: CreateBrandDto): Brand | Promise<Brand>;
    updateBrand(updateBrandDto: UpdateBrandDto): Brand | Promise<Brand>;
    updateBrandStatus(updateBrandStatusDto: UpdateBrandStatusDto): Brand | Promise<Brand>;
    deleteBrand(brandIdDto: BrandIdDto): Brand | Promise<Brand>;
    deleteManyBrands(brandIdDto: BrandIdDto): Brand | Promise<Brand>;
    addBodyType(addBodyTypeDto: CreateBodyTypeDto): BodyType | Promise<BodyType>;
    deleteBodyType(bodyTypeIdDto: BodyTypeIdDto): BodyType | Promise<BodyType>;
    deleteManyBodyTypes(bodyTypeIdDto: BodyTypeIdDto): BodyType | Promise<BodyType>;
    updateBodyType(updateBodyTypeDto: UpdateBodyTypeDto): BodyType | Promise<BodyType>;
    updateBodyTypeStatus(updateBodyTypeStatusDto: UpdateBodyTypeStatusDto): BodyType | Promise<BodyType>;
    addCarModel(addCarModelDto: CreateCarModelDto): CarModel | Promise<CarModel>;
    updateCarModel(updateCarModelDto: UpdateCarModelDto): CarModel | Promise<CarModel>;
    updateCarModelStatus(updateCarModelStatusDto: UpdateCarModelStatusDto): CarModel | Promise<CarModel>;
    deleteCarModel(carModelIdDto: CarModelIdDto): CarModel | Promise<CarModel>;
    deleteManyCarModel(carModelIdDto: CarModelIdDto): CarModel | Promise<CarModel>;
    addColor(addColorDto: CreateColorDto): Nullable<Color> | Promise<Nullable<Color>>;
    deleteColor(colorIdDto: ColorIdDto): Nullable<Color> | Promise<Nullable<Color>>;
    deleteManyColor(colorIdDto: ColorIdDto): Color[] | Promise<Color[]>;
    updateColor(updateColorDto: UpdateColorDto): Color | Promise<Color>;
    updateColorStatus(updateColorStatusDto: UpdateColorStatusDto): Color | Promise<Color>;
    addFuelType(addFuelTypeDto: CreateFuelTypeDto): FuelType | Promise<FuelType>;
    deleteFuelType(fuelTypeIdDto: FuelTypeIdDto): FuelType | Promise<FuelType>;
    deleteManyFuelTypes(fuelTypeIdDto: FuelTypeIdDto): FuelType | Promise<FuelType>;
    updateFuelType(updateFuelTypeDto: UpdateFuelTypeDto): FuelType | Promise<FuelType>;
    updateFuelTypeStatus(updateFuelTypeStatusDto: UpdateFuelTypeStatusDto): FuelType | Promise<FuelType>;
    addYear(addMakeYearDto: CreateMakeYearDto): MakeYear | Promise<MakeYear>;
    updateYearStatus(updateMakeYearStatusDto: UpdateMakeyearStatusDto): MakeYear | Promise<MakeYear>;
    updateYear(updateMakeYearDto: UpdateMakeYearDto): Nullable<MakeYear> | Promise<Nullable<MakeYear>>;
    deleteYear(makeYearIdDto: MakeYearIdDto): MakeYear[] | Promise<MakeYear[]>;
    deleteManyYears(makeYearIdDto: MakeYearIdDto): MakeYear[] | Promise<MakeYear[]>;
    addCarVariant(addCarVariantDto: CreateCarVariantDto): CarVariant | Promise<CarVariant>;
    updateCarVariant(updateCarVariantDto: UpdateCarVariantDto): CarVariant | Promise<CarVariant>;
    updateCarVariantStatus(updateCarVariantStatusDto: UpdateCarVariantStatusDto): CarVariant | Promise<CarVariant>;
    deleteCarVariant(carVariantIdDto: CarVariantIdDto): CarVariant | Promise<CarVariant>;
    deleteManyCarVariant(carVariantIdDto: CarVariantIdDto): CarVariant | Promise<CarVariant>;
    addGarage(addGarageDto: CreateGarageDto): Nullable<Garage> | Promise<Nullable<Garage>>;
    updateGarage(updateGarageDto: UpdateGarageDto): Garage | Promise<Garage>;
    updateGarageStatus(updateGarageStatusDto: UpdateGarageStatusDto): Garage | Promise<Garage>;
    deleteGarage(garageIdDto: GarageIdDto): Garage | Promise<Garage>;
    deleteManyGarage(garageIdDto: GarageIdDto): Garage | Promise<Garage>;
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
    addLeadSource(addLeadSourceDto: CreateLeadSourceDto): Nullable<LeadSource> | Promise<Nullable<LeadSource>>;
    updateLeadSource(updateLeadSourceDto: UpdateLeadSourceDto): Nullable<LeadSource> | Promise<Nullable<LeadSource>>;
    updateLeadSourceStatus(updateLeadSourceStatusDto: UpdateLeadSourceStatusDto): Nullable<LeadSource> | Promise<Nullable<LeadSource>>;
    deleteLeadSource(leadSourceIdDto: LeadSourceIdDto): Nullable<LeadSource> | Promise<Nullable<LeadSource>>;
    deleteManyLeadSource(leadSourceIdDto: LeadSourceIdDto): Nullable<LeadSource[]> | Promise<Nullable<LeadSource[]>>;
    addLeadType(addLeadTypeDto: CreateLeadTypeDto): Nullable<LeadTypes> | Promise<Nullable<LeadTypes>>;
    updateLeadType(updateLeadTypeDto: UpdateLeadTypeDto): Nullable<LeadTypes> | Promise<Nullable<LeadTypes>>;
    updateLeadTypeStatus(updateLeadTypeStatusDto: UpdateLeadTypeStatusDto): Nullable<LeadTypes> | Promise<Nullable<LeadTypes>>;
    deleteLeadType(leadTypeIdDto: LeadTypeIdDto): Nullable<LeadTypes> | Promise<Nullable<LeadTypes>>;
    deleteManyLeadType(leadTypeIdDto: LeadTypeIdDto): Nullable<LeadTypes> | Promise<Nullable<LeadTypes>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
