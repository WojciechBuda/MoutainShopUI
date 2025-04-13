"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@/services/products";
import { addToCart } from "@/services/cart";
import { useState } from "react";

interface AddToCartProps {
  product: Product;
}

export function AddToCart({ product }: AddToCartProps) {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      await addToCart(product);
      alert(`${product.name} added to cart!`);
    } catch (error) {
      console.error("Failed to add to cart:", error);
      alert(`Failed to add ${product.name} to cart.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handleAddToCart} disabled={loading}>
      {loading ? "Adding..." : "Add to Cart"}
    </Button>
  );
}
