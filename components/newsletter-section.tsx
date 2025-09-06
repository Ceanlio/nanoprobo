import { NewsletterSignup } from "./newsletter-signup"

export function NewsletterSection() {
  return (
    <section id="newsletter" className="py-12 sm:py-16 bg-muted/50">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-center lg:text-left">
                Stay Ahead of the <span className="text-secondary">AI Revolution</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-center lg:text-left">
                Join thousands of AI enthusiasts, developers, and business leaders who rely on our newsletter for the
                latest insights, trends, and breakthrough technologies in artificial intelligence.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-center lg:text-left">What you'll get:</h3>
              <ul className="space-y-3 text-muted-foreground text-center lg:text-left">
                <li className="flex items-start space-x-3 justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-sm sm:text-base">Weekly AI industry insights and analysis</span>
                </li>
                <li className="flex items-start space-x-3 justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-sm sm:text-base">Product updates and new feature announcements</span>
                </li>
                <li className="flex items-start space-x-3 justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-sm sm:text-base">Expert tips and best practices</span>
                </li>
                <li className="flex items-start space-x-3 justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-sm sm:text-base">Exclusive early access to new tools and features</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Newsletter Form */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </section>
  )
}
