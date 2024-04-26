import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const menCategories = [
  { id: 1, name: "Shirts", url: "mens-shirts" },
  { id: 2, name: "Shoes", url: "mens-shoes" },
  { id: 3, name: "Accessories", url: "mens-accessories" },
];

export const womenCategories = [
  { id: 1, name: "Shirts", url: "womens-shirts" },
  { id: 2, name: "Shoes", url: "womens-shoes" },
  { id: 3, name: "Accessories", url: "womens-accessories" },
];

export const kidCategories = [
  { id: 1, name: "Shirts", url: "kids-shirts" },
  { id: 2, name: "Shoes", url: "kids-shoes" },
  { id: 3, name: "Accessories", url: "kids-accessories" },
];
