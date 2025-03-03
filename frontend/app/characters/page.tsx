import Image from "next/image"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

const characters = [
  {
    id: 1,
    name: "Pulchra Fellini",
    image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/9c/Pulchra_Fellini_Icon.png",
    faction: "Belobog Heavy Industries",
    element: "Physical",
    rarity: 5,
  },
  {
    id: 2,
    name: "Lighter",
    image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/c5/Lighter_Icon.png",
    faction: "Cunning Hares",
    element: "Fire",
    rarity: 5,
  },
  {
    id: 3,
    name: "Burnice",
    image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/a5/Burnice_Icon.png",
    faction: "Victoria Housekeeping Co.",
    element: "Fire",
    rarity: 5,
  },
  {
    id: 4,
    name: "Caesar King",
    image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/c9/Caesar_King_Icon.png",
    faction: "Cunning Hares",
    element: "Physical",
    rarity: 4,
  },
  {
    id: 5,
    name: "Piper Wheel",
    image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/c9/Piper_Wheel_Icon.png",
    faction: "Cunning Hares",
    element: "Electric",
    rarity: 4,
  },
  {
    id: 6,
    name: "Lucy",
    image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/c9/Lucy_Icon.png",
    faction: "Belobog Heavy Industries",
    element: "Ice",
    rarity: 5,
  },
  {
    id: 7,
    name: "Anby Demara",
    image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/c9/Anby_Demara_Icon.png",
    faction: "Cunning Hares",
    element: "Electric",
    rarity: 4,
  },
  {
    id: 8,
    name: "Ellen",
    image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d1/Ellen_Icon.png",
    faction: "Victoria Housekeeping Co.",
    element: "Ice",
    rarity: 5,
  },
  {
    id: 9,
    name: "Nicole",
    image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/5c/Nicole_Icon.png",
    faction: "Victoria Housekeeping Co.",
    element: "Physical",
    rarity: 4,
  },
  {
    id: 10,
    name: "Billy",
    image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b5/Billy_Icon.png",
    faction: "Belobog Heavy Industries",
    element: "Fire",
    rarity: 4,
  },
  {
    id: 11,
    name: "Nekomata",
    image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/3e/Nekomata_Icon.png",
    faction: "Hollow",
    element: "Electric",
    rarity: 5,
  },
  {
    id: 12,
    name: "Lycaon",
    image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/7d/Lycaon_Icon.png",
    faction: "Hollow",
    element: "Ice",
    rarity: 5,
  },
]

export default function CharactersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <MainNav />
      <main className="flex-1">
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-black via-black to-zinc-900 z-0"></div>
          <div className="diagonal-line"></div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start md:items-center mb-12">
              <div className="bg-neon-yellow py-2 px-4 mb-4 md:mb-0 md:mr-6">
                <h1 className="text-black text-3xl font-bold">PERSONAGENS</h1>
              </div>
              <div className="text-zinc-400">
                <p>AI-analyzed character data and optimal builds for all Zenless Zone Zero agents</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {characters.map((character) => (
                <Link key={character.id} href={`/characters/${character.id}`}>
                  <div className="character-card rounded-md overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-neon-yellow transition-colors">
                    <div className="relative aspect-square">
                      <Image
                        src={character.image || "/placeholder.svg"}
                        alt={character.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <div className="absolute top-2 right-2 flex">
                        {Array.from({ length: character.rarity }).map((_, i) => (
                          <svg key={i} className="h-4 w-4 text-neon-yellow" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-bold">{character.name}</h3>
                      <div className="flex justify-between mt-2">
                        <span className="text-zinc-400 text-xs">{character.faction}</span>
                        <span className="text-neon-yellow text-xs">{character.element}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

