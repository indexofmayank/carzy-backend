import { registerEnumType } from "@nestjs/graphql";


export enum DealerStatus {
    ON_BOARDED = "on_boarded",
    OFF_BOARDED = "off_boarded",
    ENQUIRED = "enquired",
}

registerEnumType(DealerStatus, {
    name: "DealerStatus",
});