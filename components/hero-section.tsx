import { Button } from "./ui/button"
import { ProboscisMonkeyLogo } from "./proboscis-monkey-logo"
import { EarlyAccessForm } from "./early-access-form"
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background via-card to-muted">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Hero content */}
          <div className="flex flex-col space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <ProboscisMonkeyLogo className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto lg:mx-0 text-primary" />
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-playfair)] leading-tight text-center lg:text-left">
                AI That Actually <span className="text-primary">Works</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed mx-auto lg:mx-0 text-center lg:text-left">
                Transform your business with Nanoprobo's intelligent AI platform. From customer support to data
                analysis, our proboscis monkey-inspired technology delivers results that matter.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6" asChild>
                <Link href="/#early-access">
                  Get Early Access
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                <span>Enterprise Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                <span>Proven Results</span>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 sm:p-4 max-w-md mx-auto lg:mx-0">
              <p className="text-xs sm:text-sm text-amber-800 text-center lg:text-left">
                <strong>Join 500+ companies</strong> already using Nanoprobo to automate workflows and boost
                productivity by up to 300%.
              </p>
            </div>
          </div>

          {/* Right side - Early Access Form */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <EarlyAccessForm />
          </div>
        </div>
      </div>
    </section>
  )
}
