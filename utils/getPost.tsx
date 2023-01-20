import { allPosts, Post } from "contentlayer/generated"

const getPost = (slug: string): Post => {
  const post: Post = allPosts.find((post) => post._raw.flattenedPath === slug) ?? allPosts[0]
  return post
}

export default getPost