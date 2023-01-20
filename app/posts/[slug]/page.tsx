import { PostHeader } from "@/app/components/PostHeader"
import getPost from "@/utils/getPost"
import { useMDXComponent } from 'next-contentlayer/hooks'

export default function PostPage({ params }: any) {
  const post = getPost(params.slug)
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div>
      <PostHeader {...post} />
      <article className="prose lg:prose-lg prose-slate mx-auto">
        <MDXContent />
      </article>
    </div>
  )
}