export default {
  name: "branding",
  title: "Site Branding",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      description:
        "Please make this a .png, svg or webP format. Web ready formats preferred.",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
