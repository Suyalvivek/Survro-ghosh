import Image from "next/image"

const projects = [
  {
    image: "/images/survo-1.webp",
    title: "Offshore Oil Platform",
    category: "Industrial",
  },
  {
    image: "/images/survo-3.webp",
    title: "Commercial Construction",
    category: "Commercial",
  },
  {
    image: "/images/survo-4.webp",
    title: "High-Rise Development",
    category: "Residential",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Our Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Latest Projects</h2>
          <p className="text-muted-foreground leading-relaxed">
            Explore our portfolio of structural steel projects spanning residential, commercial, and industrial sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative h-96 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary text-sm font-medium mb-1">{project.category}</p>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
