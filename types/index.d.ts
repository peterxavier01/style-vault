export interface Asset {
  id: string;
  url: string;
  description: string | null;
  is_image: boolean;
  filename: string;
  file_extension: string;
  image_dimensions: {
    width: number;
    height: number;
  };
  file_size?: number | undefined;
  meta: any;
  created_at: number;
  updated_at: number;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  products: number;
  created: number;
  meta: any;
  assets?: Asset[];
}

export type ProductCategory = {
  id: number;
  name: string;
  url: string;
};
