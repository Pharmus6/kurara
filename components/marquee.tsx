const PHRASE = 'KURARACON 2027 - HAZIR MISIN?'

export function Marquee({ reverse = false }: { reverse?: boolean }) {
  const items = Array.from({ length: 4 })
  return (
    <div
      className={`relative z-10 my-6 -rotate-1 border-y-[3px] border-black py-3.5 shadow-[0_4px_0_#000] ${
        reverse
          ? 'bg-kblue'
          : 'bg-kred'
      }`}
    >
      <div className="flex overflow-hidden">
        <div
          className={`flex shrink-0 items-center gap-8 whitespace-nowrap pr-8 ${
            reverse ? 'animate-marquee-rev' : 'animate-marquee'
          }`}
        >
          {items.concat(items).map((_, i) => (
            <span key={i} className="font-graff text-2xl font-normal tracking-[0.08em] text-white [text-shadow:3px_3px_0_#000] sm:text-3xl">
              {PHRASE}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
