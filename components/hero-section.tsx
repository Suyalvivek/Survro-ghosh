import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/survo-5.webp" alt="Industrial welding" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Founder & CEO</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">Suvro Ghosh</h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-4 font-medium">
              Steel Structural Design and Detailing Maestro
            </p>
            <p className="text-gray-400 mb-8 max-w-lg leading-relaxed">
              Over 30 years of experience in service, manufacturing, and engineering space. Delivering high-quality
              structural steel solutions globally through Caliber Tech Solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent text-white border-white hover:bg-white hover:text-black"
              >
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl" />
              <Image
                src="/images/survo-logo.webp"
                alt="Suvro Ghosh"
                width={400}
                height={400}
                className="relative rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
