import Link from "next/link"
import { ProboscisMonkeyLogo } from "./proboscis-monkey-logo"
import { Button } from "./ui/button"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-muted border-t">
      <div className="container px-4 py-8 sm:py-12 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <ProboscisMonkeyLogo className="w-6 h-6 text-primary" />
              <span className="font-bold">Nanoprobo</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Advancing AI technology to create smarter, more efficient solutions for tomorrow's challenges.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="mailto:hello@nanoprobo.com" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm sm:text-base">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/use-cases" className="text-muted-foreground hover:text-accent transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-accent transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm sm:text-base">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm sm:text-base">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-muted-foreground hover:text-accent transition-colors">
                  System Status
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; 2024 Nanoprobo. All rights reserved. Built with cutting-edge AI technology.</p>
        </div>
      </div>
    </footer>
  )
}
