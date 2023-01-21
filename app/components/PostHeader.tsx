import { Post } from "contentlayer/generated";
import { format, parseISO } from 'date-fns'
import Image from "next/image";

export function PostHeader(post: Post) {
  return (
    <div className="my-6 flex flex-col justify-center items-center text-center gap-4">
      <h1 className="text-4xl sm:text-6xl font-semibold text-slate-800">{post.title}</h1>
      <div className="relative w-full  h-52 sm:h-96 rounded-lg overflow-hidden my-2">
        <Image src={post.image} fill={true} alt={post.title} style={{ objectFit: "cover" }} />
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="text-slate-500">{format(parseISO(post.date), 'LLLL d, yyyy')}</p>
        <div className="flex gap-3 text-slate-800 font-semibold justify-center underline">
          {post.tags.map((tag: string) => (
            <p key={tag}>#{tag}</p>
          ))}
        </div>
      </div>
    </div>
  )
}