import toast from "react-hot-toast";

import { client } from "@/utils/client";
import { CATEGORY_QUERY } from "@/utils/queries";

const options = { next: { revalidate: 60 } };

export async function getCategories() {
  try {
    const categories = await client.fetch(CATEGORY_QUERY, {}, options);

    return categories;
  } catch (error) {
    toast.error("Error fetching categories");
    console.error("Error fetching categories:", error);

    return [];
  }
}
