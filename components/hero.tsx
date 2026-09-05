'use client'

import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="ana-sayfa"
      className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pb-14 pt-24 sm:px-5 sm:pb-16 sm:pt-32 md:pt-36"
    >
      <div className="grid w-full items-center gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* Left: headline */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <span className="liquid-glass mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-kyellow sm:mb-6 sm:px-4 sm:text-xs sm:tracking-[0.25em]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-kred" />
            Cosplay & Etkinlik Organizasyonu
          </span>

          <h1 className="font-graff title-motion text-5xl leading-[0.82] text-white text-stroke-black drop-shadow-[0_6px_0_rgba(0,0,0,0.6)] sm:text-6xl md:text-8xl">
            <span className="block bg-gradient-to-br from-kred via-kpink to-kpurple bg-clip-text text-transparent [-webkit-text-stroke:3px_#000]">
              Sokakların
            </span>
            <span className="block bg-gradient-to-r from-kblue via-white to-kyellow bg-clip-text text-transparent [-webkit-text-stroke:3px_#000]">
              En Enerjik
            </span>
            <span className="block text-kyellow">Cosplay Etkinliği</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-sm font-bold text-foreground/75 sm:mt-6 sm:text-base lg:mx-0 lg:text-lg">
            Cosplay ruhunu, ikonik karakterleri ve dinamik sahne performanslarını
            buluşturan yılın en heyecan verici etkinliğine hoş geldin. Kostümünü
            giy, sahneye adım at ve bu unutulmaz atmosferin parçası ol!
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#etkinlikler"
              className="glass-sheen relative w-full overflow-hidden rounded-2xl border-[3px] border-black bg-kred px-5 py-3 text-sm font-black uppercase tracking-wide text-white shadow-[5px_5px_0_#000] transition-all hover:-translate-y-1 hover:shadow-[7px_7px_0_#000] active:translate-y-0.5 sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
            >
              Etkinlikleri Keşfet
            </a>
            <a
              href="#iletisim"
              className="glass-sheen relative w-full overflow-hidden rounded-2xl border-[3px] border-black bg-white/10 px-5 py-3 text-sm font-black uppercase tracking-wide text-white shadow-[5px_5px_0_#000] backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-kpurple/40 hover:shadow-[7px_7px_0_#000] active:translate-y-0.5 sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
            >
              Bize Katıl
            </a>
          </div>
        </div>

        {/* Right: mascot + spray can */}
        <div className="relative order-1 flex justify-center lg:order-2">
          <div className="liquid-glass absolute inset-5 rounded-[2rem] sm:inset-10 sm:rounded-[2.5rem]" />
          <div className="relative sm:animate-float">
            <div className="absolute -inset-6 -z-10 rounded-full bg-kred/30 blur-3xl" />
            <Image
              src="/images/kurara-mascot.png"
              alt="Kurara 27 sprey boya tutan graffiti tarzı uzaylı maskotu"
              width={430}
              height={560}
              priority
              className="relative w-[290px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] sm:w-[380px] lg:w-[430px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
