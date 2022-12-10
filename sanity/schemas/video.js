export default {
  name: "video",
  title: "Video",
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
      name: "linkToView",
      title: "LinkToView",
      type: "url",
    },
  ],
};
