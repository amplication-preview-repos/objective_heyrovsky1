import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { CategoryListRelationFilter } from "./CategoryListRelationFilter";

export type CategoryWhereInput = {
  categories?: CategoryWhereUniqueInput;
  id?: StringFilter;
  name?: StringFilter;
  parentId?: CategoryListRelationFilter;
};
