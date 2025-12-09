import type { Product, ProductsResponse } from '../types/product';

export interface ProductService {
  getProducts(limit?: number, skip?: number): Promise<ProductsResponse>;
  getProduct(id: number): Promise<Product>;
  getCategories(): Promise<string[]>;
  getProductsByCategory(category: string): Promise<ProductsResponse>;
}
