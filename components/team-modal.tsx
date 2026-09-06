'use client'

import Image from 'next/image'
import { Users, X } from 'lucide-react'
import { useEffect, useState } from 'react'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

const teamMembers = [
  {
    name: 'Nurullah Demir',
    role: 'FOUNDER & CTO',
    handle: '@pharmusss',
    instagram: 'https://www.instagram.com/pharmusss/',
    linkedin: 'https://www.linkedin.com/in/nurullah-demir-b340a0395/',
    photo: '/images/nurullahdemir.jpeg',
    accent: 'from-kred to-kpink',
  },
  {
    name: 'Deniz Akdeniz',
    role: 'COMMUNITY & OPERATIONS MANAGER',
    handle: '@denizakdeniz28',
    instagram: 'https://www.instagram.com/denizakdeniz28/',
    photo: '/images/denizkadeniz.jpeg',
    accent: 'from-kpurple to-kblue',
  },
  {
    name: 'Ezgi Ela Öztem',
    role: 'ART DIRECTOR',
    handle: '@tuylukek',
    instagram: 'https://www.instagram.com/tuylukek/',
    photo: '/images/ezgi.png',
    accent: 'from-kyellow to-kred',
  },
  {
    name: 'Yakup Parlak',
    role: 'SYSTEMS & HARDWARE LEAD',
    handle: '@tenguu_cos',
    instagram: 'https://www.instagram.com/tenguu_cos/',
    photo: '/images/yakupinsan.jpg',
    photoPosition: '50% 35%',
    accent: 'from-kblue to-kpurple',
  },
  {
    name: 'Mehmet Efe Gençer',
    role: 'VIDEO EDITOR & MOTION DESIGNER',
    handle: '@mehmetefegencr',
    instagram: 'https://www.instagram.com/mehmetefegencr/',
    photo: '/images/mehmetefegençer.webp',
    photoPosition: '50% 28%',
    accent: 'from-kpink to-kred',
  },
]

export function TeamModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-4 top-20 z-50 flex -rotate-3 items-center gap-2 rounded-xl border-[3px] border-black bg-gradient-to-r from-kyellow to-kpink px-3 py-2.5 text-left text-ink shadow-[5px_5px_0_#000] transition-transform hover:rotate-0 hover:-translate-y-1 active:translate-y-0.5 sm:right-8 sm:top-28 sm:px-4 sm:py-3"
        aria-haspopup="dialog"
        aria-label="Kurara ekibini görüntüle"
      >
          <span className="grid h-8 w-8 place-items-center rounded-lg border-2 border-black bg-kpurple text-white shadow-[2px_2px_0_#000] sm:h-9 sm:w-9">
          <Users className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={3} />
        </span>
        <span>
          <span className="block font-graff text-base leading-none sm:text-lg">EKIP</span>
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] grid min-h-dvh place-items-center overflow-y-auto bg-black/75 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="team-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false)
          }}
        >
          <div className="relative w-full max-w-5xl rounded-[2rem] border-[3px] border-black bg-[#191633] p-4 shadow-[8px_8px_0_#000] sm:p-7">
            <div className="mb-5 flex items-start justify-between gap-4 sm:mb-7">
              <div>
                <span className="font-graff text-sm text-kyellow text-stroke-black sm:text-base">KURARA EKIBI</span>
                <h2 id="team-modal-title" className="font-graff text-3xl leading-none text-white text-stroke-black sm:text-5xl">
                  Bu enerjinin arkasındaki ekip
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border-2 border-black bg-kred text-white shadow-[3px_3px_0_#000] transition-transform hover:-rotate-6 hover:-translate-y-0.5"
                aria-label="Ekip penceresini kapat"
              >
                <X className="h-5 w-5" strokeWidth={3} />
              </button>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScQXmDbKUqxfXw5n2KqT8avqSuQCMm_uJvNsnSELfyG_rZZ8Q/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              className="mb-5 inline-flex items-center gap-2 rounded-lg border-2 border-black bg-kyellow px-3 py-2 text-xs font-black uppercase tracking-[0.06em] text-ink shadow-[3px_3px_0_#000] transition-transform hover:-translate-y-0.5 active:translate-y-0.5 sm:mb-6"
            >
              <span className="grid h-5 w-5 place-items-center rounded-md border-2 border-black bg-kpink text-sm leading-none text-white">
                +
              </span>
              EKIBE KATIL
            </a>

            <div className="grid gap-4 md:grid-cols-3">
              {teamMembers.map((member) => (
                <article key={member.name} className="group overflow-hidden rounded-2xl border-[3px] border-black bg-white/10 shadow-[4px_4px_0_#000] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[6px_7px_0_#000]">
                  <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${member.accent}`}>
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={`${member.name} ekip üyesi fotoğrafı`}
                        fill
                        sizes="(min-width: 768px) 30vw, 90vw"
                        quality={95}
                        className="object-cover"
                        style={{ objectPosition: member.photoPosition ?? '50% 50%' }}
                      />
                    ) : (
                      <div className="absolute inset-0 grid place-items-center bg-[linear-gradient(135deg,rgba(47,182,255,0.85),rgba(123,47,247,0.9))] p-6 text-center">
                        <div className="rotate-[-4deg] border-[3px] border-black bg-white px-4 py-3 text-ink shadow-[4px_4px_0_#000]">
                          <span className="block font-graff text-2xl leading-none">PHOTO</span>
                          <span className="mt-1 block text-[0.6rem] font-black uppercase tracking-[0.14em]">PENDING</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-graff text-xl text-white text-stroke-black">{member.name}</h3>
                    <p className="mt-2 inline-flex -rotate-2 items-center border-2 border-black bg-gradient-to-r from-kred via-kpink to-kpurple px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-[0.08em] text-white shadow-[3px_3px_0_#000]">
                      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-kyellow shadow-[1px_1px_0_#000]" />
                      {member.role}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-white/75 transition-colors hover:text-kpink"
                      >
                        <InstagramIcon className="h-4 w-4 text-kpink" />
                        {member.handle}
                      </a>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${member.name} LinkedIn profili`}
                          className="flex items-center gap-2 text-sm font-bold text-white/75 transition-colors hover:text-kblue"
                        >
                          <LinkedinIcon className="h-4 w-4 text-kblue" />
                          {member.name}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </div>
      )}
    </>
  )
}
