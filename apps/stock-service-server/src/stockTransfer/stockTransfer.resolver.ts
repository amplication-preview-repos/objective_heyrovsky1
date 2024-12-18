import * as graphql from "@nestjs/graphql";
import { StockTransferResolverBase } from "./base/stockTransfer.resolver.base";
import { StockTransfer } from "./base/StockTransfer";
import { StockTransferService } from "./stockTransfer.service";

@graphql.Resolver(() => StockTransfer)
export class StockTransferResolver extends StockTransferResolverBase {
  constructor(protected readonly service: StockTransferService) {
    super(service);
  }
}
