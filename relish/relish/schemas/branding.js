export default {
  name: "branding",
  title: "Main Info",

  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      description:
        "This is the page where you update the main festival info. Changing the name does nothing, page names are set on each individual page.",
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
    {
      name: "tickets",
      title: "Ticket Sales Link",
      description: "Link to ticket website.",
      type: "string",
    },
    {
      name: "fbLink",
      title: "Facebook Link",
      description: "Link to social media sites.",
      type: "string",
    },
    {
      name: "instaLink",
      title: "Instagram Link",
      description: "Link to social media sites.",
      type: "string",
    },
  ],
};
