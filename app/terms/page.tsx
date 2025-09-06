import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms of Service - Nanoprobo",
  description: "Terms of service and user agreement for Nanoprobo AI platform.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">Terms of Service</h1>
          <p className="text-lg text-gray-600">Last updated: December 15, 2024</p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using Nanoprobo's services, you agree to be bound by these Terms of Service and all
              applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from
              using our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of Service</h2>
            <p className="text-gray-700 mb-6">
              Nanoprobo provides artificial intelligence and machine learning services through our API platform. Our
              services include but are not limited to text analysis, data processing, and AI model inference
              capabilities.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Accounts</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
              <li>You may not share your account with others or create multiple accounts</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptable Use</h2>
            <p className="text-gray-700 mb-4">You agree not to use our services to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful, offensive, or illegal content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our services for competitive analysis or reverse engineering</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Fees are charged based on your selected plan and usage</li>
              <li>All payments are due in advance and non-refundable</li>
              <li>We reserve the right to change pricing with 30 days notice</li>
              <li>Failure to pay may result in service suspension</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              All content, features, and functionality of our services are owned by Nanoprobo and are protected by
              copyright, trademark, and other intellectual property laws. You retain ownership of your data and content.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              In no event shall Nanoprobo be liable for any indirect, incidental, special, consequential, or punitive
              damages arising out of your use of our services, even if we have been advised of the possibility of such
              damages.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 mb-6">
              We may terminate or suspend your account and access to our services at our sole discretion, without prior
              notice, for conduct that we believe violates these Terms of Service or is harmful to other users or our
              business.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700">
              For questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:legal@nanoprobo.com" className="text-orange-600 hover:text-orange-700">
                legal@nanoprobo.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
