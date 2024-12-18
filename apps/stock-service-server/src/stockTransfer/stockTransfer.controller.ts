import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StockTransferService } from "./stockTransfer.service";
import { StockTransferControllerBase } from "./base/stockTransfer.controller.base";

@swagger.ApiTags("stockTransfers")
@common.Controller("stockTransfers")
export class StockTransferController extends StockTransferControllerBase {
  constructor(protected readonly service: StockTransferService) {
    super(service);
  }
}
