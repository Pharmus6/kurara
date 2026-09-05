import Image from 'next/image'

export function WhoAreWe() {
  return (
    <section
      id="kurara-kim"
      className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-5 sm:py-28"
    >
      <div className="mb-8 text-center sm:mb-10">
        <h2 className="font-graff title-motion text-4xl text-white text-stroke-black sm:text-7xl">
          <span className="text-kred">Kurara</span> Kim?
        </h2>
      </div>

      <article className="relative overflow-hidden rounded-[2rem] border-[3px] border-black bg-gradient-to-br from-kred via-kpink to-kblue p-1 shadow-[7px_7px_0_#000]">
        <div className="relative grid items-stretch gap-5 overflow-hidden rounded-[1.7rem] bg-[#191633]/95 p-5 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8 lg:p-10">
          <div className="relative flex min-h-[14rem] items-center justify-center overflow-hidden rounded-[1.5rem] border-2 border-white/10 bg-gradient-to-br from-kpurple/80 via-[#322271] to-kblue/50 p-5 sm:min-h-[18rem] sm:p-8">
            <div className="absolute -inset-4 rounded-full bg-kpink/20 blur-2xl" />
            <Image
              src="/images/kurara-logo.png"
              alt="Kurara 27 graffiti logosu ve uzaylı maskotu"
              width={620}
              height={220}
              className="relative w-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            />
          </div>

          <div className="relative flex flex-col justify-center px-1 py-2 sm:px-2">
            <span className="mb-4 font-mono text-[0.62rem] font-bold uppercase tracking-[0.2em] text-kblue">
              BIRLIKTE URETIYORUZ
            </span>
            <p className="border-l-4 border-kred pl-4 text-xl font-bold leading-tight text-white sm:text-3xl">
              Biz, <span className="text-kpink">cosplay</span> ve pop kültürünü
              gerçeğe dönüştürmek için bir araya gelmiş bir ekibiz.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
              Asıl derdimiz; bugüne kadar ziyaret ettiğiniz etkinliklerin dışına
              çıkıp size çok daha farklı, kaliteli ve eğlenceli bir deneyim
              yaşatmak. Tabii bunu tek başımıza yapamayız; bu yolda gerçekten
              başarılı olabilmemiz için sizin enerjinize ve desteğinize
              ihtiyacımız var.
            </p>
            <p className="mt-6 inline-flex w-fit -rotate-1 border-2 border-black bg-kyellow px-3 py-2 font-graff text-xl text-ink shadow-[4px_4px_0_#000] sm:text-2xl">
              Birlikte çok daha iyisini yapacağız.
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}
