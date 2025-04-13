"use client";

import { Button } from "@/components/ui/button";
import { Product, getProducts } from "@/services/products";
import { removeFromCart, viewCart } from "@/services/cart";
import { useEffect, useState } from "react";

export function Cart() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items = await viewCart();
        setCartItems(items);
      } catch (error) {
        console.error("Failed to view cart:", error);
        alert("Failed to view cart.");
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveFromCart = async (productId: string) => {
    setLoading(true);
    try {
      await removeFromCart(productId);
      setCartItems(cartItems.filter((item) => item.id !== productId));
      alert(`Item removed from cart!`);
    } catch (error) {
      console.error("Failed to remove from cart:", error);
      alert("Failed to remove from cart.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading cart...</p>;
  }

  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <ul>
      {cartItems.map((item) => (
        <li key={item.id} className="flex items-center justify-between py-2">
          <span>{item.name}</span>
          <Button onClick={() => handleRemoveFromCart(item.id)} disabled={loading}>
            {loading ? "Removing..." : "Remove"}
          </Button>
        </li>
      ))}
    </ul>
  );
}
