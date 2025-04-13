import {AddToCart} from '@/components/add-to-cart';
import {Cart} from '@/components/cart';
import {Product, getProducts} from '@/services/products';

export default async function Home() {
  const products: Product[] = await getProducts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-md p-4">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <AddToCart product={product} />
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">Your Cart</h2>
      <Cart />
    </div>
  );
}
