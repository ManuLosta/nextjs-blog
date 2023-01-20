import { PostList } from "../components/PostList";

export default function PostsPage() {
  return (
    <div className="gap-6">
      <h1 className="font-bold text-slate-800 text-2xl my-4">All Posts</h1>
      <PostList />
    </div>
  )
}