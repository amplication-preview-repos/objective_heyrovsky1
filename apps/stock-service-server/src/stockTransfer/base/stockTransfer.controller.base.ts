/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { StockTransferService } from "../stockTransfer.service";
import { StockTransferCreateInput } from "./StockTransferCreateInput";
import { StockTransfer } from "./StockTransfer";
import { StockTransferFindManyArgs } from "./StockTransferFindManyArgs";
import { StockTransferWhereUniqueInput } from "./StockTransferWhereUniqueInput";
import { StockTransferUpdateInput } from "./StockTransferUpdateInput";

export class StockTransferControllerBase {
  constructor(protected readonly service: StockTransferService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: StockTransfer })
  async createStockTransfer(
    @common.Body() data: StockTransferCreateInput
  ): Promise<StockTransfer> {
    return await this.service.createStockTransfer({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [StockTransfer] })
  @ApiNestedQuery(StockTransferFindManyArgs)
  async stockTransfers(
    @common.Req() request: Request
  ): Promise<StockTransfer[]> {
    const args = plainToClass(StockTransferFindManyArgs, request.query);
    return this.service.stockTransfers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: StockTransfer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async stockTransfer(
    @common.Param() params: StockTransferWhereUniqueInput
  ): Promise<StockTransfer | null> {
    const result = await this.service.stockTransfer({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: StockTransfer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStockTransfer(
    @common.Param() params: StockTransferWhereUniqueInput,
    @common.Body() data: StockTransferUpdateInput
  ): Promise<StockTransfer | null> {
    try {
      return await this.service.updateStockTransfer({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: StockTransfer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStockTransfer(
    @common.Param() params: StockTransferWhereUniqueInput
  ): Promise<StockTransfer | null> {
    try {
      return await this.service.deleteStockTransfer({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}