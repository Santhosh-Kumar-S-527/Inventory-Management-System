export const PRODUCT_CATEGORIES = [
  "Electronics",
  "Accessories",
  "Furniture",
  "Stationery",
] as const;

export type ProductCategory =
  typeof PRODUCT_CATEGORIES[number];

export interface Product {
  readonly id: string;
  name: string;
  category: ProductCategory;
  price: number;
  stock: number;
}

export type CreateProduct = Omit<Product, "id">;

export type UpdateProduct = Partial<
  Omit<Product, "id">
>;