import { PRODUCT_CATEGORY_QUERYResult } from "@/sanity/sanity.types";

import { client } from "@/utils/client";
import { PRODUCT_CATEGORY_QUERY } from "@/utils/queries";

const options = { next: { revalidate: 60 } };

export async function getProductsByCategory(params: {
  slug: string;
}): Promise<PRODUCT_CATEGORY_QUERYResult> {
  try {
    const products: PRODUCT_CATEGORY_QUERYResult = await client.fetch(
      PRODUCT_CATEGORY_QUERY,
      params,
      options
    );

    if (!products) {
      throw new Error("Product not found");
    }

    return products;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error("Something went wrong");
  }
}
