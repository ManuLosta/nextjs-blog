import Link from "next/link"
import Image from 'next/image'
import { Post } from "contentlayer/generated"

export function PostCard(post: Post) {
  return (
    <div className="border border-slate-200 hover:border-slate-600 hover:shadow-lg hover:scale-105 rounded-lg transition-all p-4 shabow-slate-900">
      <Link href={`/posts/${post.slug}`}>
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
    </div>
  )
}