import { PostList } from "../components/PostList"
import { PageWrapper } from "../components/PageWrapper"

export default function PostsPage() {
  return (
    <PageWrapper>
      <main className="container max-w-4xl px-4">
        <h1 className="font-bold text-slate-800 text-2xl my-4">All Posts</h1>
        <PostList />
      </main>
    </PageWrapper>
  )
}