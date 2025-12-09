import type { Product, ProductsResponse } from '../types/product';
import type { ProductService } from './api.interface';

const BASE_URL = 'https://dummyjson.com';

class DummyJSONService implements ProductService {
  async getProducts(
    limit: number = 30,
    skip: number = 0
  ): Promise<ProductsResponse> {
    const response = await fetch(
      `${BASE_URL}/products?limit=${limit}&skip=${skip}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  }

  async getProduct(id: number): Promise<Product> {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch product ${id}`);
    }
    return response.json();
  }

  async getCategories(): Promise<string[]> {
    const response = await fetch(`${BASE_URL}/products/category-list`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return response.json();
  }

  async getProductsByCategory(category: string): Promise<ProductsResponse> {
    const response = await fetch(`${BASE_URL}/products/category/${category}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch products for category ${category}`);
    }
    return response.json();
  }
}

export const dummyJSONService = new DummyJSONService();
