'use client'

import Image from 'next/image'
import { useState } from 'react'
import { TeamModal } from '@/components/team-modal'

const links = [
  { label: 'Ana Sayfa', href: '#ana-sayfa' },
  { label: 'Etkinlikler', href: '#etkinlikler' },
  { label: 'Detaylar', href: '#detaylar' },
  { label: 'Kurara Kim?', href: '#kurara-kim' },
  { label: 'Iletişim', href: '#iletisim' },
]

export function FloatingNav() {
  const [activeLink, setActiveLink] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  function handleNavigation(href: string) {
    setActiveLink(href)
    setMobileMenuOpen(false)
    window.setTimeout(() => setActiveLink(''), 650)
  }

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-2 pt-2 sm:px-5 sm:pt-3">
      <nav className="nav-graffiti relative flex w-full max-w-6xl items-center justify-between gap-2 overflow-visible rounded-2xl border-[3px] border-black px-2 py-2.5 shadow-[5px_5px_0_#000] sm:gap-4 sm:px-6 sm:py-3.5">
        <div className="pointer-events-none absolute -inset-x-2 -top-1.5 h-4 rounded-full bg-gradient-to-r from-kred via-kyellow via-kblue to-kpurple shadow-[0_0_18px_rgba(255,31,61,0.8)]" />
        <div className="pointer-events-none absolute inset-x-3 top-0 h-1.5 rounded-full bg-white/20 blur-[2px]" />
        <div className="nav-spray nav-spray--pink" />
        <div className="nav-spray nav-spray--blue" />
        <a href="#ana-sayfa" className="nav-logo relative z-10 block h-10 w-28 shrink-0 overflow-hidden sm:h-16 sm:w-52" aria-label="Kurara 27 ana sayfa">
          <Image
            src="/images/kurara-logo.png"
            alt="Kurara 27"
            width={1500}
            height={500}
            sizes="(min-width: 640px) 330px, 180px"
            className="absolute left-0 top-1/2 h-auto w-[180px] max-w-none -translate-y-1/2 sm:w-[330px]"
          />
        </a>

        <ul className="relative z-10 hidden items-center gap-1.5 rounded-xl border-2 border-black/60 bg-[#252052]/90 p-1.5 shadow-[3px_3px_0_rgba(0,0,0,0.5)] md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => handleNavigation(l.href)}
                className={`nav-link rounded-lg px-4 py-2.5 text-[0.9rem] font-black text-foreground/80 transition-all duration-200 hover:bg-kpink/80 hover:text-white md:text-[0.96rem] ${activeLink === l.href ? 'nav-link--active' : ''}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="relative z-10 flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label="Menü"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-lg border-2 border-black bg-white/10 px-3 py-2 text-[0.7rem] font-black uppercase tracking-[0.08em] text-white shadow-[2px_2px_0_#000] transition-transform hover:-translate-y-0.5 active:translate-y-0.5"
          >
            Menüler
          </button>
        </div>

        {mobileMenuOpen && (
          <ul className="absolute left-2 right-2 top-[calc(100%+0.6rem)] z-40 flex flex-col gap-2 rounded-2xl border-[3px] border-black bg-[#1a1633]/95 p-2 shadow-[5px_5px_0_#000] md:hidden">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => handleNavigation(l.href)}
                  className={`block rounded-xl border-2 border-black px-3 py-2.5 text-left text-sm font-black uppercase tracking-[0.08em] text-foreground/90 transition-colors ${activeLink === l.href ? 'bg-kpink/70 text-white' : 'bg-white/5 hover:bg-kpurple/30'}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
      </div>
      <TeamModal />
    </>
  )
}
