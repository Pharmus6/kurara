import Image from 'next/image'

const offerings = [
  {
    title: 'Topluluk & Sosyalleşme Alanları',
    description: 'Yeni dostluklar kurabileceğin, benzer ilgi alanlarına sahip insanlarla bir araya gelip rahatça muhabbet edebileceğin özel dinlenme ve kaynaşma noktaları.',
    accent: 'bg-kpink',
    titleAccent: 'from-kpink via-white to-kblue',
  },
  {
    title: 'Oyun Turnuvaları & Free Play',
    description: 'Dövüş oyunlarından popüler rekabetçi yapımlara kadar ödüllü turnuvalar ve serbest oyun alanları.',
    accent: 'bg-kblue',
    titleAccent: 'from-kblue via-white to-kpurple',
  },
  {
    title: '2027: Tarihin En Iyi Animesini Seçiyoruz!',
    description: 'Topluluğun oylarıyla şekillenecek dev oylama! 2027’de "Tarihin En Iyi Animesini" birlikte seçiyoruz, favori serini zirveye taşıyacak tartışmalara sen de katıl.',
    accent: 'bg-kyellow',
    titleAccent: 'from-kyellow via-white to-kred',
  },
  {
    title: 'Cosplay Yarışması & Sahne Showları',
    description: 'Karakterine hayat vereceğin dev sahne, jüri değerlendirmeleri, cosplay yarışması ve büyüleyici performanslar.',
    accent: 'bg-kred',
    titleAccent: 'from-kred via-white to-kpink',
  },
  {
    title: 'Karaoke & Müzik',
    description: 'Anime, oyun ve pop kültürün ikonik şarkılarını sahnede hep birlikte söyleyeceğimiz interaktif karaoke saatleri.',
    accent: 'bg-kpurple',
    titleAccent: 'from-kpurple via-white to-kblue',
  },
  {
    title: 'Standlar & Çizer Pazarı',
    description: 'Figürler, aksesuar standları ve bağımsız sanatçıların tasarımlarını inceleyip alışveriş yapabileceğin pazar alanı.',
    accent: 'bg-kblue',
    titleAccent: 'from-kblue via-white to-kyellow',
  },
]

export function EventDetails() {
  return (
    <section
      id="detaylar"
      className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-5 sm:py-28"
    >
      <div className="relative overflow-hidden border-y-[3px] border-black bg-[#17152f]/90 px-4 py-10 sm:px-8 sm:py-14">
        <Image
          src="/images/kuaraminilogogo.png"
          alt="Kurara logo"
          width={260}
          height={90}
          sizes="130px"
          className="pointer-events-none absolute right-8 top-8 z-10 hidden w-32 rotate-6 opacity-90 drop-shadow-[4px_4px_0_#000] md:block"
        />
        <div className="mb-8 max-w-2xl sm:mb-10">
          <span className="font-graff -rotate-2 text-base text-kyellow text-stroke-black sm:text-lg">
            Etkinlikte seni neler bekliyor?
          </span>
          <h2 className="relative mt-3 inline-block font-graff text-4xl leading-[0.8] text-stroke-black sm:text-7xl">
            <span className="block -rotate-2 text-white">NELER</span>
            <span className="ml-8 block rotate-1 text-kred">SUNUYORUZ?</span>
            <span className="absolute -right-5 top-0 h-3 w-3 rotate-12 bg-kyellow shadow-[2px_2px_0_#000] sm:-right-7 sm:h-4 sm:w-4" />
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {offerings.map((offering, index) => (
            <article
              key={offering.title}
              className="group relative overflow-hidden border-[3px] border-black bg-[#24204d] p-5 shadow-[4px_4px_0_#000] transition-transform hover:-translate-y-1 sm:p-6"
            >
              <div className={`absolute inset-x-0 top-0 h-2 ${offering.accent}`} />
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="font-mono text-xs font-bold tracking-[0.18em] text-white/45">
                  0{index + 1}
                </span>
                <span className={`h-2.5 w-2.5 ${offering.accent}`} />
              </div>
              <h3 className={`bg-gradient-to-r ${offering.titleAccent} bg-clip-text font-graff text-xl leading-tight text-transparent text-stroke-black sm:text-2xl`}>
                {offering.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-white/75 sm:text-base">
                {offering.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
