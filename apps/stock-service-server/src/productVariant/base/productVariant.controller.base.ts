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
import { ProductVariantService } from "../productVariant.service";
import { ProductVariantCreateInput } from "./ProductVariantCreateInput";
import { ProductVariant } from "./ProductVariant";
import { ProductVariantFindManyArgs } from "./ProductVariantFindManyArgs";
import { ProductVariantWhereUniqueInput } from "./ProductVariantWhereUniqueInput";
import { ProductVariantUpdateInput } from "./ProductVariantUpdateInput";

export class ProductVariantControllerBase {
  constructor(protected readonly service: ProductVariantService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProductVariant })
  async createProductVariant(
    @common.Body() data: ProductVariantCreateInput
  ): Promise<ProductVariant> {
    return await this.service.createProductVariant({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ProductVariant] })
  @ApiNestedQuery(ProductVariantFindManyArgs)
  async productVariants(
    @common.Req() request: Request
  ): Promise<ProductVariant[]> {
    const args = plainToClass(ProductVariantFindManyArgs, request.query);
    return this.service.productVariants({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProductVariant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async productVariant(
    @common.Param() params: ProductVariantWhereUniqueInput
  ): Promise<ProductVariant | null> {
    const result = await this.service.productVariant({
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
  @swagger.ApiOkResponse({ type: ProductVariant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProductVariant(
    @common.Param() params: ProductVariantWhereUniqueInput,
    @common.Body() data: ProductVariantUpdateInput
  ): Promise<ProductVariant | null> {
    try {
      return await this.service.updateProductVariant({
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
  @swagger.ApiOkResponse({ type: ProductVariant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProductVariant(
    @common.Param() params: ProductVariantWhereUniqueInput
  ): Promise<ProductVariant | null> {
    try {
      return await this.service.deleteProductVariant({
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
