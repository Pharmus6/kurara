export function GraffitiBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[#111633]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(164,102,255,0.48),transparent_35%),radial-gradient(ellipse_at_85%_70%,rgba(255,75,118,0.34),transparent_36%),linear-gradient(145deg,#111633_0%,#28205f_48%,#111a3d_100%)]" />

      <div className="bg-noise" />
      <div className="bg-grid" />
      <div className="bg-pulse bg-pulse--pink" />
      <div className="bg-pulse bg-pulse--blue" />
      <div className="bg-corner-glow bg-corner-glow--left" />
      <div className="bg-corner-glow bg-corner-glow--right" />

      <div className="space-nebula space-nebula--pink" />
      <div className="space-nebula space-nebula--blue" />

      <div className="space-planet space-planet--purple" />
      <div className="space-planet space-planet--red" />
      <div className="space-ring space-ring--yellow" />
      <div className="space-asteroid space-asteroid--one" />
      <div className="space-asteroid space-asteroid--two" />

      <div className="hidden md:block">
        <div className="space-orbit space-orbit--one" />
        <div className="space-orbit space-orbit--two" />
        <div className="space-moon" />
        <div className="space-star space-star--one" />
        <div className="space-star space-star--two" />
        <div className="space-star space-star--three" />
        <div className="space-star space-star--four" />
        <div className="space-star space-star--five" />
        <div className="space-shooting-star space-shooting-star--one" />
        <div className="space-shooting-star space-shooting-star--two" />
        <div className="space-trails" />
      </div>

      <div className="street-ramp" />
      <div className="street-skateboard" />
      <div className="street-tag street-tag--one">PLAY LOUD</div>
      <div className="street-tag street-tag--two">27</div>
      <div className="street-light street-light--one" />
      <div className="street-light street-light--two" />
      <div className="street-ground" />
      <div className="street-wall-lines" />
      <div className="street-sticker street-sticker--one">SK8</div>
      <div className="street-sticker street-sticker--two">COSPLAY</div>
      <div className="street-pavement" />
      <div className="street-ramp street-ramp--left" />
      <div className="street-rail" />
      <div className="street-pillar street-pillar--one" />
      <div className="street-pillar street-pillar--two" />
      <div className="street-graffiti street-graffiti--one">RIDE</div>
      <div className="street-graffiti street-graffiti--two">CREATE</div>
      <div className="street-arrow" />

      <div className="star-burst star-burst--yellow" />
      <div className="star-burst star-burst--pink" />

      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.14)_48%,transparent_52%)] [background-size:220px_220px]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(0,0,0,0.5)_100%)]" />
    </div>
  )
}
