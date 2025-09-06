import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Showcase - Nanoprobo",
  description: "Discover amazing projects and applications built with Nanoprobo AI technology.",
}

export default function ShowcasePage() {
  const showcaseItems = [
    {
      title: "SmartContent Generator",
      description:
        "AI-powered content creation platform that generates blog posts, social media content, and marketing copy in seconds.",
      image: "/showcase-content-generator.jpg",
      category: "Content Creation",
      tags: ["Text Generation", "Marketing", "Automation"],
      company: "ContentFlow Inc.",
      results: "300% increase in content production speed",
    },
    {
      title: "DataInsight Analytics",
      description:
        "Advanced analytics platform that transforms raw business data into actionable insights using natural language processing.",
      image: "/showcase-analytics.jpg",
      category: "Analytics",
      tags: ["Data Analysis", "Business Intelligence", "NLP"],
      company: "DataCorp Solutions",
      results: "85% reduction in analysis time",
    },
    {
      title: "CustomerCare AI",
      description:
        "Intelligent customer support system that handles inquiries, provides solutions, and escalates complex issues automatically.",
      image: "/showcase-customer-care.jpg",
      category: "Customer Support",
      tags: ["Customer Service", "Automation", "Chat"],
      company: "SupportTech Ltd.",
      results: "70% reduction in response time",
    },
    {
      title: "CodeReview Assistant",
      description:
        "AI-powered code review tool that identifies bugs, suggests improvements, and ensures coding standards compliance.",
      image: "/showcase-code-review.jpg",
      category: "Development",
      tags: ["Code Analysis", "Quality Assurance", "DevOps"],
      company: "DevTools Pro",
      results: "50% fewer bugs in production",
    },
    {
      title: "TrendSpotter Market Analysis",
      description:
        "Financial market analysis platform that predicts trends and identifies investment opportunities using AI algorithms.",
      image: "/showcase-market-analysis.jpg",
      category: "Finance",
      tags: ["Market Analysis", "Predictions", "Investment"],
      company: "FinanceAI Group",
      results: "92% prediction accuracy",
    },
    {
      title: "HealthDiagnostic Pro",
      description:
        "Medical diagnostic assistant that analyzes symptoms and medical data to support healthcare professionals.",
      image: "/showcase-health-diagnostic.jpg",
      category: "Healthcare",
      tags: ["Medical Analysis", "Diagnostics", "Healthcare"],
      company: "MedTech Innovations",
      results: "40% faster diagnosis process",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200">Showcase</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">Built with Nanoprobo</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover incredible applications and success stories from companies using Nanoprobo AI technology to
            transform their businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Submit Your Project
            </Button>
            <Button size="lg" variant="outline">
              View All Categories
            </Button>
          </div>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how leading companies are leveraging Nanoprobo to drive innovation and achieve remarkable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseItems.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                  <Play className="h-12 w-12 text-amber-600" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600">Featured</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">
                      <p className="font-medium">{item.company}</p>
                      <p className="text-green-600 font-semibold mt-1">{item.results}</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Ready to Build Something Amazing?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies using Nanoprobo to create innovative AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Start Building Today
            </Button>
            <Button size="lg" variant="outline">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
