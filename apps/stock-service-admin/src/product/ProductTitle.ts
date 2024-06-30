import { Product as TProduct } from "../api/product/Product";

export const PRODUCT_TITLE_FIELD = "categoryId";

export const ProductTitle = (record: TProduct): string => {
  return record.categoryId?.toString() || String(record.id);
};
