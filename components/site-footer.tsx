import { Mail, MapPin } from 'lucide-react'
import Image from 'next/image'

type IconProps = { className?: string }

function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  )
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

const socials = [
  { label: 'YouTube', href: 'https://www.youtube.com/@kuraraagency', Icon: YoutubeIcon, color: 'hover:text-kred' },
  { label: 'Instagram', href: 'https://www.instagram.com/kurara.media/', Icon: InstagramIcon, color: 'hover:text-kpink' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/kurara-ageny/', Icon: LinkedinIcon, color: 'hover:text-kblue' },
]

export function SiteFooter() {
  return (
    <footer className="relative z-10 px-4 pb-8 pt-6 sm:px-5 sm:pb-10 sm:pt-8">
      <div className="liquid-glass mx-auto max-w-6xl rounded-none border-[3px] border-black p-5 shadow-[7px_7px_0_#000] sm:p-10">
        <div className="grid gap-7 text-center md:grid-cols-3 md:items-center md:text-left">
          {/* Brand */}
          <div>
            <div className="relative mx-auto h-14 w-[150px] overflow-hidden sm:h-20 sm:w-[205px] md:mx-0" aria-label="Kurara">
              <Image
                src="/images/kurara-logo.png"
                alt="Kurara 27"
                width={1472}
                height={512}
                className="absolute left-0 top-1/2 h-auto w-[240px] max-w-none -translate-y-1/2 sm:w-[330px]"
              />
            </div>
            <p className="mt-3 max-w-xs text-sm text-foreground/70 md:max-w-none">
              Cosplay ve etkinlik organizasyonunda sokak sanatının asi ruhu.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3 md:justify-self-center">
            <a
              href="mailto:kuraraagency@gmail.com"
              className="flex items-center justify-center gap-3 text-sm font-semibold text-foreground/80 transition-colors hover:text-kyellow md:justify-start"
            >
              <Mail className="h-4 w-4 text-kred" />
              kuraraagency@gmail.com
            </a>
            <p className="flex items-center justify-center gap-3 text-sm font-semibold text-foreground/80 md:justify-start">
              <MapPin className="h-4 w-4 text-kblue" />
              İstanbul, Türkiye
            </p>
          </div>

          {/* Socials */}
          <div className="flex flex-wrap justify-center gap-3 md:justify-self-end">
            {socials.map(({ label, href, Icon, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className={`liquid-glass glass-sheen group grid h-11 w-11 place-items-center rounded-lg border-2 border-black text-foreground/80 shadow-[3px_3px_0_#000] transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-[0_0_12px_rgba(255,31,61,0.7)] ${color}`}
              >
                <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-[0.62rem] font-semibold uppercase tracking-wider text-foreground/50 sm:text-xs">
          © 2026 Kurara 27 — Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
}
