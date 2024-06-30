/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ProductVariant } from "./ProductVariant";
import { ProductVariantCountArgs } from "./ProductVariantCountArgs";
import { ProductVariantFindManyArgs } from "./ProductVariantFindManyArgs";
import { ProductVariantFindUniqueArgs } from "./ProductVariantFindUniqueArgs";
import { DeleteProductVariantArgs } from "./DeleteProductVariantArgs";
import { ProductVariantService } from "../productVariant.service";
@graphql.Resolver(() => ProductVariant)
export class ProductVariantResolverBase {
  constructor(protected readonly service: ProductVariantService) {}

  async _productVariantsMeta(
    @graphql.Args() args: ProductVariantCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ProductVariant])
  async productVariants(
    @graphql.Args() args: ProductVariantFindManyArgs
  ): Promise<ProductVariant[]> {
    return this.service.productVariants(args);
  }

  @graphql.Query(() => ProductVariant, { nullable: true })
  async productVariant(
    @graphql.Args() args: ProductVariantFindUniqueArgs
  ): Promise<ProductVariant | null> {
    const result = await this.service.productVariant(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ProductVariant)
  async deleteProductVariant(
    @graphql.Args() args: DeleteProductVariantArgs
  ): Promise<ProductVariant | null> {
    try {
      return await this.service.deleteProductVariant(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
