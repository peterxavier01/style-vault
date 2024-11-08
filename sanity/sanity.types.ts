/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch'
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: 'sanity.imagePalette'
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions'
  height?: number
  width?: number
  aspectRatio?: number
}

export type SanityFileAsset = {
  _id: string
  _type: 'sanity.fileAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type Geopoint = {
  _type: 'geopoint'
  lat?: number
  lng?: number
  alt?: number
}

export type Category = {
  _id: string
  _type: 'category'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  parentCategory?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'category'
  }
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
}

export type Variant = {
  _id: string
  _type: 'variant'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  price?: number
  assets?: Array<{
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
    _key: string
  }>
  stock?: number
  size?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'size'
  }
  color?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'color'
  }
}

export type Color = {
  _id: string
  _type: 'color'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  hex?: string
}

export type Size = {
  _id: string
  _type: 'size'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
}

export type Product = {
  _id: string
  _type: 'product'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  description?: string
  price?: number
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  permalink?: Slug
  gallery?: Array<{
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
    _key: string
  }>
  categories?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'category'
  }>
  relatedProducts?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'product'
  }>
  variants?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'variant'
  }>
}

export type Slug = {
  _type: 'slug'
  current?: string
  source?: string
}

export type SanityImageCrop = {
  _type: 'sanity.imageCrop'
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot'
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: 'sanity.imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData'
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata'
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Category
  | Variant
  | Color
  | Size
  | Product
  | Slug
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
export declare const internalGroqTypeReferenceTo: unique symbol
// Source: ../utils/queries.ts
// Variable: PRODUCTS_QUERY
// Query: *[_type == "product"]{  _id, name, price,   "image": image.asset-> { _id, url },   "permalink": permalink.current,}
export type PRODUCTS_QUERYResult = Array<{
  _id: string
  name: string | null
  price: number | null
  image: {
    _id: string
    url: string | null
  } | null
  permalink: string | null
}>
// Variable: PRODUCT_QUERY
// Query: *[_type == "product" && permalink.current == $slug]{  _id, name, description, price,   "image": image.asset->{ _id, url },   "permalink": permalink.current,  gallery[]{     asset-> { _id, url }  },  "categories": categories[]->{ _id, name },  "relatedProducts": relatedProducts[]->{    _id, name, description, price,     "image": image.asset->{ _id, url },     "permalink": permalink.current,    gallery[]{       asset-> { _id, url }    },    "categories": categories[]->{ _id, name },    "variants": variants[]->{      _id,      name,      price,      stock,      "size": size->{        _id, name      },      "color": color->{        _id, name, hex      },      assets -> {_id, url}    }  },  "variants": variants[]->{    _id,    name,    price,    stock,    "size": size->{      _id, name    },    "color": color->{      _id, name, hex    },    assets -> {_id, url}  }}[0]
export type PRODUCT_QUERYResult = {
  _id: string
  name: string | null
  description: string | null
  price: number | null
  image: {
    _id: string
    url: string | null
  } | null
  permalink: string | null
  gallery: Array<{
    asset: {
      _id: string
      url: string | null
    } | null
  }> | null
  categories: Array<{
    _id: string
    name: string | null
  }> | null
  relatedProducts: Array<{
    _id: string
    name: string | null
    description: string | null
    price: number | null
    image: {
      _id: string
      url: string | null
    } | null
    permalink: string | null
    gallery: Array<{
      asset: {
        _id: string
        url: string | null
      } | null
    }> | null
    categories: Array<{
      _id: string
      name: string | null
    }> | null
    variants: Array<{
      _id: string
      name: string | null
      price: number | null
      stock: number | null
      size: {
        _id: string
        name: string | null
      } | null
      color: {
        _id: string
        name: string | null
        hex: string | null
      } | null
      assets: null
    }> | null
  }> | null
  variants: Array<{
    _id: string
    name: string | null
    price: number | null
    stock: number | null
    size: {
      _id: string
      name: string | null
    } | null
    color: {
      _id: string
      name: string | null
      hex: string | null
    } | null
    assets: null
  }> | null
} | null
// Variable: CATEGORY_QUERY
// Query: *[_type=="category"]{  _id,   name,   slug,   "image": image.asset->{_id, url},  parentCategory -> {_id, name}}
export type CATEGORY_QUERYResult = Array<{
  _id: string
  name: string | null
  slug: Slug | null
  image: {
    _id: string
    url: string | null
  } | null
  parentCategory: {
    _id: string
    name: string | null
  } | null
}>
// Variable: CATEGORY_BY_SLUG_QUERY
// Query: *[_type == "category" && slug.current == $slug]{  _id,  name,  slug,  "image": image.asset-> { _id, url }}[0]
export type CATEGORY_BY_SLUG_QUERYResult = {
  _id: string
  name: string | null
  slug: Slug | null
  image: {
    _id: string
    url: string | null
  } | null
} | null
// Variable: PRODUCT_CATEGORY_QUERY
// Query: *[_type == "product" && $slug in categories[]->slug.current]{  _id,   name,   price,   "image": image.asset-> { _id, url },  "permalink": permalink.current,}
export type PRODUCT_CATEGORY_QUERYResult = Array<{
  _id: string
  name: string | null
  price: number | null
  image: {
    _id: string
    url: string | null
  } | null
  permalink: string | null
}>

// Query TypeMap
import '@sanity/client'
declare module '@sanity/client' {
  interface SanityQueries {
    '*[_type == "product"]{\n  _id, name, price, \n  "image": image.asset-> { _id, url }, \n  "permalink": permalink.current,\n}': PRODUCTS_QUERYResult
    '*[_type == "product" && permalink.current == $slug]{\n  _id, name, description, price, \n  "image": image.asset->{ _id, url }, \n  "permalink": permalink.current,\n  gallery[]{ \n    asset-> { _id, url }\n  },\n  "categories": categories[]->{ _id, name },\n  "relatedProducts": relatedProducts[]->{\n    _id, name, description, price, \n    "image": image.asset->{ _id, url }, \n    "permalink": permalink.current,\n    gallery[]{ \n      asset-> { _id, url }\n    },\n    "categories": categories[]->{ _id, name },\n    "variants": variants[]->{\n      _id,\n      name,\n      price,\n      stock,\n      "size": size->{\n        _id, name\n      },\n      "color": color->{\n        _id, name, hex\n      },\n      assets -> {_id, url}\n    }\n  },\n  "variants": variants[]->{\n    _id,\n    name,\n    price,\n    stock,\n    "size": size->{\n      _id, name\n    },\n    "color": color->{\n      _id, name, hex\n    },\n    assets -> {_id, url}\n  }\n}[0]': PRODUCT_QUERYResult
    '*[_type=="category"]{\n  _id, \n  name, \n  slug, \n  "image": image.asset->{_id, url},\n  parentCategory -> {_id, name}\n}': CATEGORY_QUERYResult
    '*[_type == "category" && slug.current == $slug]{\n  _id,\n  name,\n  slug,\n  "image": image.asset-> { _id, url }\n}[0]': CATEGORY_BY_SLUG_QUERYResult
    '*[_type == "product" && $slug in categories[]->slug.current]{\n  _id, \n  name, \n  price, \n  "image": image.asset-> { _id, url },\n  "permalink": permalink.current,\n}': PRODUCT_CATEGORY_QUERYResult
  }
}
