import { PostList } from "../components/PostList"
import { PageWrapper } from "../components/PageWrapper"
import { Section } from "../components/Section"

export default function PostsPage() {
  return (
    <PageWrapper>
      <main className="container max-w-4xl px-4">
        <Section title="All Posts">
          <PostList />
        </Section>
      </main>
    </PageWrapper>
  )
}