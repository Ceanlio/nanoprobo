import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Brain, Shield, Zap, Users, BarChart3, Sparkles } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description: "Leverage cutting-edge machine learning algorithms trained on vast datasets for superior performance.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized infrastructure ensures rapid response times and seamless user experiences.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and compliance with industry standards.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built-in collaboration tools that enable teams to work together efficiently on AI projects.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Comprehensive analytics dashboard to track performance and gain actionable insights.",
  },
  {
    icon: Sparkles,
    title: "Continuous Learning",
    description: "AI models that continuously improve and adapt based on usage patterns and feedback.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-12 sm:py-16 bg-background">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-8 sm:mb-12">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-center">
            Powerful Features for <span className="text-primary">Modern AI</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-base sm:text-lg leading-relaxed px-4 text-center">
            Discover the comprehensive suite of tools and capabilities that make Nanoprobo the preferred choice for AI
            innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm sm:text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
