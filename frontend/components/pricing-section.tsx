import { SubscriptionForm } from "./subscription-form"

export function PricingSection() {
  return (
    <section className="relative py-24 overflow-hidden" id="pricing">
      <div className="absolute inset-0 bg-linear-to-br from-black via-black to-zinc-900 z-0"></div>
      <div className="diagonal-line"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-neon-yellow px-4 py-1 mb-6">
            <h2 className="text-black font-bold">SUBSCRIBE NOW</h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Get Weekly Zenless Zone Zero Insights</h3>
          <p className="text-xl text-zinc-400 mb-8">
            Join our community of dedicated players and stay ahead of the meta
          </p>

          <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 max-w-md mx-auto">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-white mb-2">
                $1<span className="text-xl text-zinc-400">/month</span>
              </div>
              <p className="text-zinc-400">Cancel anytime</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-zinc-300">
                <svg
                  className="h-5 w-5 text-neon-yellow shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Weekly newsletter with exclusive content
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <svg
                  className="h-5 w-5 text-neon-yellow shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Character builds and team compositions
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <svg
                  className="h-5 w-5 text-neon-yellow shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Meta analysis and event guides
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <svg
                  className="h-5 w-5 text-neon-yellow shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Early access to upcoming content
              </li>
            </ul>

            <SubscriptionForm />
          </div>
        </div>
      </div>
    </section>
  )
}

