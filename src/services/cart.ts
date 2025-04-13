/**
 * Represents a product with an ID and name.
 */
export interface Product {
  /**
   * The unique identifier for the product.
   */
  id: string;
  /**
   * The name of the product.
   */
  name: string;
}

/**
 * Asynchronously adds a product to the cart.
 *
 * @param product The product to add to the cart.
 * @returns A promise that resolves when the product is successfully added.
 */
export async function addToCart(product: Product): Promise<void> {
  // TODO: Implement this by calling an API.
  console.log(`Adding product to cart: ${product.name}`);
  await new Promise((resolve) => setTimeout(resolve, 500));
}

/**
 * Asynchronously removes a product from the cart.
 *
 * @param productId The ID of the product to remove from the cart.
 * @returns A promise that resolves when the product is successfully removed.
 */
export async function removeFromCart(productId: string): Promise<void> {
  // TODO: Implement this by calling an API.
  console.log(`Removing product from cart with ID: ${productId}`);
  await new Promise((resolve) => setTimeout(resolve, 500));
}

/**
 * Asynchronously retrieves all products in the cart.
 *
 * @returns A promise that resolves to an array of Product objects in the cart.
 */
export async function viewCart(): Promise<Product[]> {
  // TODO: Implement this by calling an API.
  console.log('Viewing cart');
  await new Promise((resolve) => setTimeout(resolve, 500));
  return [
    { id: '1', name: 'Sample Product' },
  ];
}
