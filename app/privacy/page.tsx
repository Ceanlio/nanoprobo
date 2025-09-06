import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy - Nanoprobo",
  description: "Nanoprobo's privacy policy and data protection practices.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Last updated: December 15, 2024</p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              At Nanoprobo ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security
              of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you use our AI platform and services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Name and contact information (email address, phone number)</li>
              <li>Account credentials and authentication information</li>
              <li>Payment and billing information</li>
              <li>Professional information (company name, job title)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Usage Data</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>API usage statistics and performance metrics</li>
              <li>Log data including IP addresses, browser type, and access times</li>
              <li>Device information and technical specifications</li>
              <li>User interactions with our platform and services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Provide, maintain, and improve our AI services</li>
              <li>Process transactions and manage your account</li>
              <li>Send important updates and security notifications</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement industry-standard security measures to protect your data, including encryption at rest and in
              transit, regular security audits, and access controls. However, no method of transmission over the
              internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 mb-6">
              We retain your personal information only as long as necessary to fulfill the purposes outlined in this
              policy, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate data</li>
              <li>Delete your account and associated data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability for your information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@nanoprobo.com" className="text-amber-600 hover:text-amber-700">
                privacy@nanoprobo.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
