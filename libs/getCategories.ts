import toast from "react-hot-toast";

import { client } from '@/utils/client';

const options = { next: { revalidate: 60 } };

const CATEGORY_QUERY = `*[_type=="category"]`;

export async function getCategories() {
  try {
    const categories = await client.fetch(CATEGORY_QUERY, {}, options);

    return categories;
  } catch (error) {
    toast.error("Error fetching categories");
    console.error('Error fetching categories:', error);
    
    return [];
  }
}
