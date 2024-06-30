import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StockMovementService } from "./stockMovement.service";
import { StockMovementControllerBase } from "./base/stockMovement.controller.base";

@swagger.ApiTags("stockMovements")
@common.Controller("stockMovements")
export class StockMovementController extends StockMovementControllerBase {
  constructor(protected readonly service: StockMovementService) {
    super(service);
  }
}
