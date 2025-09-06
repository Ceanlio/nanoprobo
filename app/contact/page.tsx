import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email for general inquiries",
      contact: "hello@nanoprobo.com",
      action: "mailto:hello@nanoprobo.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our support",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support in real-time",
      contact: "Available 9 AM - 6 PM PST",
      action: "#",
    },
  ]

  const offices = [
    {
      city: "San Francisco",
      address: "123 Innovation Drive, Suite 400",
      zipcode: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@nanoprobo.com",
    },
    {
      city: "New York",
      address: "456 Tech Avenue, Floor 12",
      zipcode: "New York, NY 10001",
      phone: "+1 (555) 987-6543",
      email: "ny@nanoprobo.com",
    },
    {
      city: "London",
      address: "789 AI Street, Level 8",
      zipcode: "London, UK EC2A 4DP",
      phone: "+44 20 7123 4567",
      email: "london@nanoprobo.com",
    },
  ]

  const faqs = [
    {
      question: "How quickly can I get started with Nanoprobo?",
      answer:
        "You can start using our API within minutes. Sign up for a free account, get your API key, and begin making calls immediately.",
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer:
        "Yes, we provide tailored solutions for enterprise clients including custom model training, on-premise deployment, and dedicated support.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer email support for all users, priority support for paid plans, and 24/7 phone support for enterprise customers.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Contact Us
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Have questions about our AI detection platform? Want to discuss enterprise solutions? We're here to
            help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <Button variant="outline" asChild>
                    <Link href={method.action}>{method.contact}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry">Inquiry Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Question</SelectItem>
                      <SelectItem value="sales">Sales Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="press">Press & Media</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or question..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full" size="lg">
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-muted-foreground">Monday - Friday: 9 AM - 6 PM PST</p>
                      <p className="text-muted-foreground">Weekend: Emergency support only</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Enterprise Sales</p>
                      <p className="text-muted-foreground">For custom solutions and volume pricing</p>
                      <Link href="mailto:enterprise@nanoprobo.com" className="text-primary hover:underline">
                        enterprise@nanoprobo.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Technical Support</p>
                      <p className="text-muted-foreground">API help and integration assistance</p>
                      <Link href="mailto:support@nanoprobo.com" className="text-primary hover:underline">
                        support@nanoprobo.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick FAQ */}
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Answers</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">{faq.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Offices</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit us at one of our global locations or reach out to your nearest office
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold">{office.city}</h3>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>{office.address}</p>
                    <p>{office.zipcode}</p>
                    <div className="pt-2 space-y-1">
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {office.phone}
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {office.email}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't wait - start building with Nanoprobo's powerful AI detection capabilities today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/#early-access">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
