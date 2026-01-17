import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-lg" />
            <Image
              src="/images/survo-2.webp"
              alt="Construction site at sunset"
              width={600}
              height={400}
              className="relative rounded-lg shadow-xl object-cover w-full"
            />
          </div>

          <div>
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">About Me</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">30+ Years of Engineering Excellence</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The founder and the CEO of Caliber Tech Solutions Pvt. Ltd, a structural steel design and detailing
                company, has massive achievements as an entrepreneur. He has over 30 years of experience in the service,
                manufacturing, and engineering space.
              </p>
              <p>
                Made his way up the ladder of success by the immense amount of hard work and delivering high-quality
                services through both his initiatives, Caliber Tech Solutions Pvt Ltd and Caliber Tech Solutions LLC.
              </p>
              <p>
                Formally trained in management skills and has experience of various greenfield projects during his
                career. For the past several years, he has been utilizing his experience to grow and establish his own
                ventures in India and United States.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">30+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">3</p>
                <p className="text-sm text-muted-foreground">Global Offices</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">ISO</p>
                <p className="text-sm text-muted-foreground">9001:2015</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
