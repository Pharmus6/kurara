import { GraffitiBackground } from '@/components/graffiti-background'
import { FloatingNav } from '@/components/floating-nav'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { WhoAreWe } from '@/components/who-are-we'
import { Events } from '@/components/events'
import { EventDetails } from '@/components/event-details'
import { PartnershipForm } from '@/components/partnership-form'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink text-foreground">
      <GraffitiBackground />
      <FloatingNav />
      <Hero />
      <Marquee />
      <WhoAreWe />
      <Events />
      <Marquee reverse />
      <EventDetails />
      <PartnershipForm />
      <SiteFooter />
    </main>
  )
}
