import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProductWhereInput = {
  categoryId?: StringNullableFilter;
  id?: StringFilter;
};
