export default {
  name: "sponsor",
  title: "Sponsors",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      title: "Sponsor Logo",
      name: "sponsorLogo",
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
  ],
};
