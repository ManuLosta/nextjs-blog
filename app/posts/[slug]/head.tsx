import getPost from "@/utils/getPost"

export default function PostHead({ params }: any) {
  const post = getPost(params.slug)
  return (
    <>
      <title>{post.title}</title>
    </>
  )
}