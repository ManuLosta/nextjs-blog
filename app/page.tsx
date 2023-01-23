import { PostGrid } from "./components/PostGrid"
import { RepoList } from "./components/RepoList"
import { PageWrapper } from "./components/PageWrapper"
import { Section } from "./components/Section"

export default function Home() {
  return (
    <PageWrapper>
      <main className="container max-w-4xl px-4">
        <h1 className="font-bold text-4xl text-slate-800">I&apos;m Manuel Lostaló,</h1>
        <p className="text-slate-700 text-lg">Frontend developer</p>
        <Section title="Latest Posts">
          <PostGrid />
        </Section>
        <Section title="Repos">
          {/* @ts-expect-error Server Component */}
          <RepoList />
        </Section>
      </main>
    </PageWrapper>
  )
}
