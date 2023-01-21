import { PageWrapper } from "@/app/components/PageWrapper"
import { PostHeader } from "@/app/components/PostHeader"
import getPost from "@/utils/getPost"
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from "next/link"

export default function PostPage({ params }: any) {
  const post = getPost(params.slug)
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <PageWrapper>
      <main className="container max-w-3xl px-4">
        <PostHeader {...post} />
        <article className="prose lg:prose-lg prose-slate max-w-none ">
          <MDXContent />
        </article>
        <div className="pt-4">
          <Link href="/posts" className="hover:underline">Back to posts</Link>
        </div>
      </main>
    </PageWrapper>
  )
}