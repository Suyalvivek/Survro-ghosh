import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image src="/images/survo-logo.webp" alt="Suvro Ghosh" width={48} height={48} className="rounded-full" />
            <div>
              <p className="font-semibold">Suvro Ghosh</p>
              <p className="text-sm text-background/70">CEO, Caliber Tech Solutions</p>
            </div>
          </div>

          <nav className="flex items-center gap-6">
            <Link href="#about" className="text-sm text-background/70 hover:text-background transition-colors">
              About
            </Link>
            <Link href="#company" className="text-sm text-background/70 hover:text-background transition-colors">
              Company
            </Link>
            <Link href="#services" className="text-sm text-background/70 hover:text-background transition-colors">
              Services
            </Link>
            <Link href="#contact" className="text-sm text-background/70 hover:text-background transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/70">Copyright © 2025 Suvro Ghosh. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
