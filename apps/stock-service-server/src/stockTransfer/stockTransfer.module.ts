import { Module } from "@nestjs/common";
import { StockTransferModuleBase } from "./base/stockTransfer.module.base";
import { StockTransferService } from "./stockTransfer.service";
import { StockTransferController } from "./stockTransfer.controller";
import { StockTransferResolver } from "./stockTransfer.resolver";

@Module({
  imports: [StockTransferModuleBase],
  controllers: [StockTransferController],
  providers: [StockTransferService, StockTransferResolver],
  exports: [StockTransferService],
})
export class StockTransferModule {}
