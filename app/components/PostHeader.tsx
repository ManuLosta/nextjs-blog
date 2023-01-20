import { Post } from "contentlayer/generated";
import { format, parseISO } from 'date-fns'

export function PostHeader(post: Post) {
  return (
    <div className="my-8 text-center">
      <h1 className="text-6xl font-semibold text-slate-800">{post.title}</h1>
      <p className="text-slate-500 mt-2">{format(parseISO(post.date), 'LLLL d, yyyy')}</p>
      <div className="flex gap-3 text-slate-800 font-semibold justify-center underline">
        {post.tags.map((tag: string) => (
          <p key={tag}>#{tag}</p>
        ))}
      </div>
    </div>
  )
}