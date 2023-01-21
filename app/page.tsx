import { PostGrid } from "./components/PostGrid"
import { PageWrapper } from "./components/PageWrapper"

export default function Home() {
  return (
    <PageWrapper>
      <main className="container max-w-4xl px-4">
        <h1 className="font-bold text-2xl text-slate-800 my-4">Latest Posts</h1>
        <PostGrid />
      </main>
    </PageWrapper>
  )
}
