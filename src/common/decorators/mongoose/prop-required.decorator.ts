import { applyDecorators } from "@nestjs/common";
import { Prop } from "@nestjs/mongoose";

export function PropRequired(config?: object) {
    return applyDecorators(Prop({ required: true, ...config }));
}