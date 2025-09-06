import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Zap, Crown, Rocket } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "$29",
      period: "per month",
      description: "Perfect for small projects and individual developers",
      features: [
        "Up to 1,000 API calls/month",
        "Basic proboscis detection",
        "Email support",
        "Standard accuracy (95%)",
        "Community access",
        "Basic analytics dashboard",
      ],
      notIncluded: ["Advanced pattern recognition", "Priority support", "Custom model training", "White-label options"],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      icon: Crown,
      price: "$99",
      period: "per month",
      description: "Ideal for growing businesses and development teams",
      features: [
        "Up to 10,000 API calls/month",
        "Advanced proboscis detection",
        "Priority email & chat support",
        "Enhanced accuracy (98%)",
        "Advanced analytics",
        "Custom webhooks",
        "Team collaboration tools",
        "API rate limiting controls",
      ],
      notIncluded: ["Custom model training", "White-label options", "Dedicated account manager"],
      popular: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      icon: Rocket,
      price: "Custom",
      period: "pricing",
      description: "For large organizations with specific requirements",
      features: [
        "Unlimited API calls",
        "Custom model training",
        "24/7 phone & email support",
        "Maximum accuracy (99.5%)",
        "White-label solutions",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantees",
        "On-premise deployment",
        "Advanced security features",
      ],
      notIncluded: [],
      popular: false,
      cta: "Contact Sales",
    },
  ]

  const faqs = [
    {
      question: "What are API calls and how do they work?",
      answer:
        "Each time you send data to our proboscis detection system for analysis, it counts as one API call. This includes image analysis, pattern recognition, and anomaly detection requests.",
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer:
        "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the start of your next billing cycle.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied within the first 30 days, we'll provide a full refund.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and for Enterprise customers, we can arrange wire transfers or custom billing.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! All plans come with a 14-day free trial. No credit card required to start, and you can cancel anytime during the trial period.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "Support varies by plan: Starter gets email support, Professional gets priority email and chat, and Enterprise gets 24/7 phone and email support with a dedicated account manager.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Pricing Plans
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Choose Your Perfect <span className="gradient-text">AI Plan</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Unlock the power of advanced proboscis detection with flexible pricing that scales with your needs. Start
            free, upgrade when you're ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Badge variant="outline" className="text-sm">
              ✓ 14-day free trial
            </Badge>
            <Badge variant="outline" className="text-sm">
              ✓ No setup fees
            </Badge>
            <Badge variant="outline" className="text-sm">
              ✓ Cancel anytime
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""} hover:shadow-lg transition-all duration-300`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4">
                    <plan.icon className={`w-12 h-12 ${plan.popular ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3 opacity-50">
                        <X className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} size="lg" asChild>
                    <Link href={plan.name === "Enterprise" ? "/contact" : "/#early-access"}>{plan.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Nanoprobo?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proboscis-inspired AI delivers unmatched accuracy and performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Process thousands of detections per second with our optimized algorithms
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Industry Leading</h3>
                <p className="text-muted-foreground">99.5% accuracy rate, trusted by Fortune 500 companies worldwide</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Scalable</h3>
                <p className="text-muted-foreground">From startup to enterprise, our infrastructure grows with you</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about our pricing and plans</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers and businesses already using Nanoprobo's advanced AI detection capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/#early-access">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
