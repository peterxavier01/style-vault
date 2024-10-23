import { defineType, defineField } from "sanity";

export const sizeType = defineType({
    name: "size",
    title: "Size",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string",
            validation: rule => rule.required()
        })
    ]
})