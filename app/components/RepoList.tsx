import { Repo } from "@/typing"
import { RepoCard } from "./RepoCard"

const fetchRepos = async () => {
  const res = await fetch('https://api.github.com/users/ManuLosta/repos', {
    headers: {
      'Authorization': `token ${process.env.GITHUB_TOKEN}`
    },
    next: { revalidate: 60 },
  })
  const data = await res.json()
  return data
}

export async function RepoList() {
  const repos = await fetchRepos()

  return (
    <div className="grid gap-5  sm:grid-cols-2">
      {repos.map((repo: Repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  )
}