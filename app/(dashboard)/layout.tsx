import { UserButton } from "@clerk/nextjs"
import Link from "next/link"

const links = [
  { href: '/', label: 'Home'},
  { href: '/journal', label: 'Journal'},
  { href: '/history', label: 'History'},
]

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen relative">
      <aside className="absolute left-0 top-0 h-full w-[200px] border-r border-black/10">
        <div className=" px-2 py-6 text-2xl">
          Mood
        </div>
        <ul>
          {links.map(link => (
            <li key={link.href} className=" px-2 py-6 text-xl">
              <Link href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="ml-[200px] h-full w-[calc(100vw-200px)]">
        <header className="h-[60px] border-b border-black/10">
        <div className="flex items-center justify-end h-full p-5">
                <UserButton afterSignOutUrl="/" />
            </div>
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
