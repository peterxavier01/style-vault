import { defineType, defineField } from "sanity";

export const categoryType = defineType({
    name: "category",
    title: "Category",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: { source: "name", maxLength: 96 },
            validation: rule => rule.required()
        }),
        defineField({
            name: "parentCategory",
            type: "reference",
            to: [{ type: "category" }]
        }),
        defineField({
            name: "image",
            type: "image",
        })
    ]
})