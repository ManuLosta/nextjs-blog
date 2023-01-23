import { PostCard } from "./PostCard"
import getPostsByDate from "@/utils/getPostsByDate"

export function PostGrid() {
  const posts = getPostsByDate().slice(0, 4)

  return (
    <div className="gap-4 sm:gap-10 grid md:grid-cols-2">
      {posts.map(post =>
        <PostCard key={post.slug} post={post} />
      )}
    </div>
  )
}