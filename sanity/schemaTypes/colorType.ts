import { defineType, defineField } from "sanity";

export const colorType = defineType({
    name: "color",
    title: "Color",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string",
            validation: rule => rule.required()
        }),
        defineField({
            name: "hex",
            type: "string",
            title: "Hex Code",
            validation: rule => rule.required().regex(/^#([0-9A-F]{3}){1,2}$/i, {
                name: 'hex code',
                invert: false
            })
        })
    ]
})