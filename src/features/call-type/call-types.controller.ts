import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
  Put,
} from "@nestjs/common";
import { CallType } from "./schemas/call-types.schema";
import { CallTypeService } from "./services/call-types.service";
import { CallTypeCreateDto } from "./dtos/call-types.create.dto";
import { CallTypeUpdateDto } from "./dtos/call-types.update.dto";

@Controller("call-types")
export class CallTypesController {
  constructor(public readonly callTypeService: CallTypeService) { }

  @Get(":callTypeId")
  async getCallTypeById(
    @Param("callTypeId") callTypeId: string,
  ): Promise<CallType | any> {
    return this.callTypeService.getCallTypeById(callTypeId);
  }

  @Get()
  async getAllCallTypes(): Promise<CallType[]> {
    return this.callTypeService.getCallTypes(3, 1);
  }

  @Post()
  async createCallType(
    @Body() callTypeCreateDto: CallTypeCreateDto,
  ): Promise<CallType> {
    return this.callTypeService.createCallType(
      callTypeCreateDto.name,
      callTypeCreateDto.dealer,
    );
  }

  @Put(":callTypeId")
  async updateCallType(
    @Param("callTypeId") callTypeId: string,
    @Body() callTypeUpdateDto: CallTypeUpdateDto,
  ): Promise<CallType> {
    return this.callTypeService.updateCallType(callTypeId, callTypeUpdateDto);
  }

  @Delete(":callTypeId")
  async deleteCallType(callTypeId: string): Promise<CallType | any> {
    return this.callTypeService.deleteCallType(callTypeId);
  }

  @Delete()
  async deleteManyCallTypes(callTypeIds: [string]): Promise<boolean> {
    return this.callTypeService.deleteManyCallTypes(callTypeIds);
  }
}
