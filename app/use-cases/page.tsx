import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageSquare, BarChart3, Shield, FileText, Search, Users, TrendingUp, ImageIcon, Code } from "lucide-react"

export const metadata: Metadata = {
  title: "Use Cases - Nanoprobo",
  description: "Explore the many ways Nanoprobo AI can transform your business across industries and applications.",
}

export default function UseCasesPage() {
  const useCases = [
    {
      icon: MessageSquare,
      title: "Customer Support Automation",
      description:
        "Automate customer inquiries, provide instant responses, and escalate complex issues to human agents.",
      benefits: ["24/7 availability", "Instant responses", "Reduced support costs", "Improved satisfaction"],
      industries: ["E-commerce", "SaaS", "Telecommunications"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with natural language queries and automated reporting.",
      benefits: ["Data-driven decisions", "Automated reports", "Trend identification", "Predictive analytics"],
      industries: ["Finance", "Retail", "Manufacturing"],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FileText,
      title: "Content Generation",
      description:
        "Create high-quality content at scale including blog posts, product descriptions, and marketing copy.",
      benefits: ["Faster content creation", "Consistent quality", "SEO optimization", "Multi-language support"],
      industries: ["Marketing", "Publishing", "E-commerce"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Code,
      title: "Code Analysis & Review",
      description: "Automatically review code for bugs, security vulnerabilities, and adherence to best practices.",
      benefits: ["Improved code quality", "Security compliance", "Faster reviews", "Knowledge sharing"],
      industries: ["Software Development", "DevOps", "Cybersecurity"],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Search,
      title: "Intelligent Search",
      description: "Enhance search experiences with semantic understanding and personalized results.",
      benefits: ["Better search accuracy", "Personalized results", "Voice search support", "Multi-modal search"],
      industries: ["E-commerce", "Media", "Education"],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      icon: Shield,
      title: "Fraud Detection",
      description: "Identify suspicious activities and prevent fraud with real-time AI-powered analysis.",
      benefits: ["Real-time detection", "Reduced false positives", "Adaptive learning", "Compliance support"],
      industries: ["Banking", "Insurance", "E-commerce"],
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Users,
      title: "HR & Recruitment",
      description: "Streamline hiring processes with resume screening, candidate matching, and interview analysis.",
      benefits: ["Faster screening", "Bias reduction", "Better matches", "Automated scheduling"],
      industries: ["Human Resources", "Staffing", "Consulting"],
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Analyze market trends, competitor activities, and consumer sentiment for strategic planning.",
      benefits: ["Market insights", "Competitive intelligence", "Trend prediction", "Risk assessment"],
      industries: ["Finance", "Consulting", "Investment"],
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: ImageIcon,
      title: "Visual Content Analysis",
      description: "Analyze images and videos for content moderation, quality control, and automated tagging.",
      benefits: ["Automated moderation", "Quality assurance", "Content tagging", "Brand safety"],
      industries: ["Social Media", "E-commerce", "Media"],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Use Cases</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">Transform Your Business</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover how Nanoprobo AI can revolutionize your operations across industries and use cases.
          </p>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Popular Use Cases</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From customer support to business intelligence, see how AI can enhance every aspect of your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${useCase.bgColor} flex items-center justify-center mb-4`}>
                      <IconComponent className={`h-6 w-6 ${useCase.color}`} />
                    </div>
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                    <CardDescription>{useCase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 mb-2">Key Benefits</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {useCase.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 mb-2">Industries</h4>
                        <div className="flex flex-wrap gap-1">
                          {useCase.industries.map((industry) => (
                            <Badge key={industry} variant="secondary" className="text-xs">
                              {industry}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how Nanoprobo can be tailored to your specific use case and business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline">
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
