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

/**
 * Asynchronously retrieves all available products.
 *
 * @returns A promise that resolves to an array of Product objects.
 */
export async function getProducts(): Promise<Product[]> {
  // Mocked product list
  return [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];
}
