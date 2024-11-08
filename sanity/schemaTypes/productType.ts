import {defineType, defineField} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required().error(`This field is required`),
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      type: 'number',
      validation: (rule) => rule.required().error('This field is required').min(0),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required().error('This field is required'),
    }),
    defineField({
      name: 'permalink',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
          weak: true,
        },
      ],
    }),
    defineField({
      name: 'relatedProducts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}],
          weak: true,
        },
      ],
    }),
    defineField({
      name: 'variants',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'variant'}],
          weak: true,
        },
      ],
    }),
  ],
})
