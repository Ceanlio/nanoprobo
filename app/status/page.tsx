import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "System Status - Nanoprobo",
  description: "Real-time status of Nanoprobo services and infrastructure.",
}

export default function StatusPage() {
  const services = [
    { name: "API Gateway", status: "operational", uptime: "99.99%" },
    { name: "AI Processing Engine", status: "operational", uptime: "99.98%" },
    { name: "Authentication Service", status: "operational", uptime: "100%" },
    { name: "Database Cluster", status: "operational", uptime: "99.97%" },
    { name: "CDN Network", status: "operational", uptime: "99.99%" },
    { name: "Monitoring System", status: "operational", uptime: "99.95%" },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "degraded":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case "outage":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      default:
        return <Clock className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Operational</Badge>
      case "degraded":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Degraded</Badge>
      case "outage":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Outage</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">System Status</h1>
          <p className="text-lg text-gray-600 mb-6">Real-time status of all Nanoprobo services</p>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <span className="text-xl font-semibold text-green-700">All Systems Operational</span>
          </div>
        </div>

        {/* Overall Status */}
        <Card className="mb-8 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              Overall System Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">99.98%</div>
                <div className="text-sm text-gray-600">Overall Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">45ms</div>
                <div className="text-sm text-gray-600">Avg Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
                <div className="text-sm text-gray-600">Active Incidents</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Status */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Service Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {services.map((service) => (
                <div key={service.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(service.status)}
                    <span className="font-medium text-gray-900">{service.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">{service.uptime} uptime</span>
                    {getStatusBadge(service.status)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Incidents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Recent Incidents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-900 mb-2">No Recent Incidents</p>
              <p className="text-gray-600">All systems have been running smoothly for the past 30 days.</p>
            </div>
          </CardContent>
        </Card>

        {/* Maintenance Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Scheduled Maintenance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-900 mb-2">No Scheduled Maintenance</p>
              <p className="text-gray-600">We'll notify you in advance of any planned maintenance windows.</p>
            </div>
          </CardContent>
        </Card>

        {/* Subscribe to Updates */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Stay Updated</h2>
          <p className="text-gray-600 mb-6">Subscribe to receive notifications about service status changes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
