import { defineQuery } from "next-sanity";

export const PRODUCTS_QUERY = defineQuery(`*[_type == "product"]{
  _id, name, price, 
  "image": image.asset-> { _id, url }, 
  "permalink": permalink.current,
}`);

export const PRODUCT_QUERY =
  defineQuery(`*[_type == "product" && permalink.current == $slug]{
  _id, name, description, price, 
  "image": image.asset->{ _id, url }, 
  "permalink": permalink.current,
  gallery[]{ 
    asset-> { _id, url }
  },
  "categories": categories[]->{ _id, name },
  "relatedProducts": relatedProducts[]->{
    _id, name, description, price, 
    "image": image.asset->{ _id, url }, 
    "permalink": permalink.current,
    gallery[]{ 
      asset-> { _id, url }
    },
    "categories": categories[]->{ _id, name },
    "variants": variants[]->{
      _id,
      name,
      price,
      stock,
      "size": size->{
        _id, name
      },
      "color": color->{
        _id, name, hex
      },
      assets -> {_id, url}
    }
  },
  "variants": variants[]->{
    _id,
    name,
    price,
    stock,
    "size": size->{
      _id, name
    },
    "color": color->{
      _id, name, hex
    },
    assets -> {_id, url}
  }
}[0]`);

export const CATEGORY_QUERY = defineQuery(`*[_type=="category"]{
  _id, 
  name, 
  slug, 
  "image": image.asset->{_id, url},
  parentCategory -> {_id, name}
}`);

export const CATEGORY_BY_SLUG_QUERY =
  defineQuery(`*[_type == "category" && slug.current == $slug]{
  _id,
  name,
  slug,
  "image": image.asset-> { _id, url }
}[0]`);

export const PRODUCT_CATEGORY_QUERY =
  defineQuery(`*[_type == "product" && $slug in categories[]->slug.current]{
  _id, 
  name, 
  price, 
  "image": image.asset-> { _id, url },
  "permalink": permalink.current,
}`);
