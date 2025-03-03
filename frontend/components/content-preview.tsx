import { BookIcon, NewspaperIcon } from "lucide-react";
import Image from "next/image";
import { GameIcon } from "./game-logo";

export function ContentPreview() {
  return (
    <section className="relative py-24 bg-zinc-900" id="preview">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-neon-yellow px-4 py-1 mb-6">
            <h2 className="text-black font-bold">PREVIEW OUR CONTENT</h2>
          </div>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Here's a sample of what you'll get in our weekly newsletter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-black p-6 rounded-sm border border-zinc-800">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-sm overflow-hidden shrink-0 text-white">
                  <GameIcon />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Character Analysis: Nicole
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    Deep dive into Nicole's optimal builds, team compositions,
                    and combat strategies. Learn how to maximize her support
                    potential and crowd control in different content.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black p-6 rounded-sm border border-zinc-800">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-sm overflow-hidden shrink-0 text-white">
                  <NewspaperIcon size={64} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Weekly Meta Update
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    Stay ahead with our analysis of the current meta, top team
                    compositions, and strategies for clearing the latest
                    content.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black p-6 rounded-sm border border-zinc-800">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-sm overflow-hidden shrink-0 text-white">
                  <BookIcon size={64} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Event Guides & Tips
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    Comprehensive guides for ongoing events, including efficient
                    farming routes, challenge strategies, and reward
                    optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black p-8 rounded-sm border border-zinc-800">
            <div className="aspect-4/5 relative rounded-sm overflow-hidden">
              <Image
                src="/nicole-1.png"
                alt="Newsletter Preview"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-neon-yellow text-black text-xs font-bold px-2 py-1 inline-block mb-3">
                  LATEST ISSUE
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  March 2025: New Character Analysis
                </h3>
                <p className="text-zinc-300">
                  Featuring in-depth guides for the latest characters, event
                  strategies, and exclusive tips from top players.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
