import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TenantWhereInput = {
  active?: StringNullableFilter;
  id?: StringFilter;
};
