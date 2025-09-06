import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Lightbulb, Award } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We believe in delivering accurate, reliable AI solutions that exceed expectations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly pushing the boundaries of what's possible with artificial intelligence.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building technology that brings people together and enhances human capabilities.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards in everything we create and deliver.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            About Nanoprobo
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Pioneering the Future of <span className="gradient-text">AI Detection</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Founded in 2023, Nanoprobo emerged from a simple observation: the world needed better, more intuitive AI
            detection systems. Our breakthrough proboscis-inspired algorithms are revolutionizing how machines
            understand and interact with the world.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              To democratize advanced AI detection capabilities, making sophisticated pattern recognition accessible
              to businesses and developers worldwide. We're building the tools that will power the next generation of
              intelligent applications.
            </p>
            <p className="text-lg text-muted-foreground">
              Inspired by the remarkable sensory capabilities of proboscis monkeys, our AI systems can detect subtle
              patterns and anomalies that traditional algorithms miss.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Nanoprobo
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a developer, researcher, or business leader, discover how Nanoprobo can transform your AI
            detection capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/#early-access">Get Early Access</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
