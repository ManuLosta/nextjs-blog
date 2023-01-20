import { PostCard } from "./PostCard"
import getPostsByDate from "@/utils/getPostsByDate"

export function PostGrid() {
  const posts = getPostsByDate().slice(0, 3)

  return (
    <div className=" gap-6 grid md:grid-cols-2">
      {posts.map(post =>
        <PostCard key={post.slug} {...post} />
      )}
    </div>
  )
}