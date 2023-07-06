import { CallTypesRepository } from "../repositories/call-types.repository";
import { CallType } from "../schemas/call-types.schema";
import { Injectable } from "@nestjs/common";
import { CallTypeUpdateDto } from "../dtos/call-types.update.dto";

@Injectable()
export class CallTypeService {
  constructor(private readonly callTypeRepository: CallTypesRepository) { }

  async getCallTypeById(callTypeObjectId): Promise<CallType | any> {
    return this.callTypeRepository.findById(callTypeObjectId);
  }

  async getCallTypes(resPerPage, pageNo): Promise<CallType[]> {
    return this.callTypeRepository.find({}, resPerPage, pageNo);
  }

  async createCallType(name: string, dealer: string): Promise<CallType> {
    return this.callTypeRepository.create({
      name,
      dealer,
    });
  }

  async updateCallType(
    callTypeId: string,
    updateCallTypeDto: CallTypeUpdateDto,
  ): Promise<CallType> {
    return this.callTypeRepository.findOneAndUpdate(
      { _id: callTypeId },
      updateCallTypeDto,
    );
  }

  async deleteCallType(callTypeId: string): Promise<any> {
    return this.callTypeRepository.findOneAndDelete({ _id: callTypeId });
  }

  async deleteManyCallTypes(callTypeIds: [string]): Promise<any> {
    return this.callTypeRepository.findManyAndDelete({
      callTypeId: { callTypeIds },
    });
  }
}
