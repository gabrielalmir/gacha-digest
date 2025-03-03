import Image from "next/image"
import Link from "next/link"

export function MainHero() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tDXcjtTNTKLcZoTZ6xttAK1k78fYiL.png"
          alt="Zenless Zone Zero Hero"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-4 md:px-10 lg:px-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            AI-Powered <span className="text-neon-yellow">Zenless Zone Zero</span> Insights
          </h1>
          <p className="text-lg md:text-xl mb-8 text-zinc-300">
            Discover AI-curated strategies, character builds, and meta analysis to dominate in New Eridu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/insights"
              className="bg-neon-yellow text-black px-6 py-3 font-bold hover:bg-yellow-300 transition-colors"
            >
              Explore Insights
            </Link>
            <Link
              href="/characters"
              className="border border-neon-yellow text-neon-yellow px-6 py-3 font-bold hover:bg-neon-yellow hover:bg-opacity-10 transition-colors"
            >
              Character Guides
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-10 p-4 md:p-10">
        <div className="bg-neon-yellow text-black px-6 py-3 font-bold transform rotate-3 shadow-lg">BAIXAR AGORA</div>
      </div>
    </section>
  )
}

