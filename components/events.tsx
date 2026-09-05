export function Events() {
  return (
    <section
      id="etkinlikler"
      className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-5 sm:py-28"
    >
      <div className="mb-8 text-center sm:mb-12">
        <span className="font-graff -rotate-2 text-base text-kblue text-stroke-black sm:text-lg">
          Neler mi var?
        </span>
        <h2 className="font-graff title-motion text-4xl text-white text-stroke-black sm:text-7xl">
          Etkinlikler
        </h2>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-black bg-gradient-to-br from-kred/80 via-kpurple/80 to-kblue/70 p-1 shadow-[7px_7px_0_#000]">
        <div className="relative overflow-hidden rounded-[1.7rem] bg-[#191633]/90 px-6 py-10 sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border-[24px] border-kyellow/20" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-kpink/20 blur-3xl" />
          <div className="relative max-w-4xl">
            <span className="inline-flex -rotate-2 border-2 border-black bg-kyellow px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.16em] text-ink shadow-[3px_3px_0_#000]">
              YAKINDA
            </span>
            <h3 className="mt-5 font-graff text-3xl leading-[0.95] text-white text-stroke-black sm:text-6xl">
              Ilk etkinligimiz icin hazirlaniyoruz.
            </h3>
            <p className="mt-6 max-w-3xl text-base font-semibold leading-relaxed text-white/80 sm:text-xl">
              Sektöre yepyeni bir soluk getirmek için ilk etkinliğimizin hazırlıklarına başladık. Amacımız size daha önce yaşamadığınız türden farklı bir ortam sunmak. Çok yakında kapıları açıyoruz; bu serüvene ilk günden tanıklık etmek için hazır olun.
            </p>
            <p className="mt-7 font-graff text-2xl text-kyellow text-stroke-black sm:text-4xl">
              2027 (veya daha erken).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
