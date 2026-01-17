import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Let&apos;s Work Together</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ready to start your next structural steel project? Get in touch with us to discuss how we can help bring
              your vision to life with precision and excellence.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <Link
                    href="mailto:suvro@calibertech.net"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    suvro@calibertech.net
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <div className="space-y-1">
                    <Link
                      href="tel:+919871177166"
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 98 7117 7166 (India)
                    </Link>
                    <Link
                      href="tel:+17605882207"
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 (760) 588 2207 (US)
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Offices</h3>
                  <p className="text-muted-foreground">India, United States & United Kingdom</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
