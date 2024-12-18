import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  categoriesId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
