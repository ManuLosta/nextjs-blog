import getPostsByDate from "@/utils/getPostsByDate"
import Link from "next/link"
import { format, parseISO } from 'date-fns'

export function PostList() {
  const posts = getPostsByDate()

  return (
    <>
      {
        posts.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`} className="border p-4 sm:hover:bg-slate-50 border-slate-300 sm:hover:border-slate-600 sm:hover:shadow-lg sm:hover:scale-105 rounded-lg t flex flex-col sm:flex-row gap-3 justify-between mb-5 transition-all">
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