import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

const getPostsByDate = () => {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return posts

}

export default getPostsByDate