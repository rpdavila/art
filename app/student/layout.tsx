export default function StudentLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full">{children}</main>
  )
}