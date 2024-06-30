/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StockMovementWhereInput } from "./StockMovementWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StockMovementListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => StockMovementWhereInput,
  })
  @ValidateNested()
  @Type(() => StockMovementWhereInput)
  @IsOptional()
  @Field(() => StockMovementWhereInput, {
    nullable: true,
  })
  every?: StockMovementWhereInput;

  @ApiProperty({
    required: false,
    type: () => StockMovementWhereInput,
  })
  @ValidateNested()
  @Type(() => StockMovementWhereInput)
  @IsOptional()
  @Field(() => StockMovementWhereInput, {
    nullable: true,
  })
  some?: StockMovementWhereInput;

  @ApiProperty({
    required: false,
    type: () => StockMovementWhereInput,
  })
  @ValidateNested()
  @Type(() => StockMovementWhereInput)
  @IsOptional()
  @Field(() => StockMovementWhereInput, {
    nullable: true,
  })
  none?: StockMovementWhereInput;
}
export { StockMovementListRelationFilter as StockMovementListRelationFilter };