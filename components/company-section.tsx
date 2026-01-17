import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CompanySection() {
  return (
    <section id="company" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Caliber Tech Solutions</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Your Partner for Structural Steel Design and Detailing
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded in 2005, Caliber Tech Solutions® is a technology-driven structural steel design and detailing
            company having offices in India, US and UK. Caliber Tech Solutions® is an ISO 9001:2015 certified company.
            We provide faster and accurate structural steel design and detailing solutions for all types of residential,
            commercial, and industrial projects across the World.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-80 rounded-lg overflow-hidden group">
            <Image
              src="/images/survo-4.webp"
              alt="Construction at sunset"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Global Operations</h3>
              <p className="text-gray-200 text-sm">Offices in India, US, and UK serving clients worldwide</p>
            </div>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden group">
            <Image
              src="/images/survo-3.webp"
              alt="Steel construction"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Quality Certified</h3>
              <p className="text-gray-200 text-sm">ISO 9001:2015 certified for excellence in every project</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="#contact">
              Work With Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
