import { Repo } from "@/typing"
import { GoMarkGithub } from "react-icons/go"
import { AiOutlineStar } from "react-icons/ai"
import Link from "next/link"
import { format, parseISO } from 'date-fns'

export function RepoCard({ repo }: { repo: Repo }) {
  return (
    <Link href={repo.html_url} className="border sm:hover:bg-slate-50 border-slate-300 sm:hover:border-slate-600 sm:hover:shadow-lg sm:hover:scale-105 rounded-lg transition-all p-4 shadow-slate-900 flex justify-between flex-col">
      <div className="flex items-center gap-2">
        <GoMarkGithub className="fill-slate-800" />
        <p className="text-slate-800 text-lg font-semibold">{repo.name}</p>
      </div>
      <p className="text-slate-700">{repo.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <p className="underline mr-2">#{repo.language}</p>
          <AiOutlineStar className="fill-slate-800" />
          <p>{repo.stargazers_count}</p>
        </div>
        <p className="text-slate-600">{format(parseISO(repo.updated_at), 'LLL d, yy')}</p>
      </div>
    </Link>
  )
}