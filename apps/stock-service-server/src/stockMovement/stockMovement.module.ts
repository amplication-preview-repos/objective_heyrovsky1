import { Module } from "@nestjs/common";
import { StockMovementModuleBase } from "./base/stockMovement.module.base";
import { StockMovementService } from "./stockMovement.service";
import { StockMovementController } from "./stockMovement.controller";
import { StockMovementResolver } from "./stockMovement.resolver";

@Module({
  imports: [StockMovementModuleBase],
  controllers: [StockMovementController],
  providers: [StockMovementService, StockMovementResolver],
  exports: [StockMovementService],
})
export class StockMovementModule {}
