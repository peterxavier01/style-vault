import { getProducts } from "@/libs/getProducts";

export async function GET() {
  try {
    const products = await getProducts();
    return Response.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response("Error fetching products from Sanity", { status: 500 });
  }
}
