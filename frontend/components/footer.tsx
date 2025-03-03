import { CatIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:justify-between md:flex-row gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <CatIcon className="mr-2" />
              <span className="text-white font-bold text-lg">GACHA DIGEST</span>
            </Link>
            <p className="text-zinc-400 text-sm">
              Your weekly source for exclusive Zenless Zone Zero content and
              strategies.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Newsletter</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-zinc-400 hover:text-neon-yellow transition-colors text-sm"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#preview"
                  className="text-zinc-400 hover:text-neon-yellow transition-colors text-sm"
                >
                  Content Preview
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-zinc-400 hover:text-neon-yellow transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* TODO: */}
          {/* <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-neon-yellow transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-zinc-400 hover:text-neon-yellow transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/account" className="text-zinc-400 hover:text-neon-yellow transition-colors text-sm">
                  Manage Subscription
                </Link>
              </li>
            </ul>
          </div> */}

          {/* TODO */}
          {/* <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-zinc-400 hover:text-neon-yellow transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-400 hover:text-neon-yellow transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-zinc-400 hover:text-neon-yellow transition-colors text-sm">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-center">
          <p className="text-zinc-500 text-sm">
            This is a fan-made newsletter. Zenless Zone Zero and all related
            properties are trademarks of HoYoverse.
          </p>
          <p className="text-zinc-500 text-sm mt-2">
            © 2025 Gacha Digest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
