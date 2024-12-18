import * as graphql from "@nestjs/graphql";
import { StockMovementResolverBase } from "./base/stockMovement.resolver.base";
import { StockMovement } from "./base/StockMovement";
import { StockMovementService } from "./stockMovement.service";

@graphql.Resolver(() => StockMovement)
export class StockMovementResolver extends StockMovementResolverBase {
  constructor(protected readonly service: StockMovementService) {
    super(service);
  }
}
