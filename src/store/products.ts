import { create } from 'zustand';

export type Product = {
  name: string;
  slug: string;
  basePrice: number;
  discountPrice: number;
  details: string;
  images: string[];
  categories: string[];
  offers: string[];
  itemsInStock: number;
  isApproved: boolean;
  variants: {
    attributes: Record<string, string>;
    price: number;
    itemsInStock: number;
  }[];
};

type ProductStore = {
  products: Product[];
  setProducts: (products: Product[]) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));