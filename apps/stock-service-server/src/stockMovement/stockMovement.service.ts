import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StockMovementServiceBase } from "./base/stockMovement.service.base";

@Injectable()
export class StockMovementService extends StockMovementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
