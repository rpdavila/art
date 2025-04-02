import { navLinks } from "@/app/data/navLinks"
import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="flex flex-row justify-evenly bg-slate-100 w-full">
      <ul className="flex gap-4 text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={`/classroom/${link.href}`}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}