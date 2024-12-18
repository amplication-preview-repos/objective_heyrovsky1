export type Category = {
  categories?: Category | null;
  createdAt: Date;
  id: string;
  name: string;
  parentId?: Array<Category>;
  updatedAt: Date;
};
