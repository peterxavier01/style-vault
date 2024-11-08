import toast from "react-hot-toast";

import { client } from "@/utils/client";
import { PRODUCTS_QUERY } from "@/utils/queries";

const options = { next: { revalidate: 60 } };

export async function getProducts() {
  try {
    const products = await client.fetch(PRODUCTS_QUERY, {}, options);

    return products;
  } catch (error) {
    toast.error("Error fetching products");
    console.error("Error fetching products:", error);

    return [];
  }
}
