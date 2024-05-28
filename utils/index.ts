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

// Remove hyphen from string
export function removeHyphen(str: string) {
  return str.replace(/-/g, "");
}

// Get courrency subunit
const currencySubunits: Record<string, number> = {
  USD: 100, // cents
  EUR: 100, // cents
  GBP: 100, // pence
  JPY: 1, // yen
  NGN: 100, // kobo
};

export function convertToSubunit(amount: number, currency: string) {
  const subunit = currencySubunits[currency];
  if (subunit === undefined) {
    throw new Error(`Unsupported currency: ${currency}`);
  }
  return amount * subunit;
}

export const steps = [
  { label: "Checkout Form" },
  { label: "Order Summary" },
  { label: "Order Confirmation" },
];
