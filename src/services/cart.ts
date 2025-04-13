import axios from 'axios';

/**
 * Represents a product with an ID and name.
 */
export interface Product {
  /**
   * The unique identifier for the product.
   */
  id: number;
  /**
   * The name of the product.
   */
  name: string;
}

const API_BASE_URL = 'https://localhost:7131/api/products'; // Zamień na właściwy adres API

/**
 * Asynchronously adds a product to the cart.
 *
 * @param product The product to add to the cart.
 * @returns A promise that resolves when the product is successfully added.
 */
export async function addToCart(product: Product): Promise<void> {
  try {
    console.log(`${API_BASE_URL}/add`)
    await axios.post(`${API_BASE_URL}/add`, product);
    console.log(`Added product to cart: ${product.name}`);
  } catch (error) {
    console.error('Error adding product to cart:', error);
    throw error;
  }
}

/**
 * Asynchronously removes a product from the cart.
 *
 * @param productId The ID of the product to remove from the cart.
 * @returns A promise that resolves when the product is successfully removed.
 */
export async function removeFromCart(productId: number): Promise<void> {
  try {
    await axios.delete(`${API_BASE_URL}/delete/${productId}`);
    console.log(`Removed product from cart with ID: ${productId}`);
  } catch (error) {
    console.error('Error removing product from cart:', error);
    throw error;
  }
}

/**
 * Asynchronously retrieves all products in the cart.
 *
 * @returns A promise that resolves to an array of Product objects in the cart.
 */
export async function viewCart(): Promise<Product[]> {
  try {
    console.log(`${API_BASE_URL}/getAll`)
    const response = await axios.get(`${API_BASE_URL}/getAll`);
    console.log('Fetched cart contents');
    return response.data as Product[];
  } catch (error) {
    console.error('Error fetching cart contents:', error);
    throw error;
  }
}
