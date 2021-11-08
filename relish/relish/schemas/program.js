export default {
  name: "program",
  title: "Program Items",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      title: "Program Item",
      name: "progItem",
      description:
        "To set the order the program items appear in, click on order documents in the admin bar.",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "alt",
          type: "string",
          description:
            "This is for SEO, just add the name of the company and what it is, e.g Visit Fraser Coast Logo",
          title: "Alt Tag",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },

        {
          // Editing this field will be hidden behind an "Edit"-button
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    },

    {
      title: "Info ",
      name: "info",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
