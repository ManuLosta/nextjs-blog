import { PostGrid } from "./components/PostGrid"

export default function Home() {
  return (
    <main>
      <h1 className="font-bold text-xl text-slate-800 my-4">Latest Posts</h1>
      <PostGrid />
    </main>
  )
}
