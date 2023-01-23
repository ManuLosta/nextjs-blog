import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex items-center justify-center p-8 mt-2">
      <p className="font-semibold text-lg text-slate-800">Made by <Link href="https://github.com/ManuLosta" className="hover:underline font-bold">ManuLosta</Link></p>
    </footer>
  )
}