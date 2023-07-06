import { applyDecorators } from "@nestjs/common";
import { Schema } from "@nestjs/mongoose";

export function DefaultSchema(config?: object) {
  return applyDecorators(Schema({ timestamps: { createdAt: "created_at", updatedAt: "updated_at" }, ...config }));
}