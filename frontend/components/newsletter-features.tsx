export function NewsletterFeatures() {
  return (
    <section className="relative py-24 overflow-hidden" id="features">
      <div className="absolute inset-0 bg-linear-to-br from-black via-black to-zinc-900 z-0"></div>
      <div className="diagonal-line"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-neon-yellow px-4 py-1 mb-6">
            <h2 className="text-black font-bold">NEWSLETTER FEATURES</h2>
          </div>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Every week, our newsletter brings you comprehensive coverage of everything happening in New Eridu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-zinc-900/50 p-6 rounded-sm border border-zinc-800">
            <div className="w-12 h-12 bg-neon-yellow rounded-sm flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Meta Analysis</h3>
            <p className="text-zinc-400">
              Weekly breakdowns of the current meta, top team compositions, and character tier lists.
            </p>
          </div>

          <div className="bg-zinc-900/50 p-6 rounded-sm border border-zinc-800">
            <div className="w-12 h-12 bg-neon-yellow rounded-sm flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Character Builds</h3>
            <p className="text-zinc-400">
              Detailed character guides, optimal builds, and combat strategies for all agents.
            </p>
          </div>

          <div className="bg-zinc-900/50 p-6 rounded-sm border border-zinc-800">
            <div className="w-12 h-12 bg-neon-yellow rounded-sm flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Event Coverage</h3>
            <p className="text-zinc-400">Stay updated with upcoming events, banners, and content updates.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

