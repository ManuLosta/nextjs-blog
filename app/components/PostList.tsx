import getPostsByDate from "@/utils/getPostsByDate"
import Link from "next/link"
import { format, parseISO } from 'date-fns'

export function PostList() {
  const posts = getPostsByDate()

  return (
    <>
      {posts.map(post => (
        <Link key={post.slug} href={`/posts/${post.slug}`} className="flex flex-row gap-3 justify-between mb-5 hover:underline transition-all">
          <div>
            <p className="font-semibold text-slate-800">{post.title}</p>
            <p className="text-slate-700">{post.subtitle}</p>
          </div>
          <div>
            <p>{format(parseISO(post.date), 'LLLL d, yyyy')}</p>
          </div>
        </Link>
      ))
      }
    </>
  )
}