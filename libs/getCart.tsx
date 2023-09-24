export default async function getCart() {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const result = await response.json();
    return result;
}
  