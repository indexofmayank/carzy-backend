import { InputType } from '@nestjs/graphql';
import { BuyerHasPurchaseDetailUpdate } from './buyer-has-purchase-detail.update.dto';

@InputType()
export class BuyerHasPurchaseDetailCreate extends BuyerHasPurchaseDetailUpdate {}
