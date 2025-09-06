import { Card, CardContent } from "./ui/card"
import { ProboscisMonkeyLogo } from "./proboscis-monkey-logo"
import { StatusWidget } from "./status-widget"

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-center lg:text-left">
                About <span className="text-primary">Nanoprobo</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-center lg:text-left">
                Born from a vision to democratize artificial intelligence, Nanoprobo represents the next evolution in AI
                technology. Our platform combines cutting-edge research with practical applications, making advanced AI
                accessible to businesses and developers worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-center lg:text-left">Our Mission</h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-center lg:text-left">
                To empower organizations with intelligent solutions that drive innovation, enhance productivity, and
                create meaningful impact. We believe AI should augment human capabilities, not replace them.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">10K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">99.9%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right side - Status Widget */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-full max-w-sm">
              <div className="text-center mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-center lg:text-left">System Status</h3>
                <p className="text-sm text-muted-foreground text-center lg:text-left">
                  Real-time service monitoring
                </p>
              </div>
              <StatusWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
