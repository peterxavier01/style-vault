import { PRODUCT_QUERYResult as PRODUCT_QUERY_TYPE } from "@/sanity/sanity.types";

import { client } from "@/utils/client";
import { PRODUCT_QUERY } from "@/utils/queries";

const options = { next: { revalidate: 60 } };

export async function getProduct(params: {
  slug: string;
}): Promise<PRODUCT_QUERY_TYPE> {
  try {
    const product: PRODUCT_QUERY_TYPE = await client.fetch(
      PRODUCT_QUERY,
      params,
      options
    );

    if (!product) {
      throw new Error("Product not found");
    }

    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error("Something went wrong");
  }
}
