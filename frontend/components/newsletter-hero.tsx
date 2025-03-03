import Image from "next/image"
import { SubscriptionForm } from "./subscription-form"

export function NewsletterHero() {
  return (
    <section className="relative h-[90vh] overflow-hidden" id="hero">
      <div className="absolute inset-0 z-0">
        <Image
          src="/nicole-wallpaper.png"
          alt="Zenless Zone Zero Newsletter"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-black/50"></div>
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4">
        <div className="max-w-3xl text-center">
          <div className="inline-block bg-neon-yellow px-4 py-1 mb-6">
            <h2 className="text-black font-bold">WEEKLY NEWSLETTER</h2>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Your Ultimate Guide to <span className="text-neon-yellow">Zenless Zone Zero</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-zinc-300 max-w-2xl mx-auto">
            Get exclusive weekly insights, character builds, and meta analysis delivered straight to your inbox. Join
            thousands of agents staying ahead in New Eridu.
          </p>

          <div className="max-w-md mx-auto">
            <SubscriptionForm />
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 text-sm text-zinc-400">
            <p>Join to the best Proxies receiving our weekly insights</p>
            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-neon-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Weekly Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-neon-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Exclusive Content</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-neon-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

