import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/services/products";
import type { Product } from "@/store/products";

type UIProduct = {
  image: string;
  title: string;
  rating: number;
  reviews: number;
  price: string;
  originalPrice?: string;
  actionType: "buy" | "bid" | "offer";
};

export const useProducts = () => {
  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const actionTypes = ["buy", "bid", "offer"] as const;

  const mappedProducts: UIProduct[] = useMemo(
    () =>
      products.map((product, idx) => ({
        image:
          Array.isArray(product.files) && product.files.length > 0
            ? product.files[0]
            : "",
        title: product.itemName,
        rating: 5,
        reviews: 0,
        price:
          product.discountPrice && product.discountPrice !== product.basePrice
            ? `$${product.discountPrice}`
            : `$${product.basePrice}`,
        originalPrice:
          product.discountPrice && product.discountPrice !== product.basePrice
            ? `$${product.basePrice}`
            : undefined,
        actionType: actionTypes[idx % actionTypes.length],
      })),
    [products]
  );

  return {
    isLoading,
    products,
    mappedProducts,
  };
}
