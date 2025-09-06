"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, Clock } from "lucide-react"

interface ServiceStatus {
  name: string
  status: "operational" | "degraded" | "outage"
  responseTime?: string
}

export function StatusWidget() {
  const [services, setServices] = useState<ServiceStatus[]>([
    { name: "API", status: "operational", responseTime: "45ms" },
    { name: "AI Engine", status: "operational", responseTime: "120ms" },
    { name: "Database", status: "operational", responseTime: "12ms" },
  ])

  const [overallStatus, setOverallStatus] = useState<"operational" | "degraded" | "outage">("operational")
  const [lastUpdated, setLastUpdated] = useState<string>("")

  useEffect(() => {
    // Set initial time to prevent hydration mismatch
    setLastUpdated(new Date().toLocaleTimeString('en-US', { 
      hour12: true, 
      hour: 'numeric', 
      minute: '2-digit', 
      second: '2-digit' 
    }))

    // Simulate real-time status updates (in a real app, this would be WebSocket or polling)
    const interval = setInterval(() => {
      // Keep all services operational for demo
      setServices([
        { name: "API", status: "operational", responseTime: `${Math.floor(Math.random() * 20) + 40}ms` },
        { name: "AI Engine", status: "operational", responseTime: `${Math.floor(Math.random() * 50) + 100}ms` },
        { name: "Database", status: "operational", responseTime: `${Math.floor(Math.random() * 10) + 10}ms` },
      ])
      
      // Update the last updated time
      setLastUpdated(new Date().toLocaleTimeString('en-US', { 
        hour12: true, 
        hour: 'numeric', 
        minute: '2-digit', 
        second: '2-digit' 
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "degraded":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "outage":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "text-green-600"
      case "degraded":
        return "text-yellow-600"
      case "outage":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <Card className="w-full max-w-xs sm:max-w-sm">
      <CardContent className="p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2">
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">System Status</h3>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 text-xs">
            <CheckCircle className="h-3 w-3 mr-1" />
            <span className="hidden sm:inline">All Systems Operational</span>
            <span className="sm:hidden">All Operational</span>
          </Badge>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {services.map((service) => (
            <div key={service.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {getStatusIcon(service.status)}
                <span className="text-xs sm:text-sm font-medium text-gray-700">{service.name}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                {service.responseTime && <span className="text-xs text-gray-500 hidden sm:inline">{service.responseTime}</span>}
                <span className={`text-xs font-medium ${getStatusColor(service.status)}`}>
                  {service.status === "operational"
                    ? "OK"
                    : service.status === "degraded"
                      ? "Degraded"
                      : "Outage"}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-500 gap-1">
            <span className="text-xs">Last updated: {lastUpdated || "Loading..."}</span>
            <a href="/status" className="text-amber-600 hover:text-amber-700 font-medium text-xs">
              View Details
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
