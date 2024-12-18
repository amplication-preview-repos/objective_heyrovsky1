import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { CategoryUpdateManyWithoutCategoriesInput } from "./CategoryUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  categories?: CategoryWhereUniqueInput | null;
  name?: string;
  parentId?: CategoryUpdateManyWithoutCategoriesInput;
};
