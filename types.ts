export interface Product {
  id: string;
  name: string;
  price: {
    formatted?: string;
    formatted_with_symbol: string;
  };
  description: string;
  image: Asset | null;
  category?: string;
}

interface Asset {
  url: string;
}
