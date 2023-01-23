import Link from "next/link";

export function Header() {
  return (
    <header className="w-full sticky z-50 top-0 backdrop-blur p-3 flex flex-col justify-center items-center bg-slate-100/80">
      <nav>
        <ul className="flex items-center gap-4 text-slate-700">
          <li className="p-2 rounded-lg hover:bg-slate-50 hover:font-semibold">
            <Link href="/">Home</Link>
          </li>
          <li className="p-2 rounded-lg hover:bg-slate-50 hover:font-semibold">
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}