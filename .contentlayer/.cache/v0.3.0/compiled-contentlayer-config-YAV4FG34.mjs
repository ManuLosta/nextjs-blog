// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
var getSlug = (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "");
var highlightOptions = {
  theme: "one-dark-pro",
  keepBackground: false
};
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
      required: true
    },
    tags: {
      type: "list",
      description: "Related tags",
      required: true
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
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, highlightOptions], rehypeKatex],
    remarkPlugins: [remarkGfm, remarkMath]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-YAV4FG34.mjs.map
