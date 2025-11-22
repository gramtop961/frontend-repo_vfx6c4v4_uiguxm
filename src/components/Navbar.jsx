import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#features', label: 'Features' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#industries', label: 'Industries' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            {/* Brand */}
            <a href="#home" className="group inline-flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 p-[2px]">
                <div className="h-full w-full rounded-md bg-slate-950" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-white group-hover:text-emerald-300 transition-colors">HyperScale</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 text-sm text-slate-200/80 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 font-medium text-slate-900 hover:bg-emerald-400 transition-colors">
                Book a demo
              </a>
            </nav>

            {/* Mobile toggle */}
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-4 sm:px-6">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="text-slate-200/80 hover:text-white transition-colors" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 font-medium text-slate-900 hover:bg-emerald-400 transition-colors" onClick={() => setOpen(false)}>
                  Book a demo
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
