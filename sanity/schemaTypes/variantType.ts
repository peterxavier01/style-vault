import { defineType, defineField } from "sanity";

export const variantType = defineType({
    name: "variant",
    title: "Variant",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string",
            validation: rule => rule.required()
        }),
        defineField({
            name: "price",
            type: "number",
            validation: rule => rule.required()
        }),
        defineField({
            name: "assets",
            type: "array",
            of: [{ type: "image" }]
        }),
        defineField({
            name: "stock",
            type: "number",
            validation: rule => rule.required().min(0)
        }),
        defineField({
            name: "size",
            type: "reference",
            to: [{ type: "size" }]
        }),
        defineField({
            name: "color",
            type: "reference",
            to: [{ type: "color" }]
        })
    ]
})