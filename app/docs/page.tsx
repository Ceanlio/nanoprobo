import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Zap, Shield, Globe, Cpu } from "lucide-react"

export const metadata: Metadata = {
  title: "Documentation - Nanoprobo",
  description:
    "Complete documentation for Nanoprobo AI platform. Learn how to integrate and use our powerful AI tools.",
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200">Documentation</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">Developer Documentation</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Everything you need to integrate Nanoprobo's powerful AI capabilities into your applications.
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-serif">Quick Start</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-amber-600" />
                  Get Started in Minutes
                </CardTitle>
                <CardDescription>Install our SDK and make your first API call</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
                  <div>npm install @nanoprobo/sdk</div>
                  <div className="mt-2">import {"{ NanoproboClient }"} from '@nanoprobo/sdk'</div>
                  <div className="mt-2">const client = new NanoproboClient(apiKey)</div>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">View Installation Guide</Button>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-orange-600" />
                  API Reference
                </CardTitle>
                <CardDescription>Complete API documentation with examples</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">POST /v1/analyze</span>
                    <Badge variant="outline">Core</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">GET /v1/models</span>
                    <Badge variant="outline">Models</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">POST /v1/process</span>
                    <Badge variant="outline">Processing</Badge>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Browse API Reference
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">Documentation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>Learn the basics of Nanoprobo and set up your first project</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Authentication</li>
                  <li>• Making your first request</li>
                  <li>• Understanding responses</li>
                  <li>• Error handling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cpu className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>AI Models</CardTitle>
                <CardDescription>Explore our available AI models and their capabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Text Analysis Model</li>
                  <li>• Image Processing Model</li>
                  <li>• Sentiment Analysis</li>
                  <li>• Custom Model Training</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Security</CardTitle>
                <CardDescription>Best practices for secure integration</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• API Key Management</li>
                  <li>• Rate Limiting</li>
                  <li>• Data Privacy</li>
                  <li>• Compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>SDKs & Libraries</CardTitle>
                <CardDescription>Official SDKs for popular programming languages</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• JavaScript/TypeScript</li>
                  <li>• Python</li>
                  <li>• Go</li>
                  <li>• PHP</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Code Examples</CardTitle>
                <CardDescription>Ready-to-use code snippets and tutorials</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Basic Integration</li>
                  <li>• Advanced Use Cases</li>
                  <li>• Webhook Handling</li>
                  <li>• Batch Processing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Tutorials</CardTitle>
                <CardDescription>Step-by-step guides for common scenarios</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Building a Chatbot</li>
                  <li>• Content Moderation</li>
                  <li>• Data Analysis Pipeline</li>
                  <li>• Real-time Processing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Need Help?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our developer community and support team are here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Join Developer Community
            </Button>
            <Button size="lg" variant="outline">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
