'use client'

import { ValidationError, useForm } from '@formspree/react'

const fieldClass =
  'w-full rounded-lg border-2 border-black bg-white/8 px-4 py-3.5 text-white placeholder:text-foreground/45 backdrop-blur-md outline-none transition-all duration-300 focus:border-kred focus:bg-white/12 focus:shadow-[0_0_0_3px_rgba(255,31,61,0.35),0_0_25px_rgba(255,31,61,0.55)]'

export function PartnershipForm() {
  const [state, handleSubmit] = useForm('xbgjkrzp')

  const formErrors = state.errors?.getFormErrors() ?? []
  const adErrors = state.errors?.getFieldErrors('ad') ?? []
  const emailErrors = state.errors?.getFieldErrors('email') ?? []
  const messageErrors = state.errors?.getFieldErrors('message') ?? []

  return (
    <section
      id="iletisim"
      className="relative z-10 mx-auto max-w-4xl px-4 py-16 sm:px-5 sm:py-28"
    >
      <div className="mb-8 sm:mb-10">
        <span className="inline-flex -rotate-2 border-2 border-black bg-kyellow px-2.5 py-1 text-[0.6rem] font-black uppercase tracking-[0.16em] text-ink shadow-[3px_3px_0_#000]">
          BIRLIKTE YAPALIM
        </span>
        <h2 className="mt-4 font-graff text-4xl leading-[0.82] text-white text-stroke-black sm:text-7xl">
          BIZIMLE <span className="text-kred">CALISMAK</span>
          <span className="block ml-8 text-kblue">ISTER MISINIZ?</span>
        </h2>
        <p className="mt-5 max-w-xl text-sm font-bold leading-relaxed text-foreground/85 sm:text-base">
          Marka iş birlikleri, sponsorluk ve proje talepleriniz için bizimle
          iletişime geçebilirsiniz. Ayrıca etkinlikte görmek istediğiniz
          fikirleri ve önerilerinizi paylaşmaktan çekinmeyin. Ekibimiz en kısa
          sürede size geri dönüş yapacaktır.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative overflow-hidden rounded-[1.25rem] border-[3px] border-black bg-gradient-to-br from-kred via-kpink to-kpurple p-1 shadow-[7px_7px_0_#000]"
      >
        <div className="relative overflow-hidden rounded-[0.9rem] bg-[#191633]/95 p-5 sm:p-10">
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          className="sr-only"
          aria-hidden="true"
        />
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="ad"
              className="mb-2 block text-sm font-bold uppercase tracking-wider text-kyellow"
            >
              Adınız Soyadınız
            </label>
            <input
              id="ad"
              name="ad"
              type="text"
              required
              placeholder="Örn. Ada Kaya"
              className={fieldClass}
            />
            {adErrors.length > 0 && (
              <p className="mt-2 block text-sm font-semibold text-kred" aria-live="polite">
                {adErrors[0].message}
              </p>
            )}
            <ValidationError field="ad" errors={state.errors} className="mt-2 block text-sm font-semibold text-kred" />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold uppercase tracking-wider text-kyellow"
            >
              E-posta Adresiniz
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="ornek@eposta.com"
              className={fieldClass}
            />
            {emailErrors.length > 0 && (
              <p className="mt-2 block text-sm font-semibold text-kred" aria-live="polite">
                {emailErrors[0].message}
              </p>
            )}
            <ValidationError field="email" errors={state.errors} className="mt-2 block text-sm font-semibold text-kred" />
          </div>
        </div>

        <div className="mt-5">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-bold uppercase tracking-wider text-kyellow"
          >
            Projeleriniz veya Mesajınız
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Bize projenizden bahsedin..."
            className={`${fieldClass} resize-none`}
          />
          {messageErrors.length > 0 && (
            <p className="mt-2 block text-sm font-semibold text-kred" aria-live="polite">
              {messageErrors[0].message}
            </p>
          )}
          <ValidationError field="message" errors={state.errors} className="mt-2 block text-sm font-semibold text-kred" />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="glass-sheen relative mt-7 w-full overflow-hidden rounded-2xl border-[3px] border-black bg-gradient-to-r from-kred via-kpink to-kpurple px-6 py-3.5 font-graff text-xl uppercase tracking-widest text-white text-stroke-black shadow-[5px_5px_0_#000] transition-all hover:-translate-y-1 hover:shadow-[7px_7px_0_#000] active:translate-y-0.5 sm:px-8 sm:py-4 sm:text-2xl"
        >
          {state.submitting ? 'Gönderiliyor...' : 'Gönder'}
        </button>

        {state.succeeded && (
          <p className="mt-4 text-center text-sm font-semibold text-kyellow" aria-live="polite">
            Mesajınız alındı, teşekkürler! En kısa sürede dönüş yapacağız.
          </p>
        )}

        {formErrors.length > 0 && (
          <p className="mt-4 text-center text-sm font-semibold text-kred" aria-live="assertive">
            Form gönderilemedi. Lütfen bilgileri kontrol edip tekrar deneyin.
          </p>
        )}
        </div>
      </form>
    </section>
  )
}
