export default {
  name: "music",
  title: "Music",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the project",
      type: "string",
    },
    {
      name: "description",
      title: "description",
      type: "text",
    },
    {
      name: "linkToListen",
      title: "LinkToListen",
      type: "url",
    },
  ],
};
