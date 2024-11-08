import { CATEGORY_BY_SLUG_QUERYResult } from "@/sanity/sanity.types";

import { client } from "@/utils/client";
import { CATEGORY_BY_SLUG_QUERY } from "@/utils/queries";

const options = { next: { revalidate: 60 } };

export async function getCategoryBySlug(params: {
  slug: string;
}): Promise<CATEGORY_BY_SLUG_QUERYResult> {
  try {
    const category: CATEGORY_BY_SLUG_QUERYResult = await client.fetch(
      CATEGORY_BY_SLUG_QUERY,
      params,
      options
    );

    if (!category) {
      throw new Error("Category not found");
    }

    return category;
  } catch (error) {
    console.error("Error fetching category:", error);
    throw new Error("Something went wrong");
  }
}
