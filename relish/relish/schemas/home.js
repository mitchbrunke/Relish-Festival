import { arrayOf } from "prop-types";

export default {
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      description:
        "Do not leave this blank, crucial for SEO. Shows on Google but not on the page",
      type: "string",
    },
    {
      name: "meta",
      title: "meta description",
      description:
        "Do not leave this blank, crucial for SEO, between 50–160 characters. Shows on Google but not on the page",
      type: "text",
      validation: (Rule) =>
        Rule.max(150).warning(
          "Longer meta descare usually shortened by Google - try and make it shorter"
        ),
    },
    {
      name: "heading",
      title: "Main Heading",
      description: "Heading you see in the hero section.",
      type: "string",
    },
    {
      title: "About ",
      name: "text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Program Slider",
      name: "sliderItem",
      description: "Add in as many as you like.",
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
              description:
                "If this is to the relish website just add in /pagename. e.g If you want to link to the program page it will be /program. If it is to an external site, it will be https://website.com/",
              name: "promo_link",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
