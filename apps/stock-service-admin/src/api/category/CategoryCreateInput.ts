import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { CategoryCreateNestedManyWithoutCategoriesInput } from "./CategoryCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  categories?: CategoryWhereUniqueInput | null;
  name: string;
  parentId?: CategoryCreateNestedManyWithoutCategoriesInput;
};
