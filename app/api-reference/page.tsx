import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Key, Zap, Database, Shield, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "API Reference - Nanoprobo",
  description: "Complete API reference for Nanoprobo. Explore endpoints, parameters, and examples.",
}

export default function APIReferencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">API Reference</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">Nanoprobo API</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Powerful AI processing API for developers. Transform data with natural language in milliseconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Get API Key
            </Button>
            <Button size="lg" variant="outline">
              View Examples
            </Button>
          </div>
        </div>
      </section>

      {/* API Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">API Overview</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-orange-200">
              <CardHeader>
                <Key className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Authentication</CardTitle>
                <CardDescription>Secure API key-based authentication</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  Authorization: Bearer YOUR_API_KEY
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardHeader>
                <Globe className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>Base URL</CardTitle>
                <CardDescription>All API requests are made to our secure endpoint</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  https://api.nanoprobo.com/v1
                </div>
              </CardContent>
            </Card>

            <Card className="border-yellow-200">
              <CardHeader>
                <Zap className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Rate Limits</CardTitle>
                <CardDescription>Generous rate limits for all plan types</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Starter:</span>
                    <span className="font-mono">1,000/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pro:</span>
                    <span className="font-mono">10,000/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Enterprise:</span>
                    <span className="font-mono">Unlimited</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">API Endpoints</h2>

          <Tabs defaultValue="analyze" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="analyze">Analyze</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="models">Models</TabsTrigger>
              <TabsTrigger value="status">Status</TabsTrigger>
            </TabsList>

            <TabsContent value="analyze" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    POST /v1/analyze
                  </CardTitle>
                  <CardDescription>Analyze text content using our advanced AI models</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Request Body</h4>
                    <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                      {`{
  "text": "Your text content here",
  "model": "nanoprobo-v1",
  "options": {
    "sentiment": true,
    "entities": true,
    "summary": true
  }
}`}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Response</h4>
                    <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                      {`{
  "id": "analysis_123",
  "status": "completed",
  "results": {
    "sentiment": {
      "score": 0.85,
      "label": "positive"
    },
    "entities": [...],
    "summary": "..."
  }
}`}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="process" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    POST /v1/process
                  </CardTitle>
                  <CardDescription>Process data through our AI pipeline</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Request Body</h4>
                    <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                      {`{
  "data": "Your data here",
  "pipeline": "standard",
  "format": "json",
  "webhook_url": "https://your-app.com/webhook"
}`}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="models" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    GET /v1/models
                  </CardTitle>
                  <CardDescription>List available AI models and their capabilities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Response</h4>
                    <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                      {`{
  "models": [
    {
      "id": "nanoprobo-v1",
      "name": "Nanoprobo V1",
      "description": "General purpose AI model",
      "capabilities": ["text", "analysis", "generation"]
    }
  ]
}`}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="status" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    GET /v1/status
                  </CardTitle>
                  <CardDescription>Check API status and health</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Response</h4>
                    <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                      {`{
  "status": "operational",
  "version": "1.0.0",
  "uptime": "99.99%",
  "response_time": "45ms"
}`}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* SDKs Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">Official SDKs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "JavaScript", install: "npm install @nanoprobo/js" },
              { name: "Python", install: "pip install nanoprobo" },
              { name: "Go", install: "go get github.com/nanoprobo/go" },
              { name: "PHP", install: "composer require nanoprobo/php" },
            ].map((sdk) => (
              <Card key={sdk.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{sdk.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-4">{sdk.install}</div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View Docs
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
