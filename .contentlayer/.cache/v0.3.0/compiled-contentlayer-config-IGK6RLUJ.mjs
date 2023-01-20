// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var getSlug = (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "");
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    subtitle: {
      type: "string",
      description: "Information about the post",
      required: true
    },
    image: {
      type: "string",
      description: "Path to image header",
      required: false
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => getSlug(doc)
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post]
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-IGK6RLUJ.mjs.map
