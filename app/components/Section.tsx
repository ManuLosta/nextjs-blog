export function Section({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <section className="mt-4 mb-8">
      {title && (
        <h1 className="font-bold text-2xl text-slate-800 my-3">{title}</h1>
      )}
      {children}
    </section>
  )
}