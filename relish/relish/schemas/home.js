import { arrayOf } from "prop-types";

export default {
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      description: "Do not leave this blank, crucial for SEO",
      type: "string",
    },
    {
      name: "meta",
      title: "meta description",
      description:
        "Do not leave this blank, crucial for SEO, between 50–160 characters",
      type: "text",
      validation: (Rule) =>
        Rule.max(150).warning(
          "Longer meta descare usually shortened by Google - try and make it shorter"
        ),
    },
    {
      name: "heading",
      title: "Main Heading",
      type: "string",
    },
    {
      title: "About ",
      name: "text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Promo Slider",
      name: "sliderItem",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Promo Item Name",
              name: "prome_name",
              type: "string",
            },
            {
              title: "Promo Item Image",
              name: "promo_image",
              type: "image",
            },
            {
              title: "Page Link",
              name: "promo_link",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
