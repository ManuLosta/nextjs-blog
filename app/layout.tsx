import { Header } from './components/Header'
import './globals.css'
import 'katex/dist/katex.min.css'
import { Space_Grotesk } from '@next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-slate-100 container max-w-4xl px-4">
        <Header />
        {children}
      </body>
    </html >
  )
}
