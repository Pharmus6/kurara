'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function SiteLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 850)
    return () => window.clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="site-loader" role="status" aria-label="Kurara yükleniyor">
      <div className="site-loader__burst" />
      <div className="site-loader__graffiti">SK8</div>
      <div className="site-loader__rail" />
      <div className="site-loader__board" />
      <div className="site-loader__content">
        <div className="site-loader__logo">
          <Image
            src="/images/kurara-logo.png"
            alt="Kurara 27"
            fill
            sizes="240px"
            className="object-contain"
          />
        </div>
        <div className="site-loader__track">
          <div className="site-loader__progress" />
        </div>
        <span className="site-loader__label">KURARACON 2027</span>
      </div>
    </div>
  )
}
