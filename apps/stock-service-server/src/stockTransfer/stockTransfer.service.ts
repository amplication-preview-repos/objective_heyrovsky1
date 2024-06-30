import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StockTransferServiceBase } from "./base/stockTransfer.service.base";

@Injectable()
export class StockTransferService extends StockTransferServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
