import Link from "next/link"
import Image from 'next/image'
import { Post } from "contentlayer/generated"

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.slug}`} className="border sm:hover:bg-slate-50 border-slate-300 sm:hover:border-slate-600 sm:hover:shadow-lg sm:hover:scale-105 rounded-lg transition-all p-4 shadow-slate-900">
      <div className="relative h-32 md:h-48 rounded-lg overflow-hidden mb-4">
        <Image src={post.image} fill={true} alt={post.title} style={{ objectFit: "cover" }} />
      </div>
      <p className="font-bold text-lg text-slate-800">{post.title}</p>
      <p className="text-slate-700">{post.subtitle}</p>
      <div className="flex gap-3 text-slate-800 font-semibold underline">
        {post.tags.map((tag: string) => (
          <p key={tag}>#{tag}</p>
        ))}
      </div>
    </Link>
  )
}