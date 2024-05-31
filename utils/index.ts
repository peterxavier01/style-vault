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

// Steps for checkout process
export const steps = [
  { label: "Checkout Form" },
  { label: "Order Summary" },
  { label: "Order Confirmation" },
];

// Fisher-Yates Shuffle algorithm
export function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    // swap elements array[i] and array[j]
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
