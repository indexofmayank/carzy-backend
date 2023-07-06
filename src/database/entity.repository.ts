import {
  Document,
  FilterQuery,
  Model,
  UpdateQuery,
} from "mongoose";
import { EntityStatus } from "src/common/enums/entity-status.enums";

export abstract class EntityRepository<T extends Document> {
  constructor(public readonly entityModel: Model<T>) { }

  async findOne(
    entityFilterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T | null> {
    return this.entityModel
      .findOne(entityFilterQuery, {
        //_id: 0,
        __v: 0,
        ...projection,
      })
      .exec();
  }
  async findActiveOne(
    entityFilterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T | null> {
    entityFilterQuery.$and["status"] = EntityStatus.ACTIVE;
    return this.findOne(entityFilterQuery, projection);
  }

  async find(
    entityFilterQuery: FilterQuery<T>,
    resPerPage: number,
    pageNo: number,
  ): Promise<T[] | null> {
    const skip = resPerPage * (pageNo - 1);
    return this.entityModel
      .find(entityFilterQuery)
      .limit(resPerPage)
      .skip(skip);
  }

  async findById(entityObjectId): Promise<T | null> {
    return this.entityModel.findById(entityObjectId);
  }

  async findByIds(entityObjectIds): Promise<T[] | null> {
    return this.entityModel.find({ $in: { _id: entityObjectIds } });
  }

  async create(createEntityData: unknown, options?: object): Promise<T> {
    const entity = new this.entityModel(createEntityData);
    return entity.save(options);
  }

  async findOneAndUpdate(
    entityFilterQuery: FilterQuery<T>,
    updateEntityData: UpdateQuery<unknown>,
  ): Promise<T | null> {
    return this.entityModel.findOneAndUpdate(
      entityFilterQuery,
      updateEntityData,
      {
        new: true,
      },
    );
  }

  async updateById(
    id: string,
    updateEntityData: UpdateQuery<unknown>,
  ): Promise<T | null> {
    return this.entityModel.findByIdAndUpdate(
      id, updateEntityData, { new: true, },
    );
  }

  async findManyAndDelete(entityFilterQuery: FilterQuery<T>): Promise<boolean> {
    const deleteResult = await this.entityModel.deleteMany(entityFilterQuery);
    return deleteResult.deletedCount >= 1;
  }

  async findOneAndDelete(entityFilterQuery: FilterQuery<T>): Promise<any> {
    const deleteResult = await this.entityModel.deleteOne(entityFilterQuery);
    return deleteResult;
  }
}
