import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const featuredPost = {
    title: "The Science Behind Proboscis-Inspired AI Detection",
    excerpt:
      "Discover how nature's most distinctive nose inspired our breakthrough detection algorithms and revolutionized pattern recognition.",
    author: "Dr. Sarah Chen",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Research",
    image: "/placeholder.svg?key=featured-blog",
    slug: "proboscis-inspired-ai-detection",
  }

  const blogPosts = [
    {
      title: "Getting Started with Nanoprobo API",
      excerpt: "A comprehensive guide to integrating our AI detection capabilities into your applications.",
      author: "Marcus Rodriguez",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Tutorial",
      image: "/placeholder.svg?key=api-guide",
      slug: "getting-started-nanoprobo-api",
    },
    {
      title: "AI Detection Accuracy: Benchmarking Results",
      excerpt: "See how Nanoprobo compares to industry standards with our latest performance metrics.",
      author: "Dr. Aisha Patel",
      date: "December 8, 2024",
      readTime: "6 min read",
      category: "Research",
      image: "/placeholder.svg?key=benchmarks",
      slug: "ai-detection-accuracy-benchmarks",
    },
    {
      title: "Building Scalable AI Applications",
      excerpt: "Best practices for implementing AI detection at scale in production environments.",
      author: "Marcus Rodriguez",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "Engineering",
      image: "/placeholder.svg?key=scalable-ai",
      slug: "building-scalable-ai-applications",
    },
    {
      title: "The Future of Pattern Recognition",
      excerpt: "Exploring emerging trends and technologies that will shape the next generation of AI detection.",
      author: "Dr. Sarah Chen",
      date: "December 1, 2024",
      readTime: "9 min read",
      category: "Industry",
      image: "/placeholder.svg?key=future-ai",
      slug: "future-pattern-recognition",
    },
    {
      title: "Case Study: Enterprise AI Implementation",
      excerpt: "How a Fortune 500 company improved their detection accuracy by 40% using Nanoprobo.",
      author: "Dr. Aisha Patel",
      date: "November 28, 2024",
      readTime: "4 min read",
      category: "Case Study",
      image: "/placeholder.svg?key=case-study",
      slug: "enterprise-ai-implementation",
    },
    {
      title: "Understanding AI Model Training",
      excerpt: "Deep dive into how we train our proboscis-inspired models for maximum accuracy.",
      author: "Dr. Sarah Chen",
      date: "November 25, 2024",
      readTime: "10 min read",
      category: "Research",
      image: "/placeholder.svg?key=model-training",
      slug: "understanding-ai-model-training",
    },
  ]

  const categories = ["All", "Research", "Tutorial", "Engineering", "Industry", "Case Study"]

  const resources = [
    {
      title: "System Status",
      description: "Monitor the real-time status of all Nanoprobo services and infrastructure.",
      icon: "📊",
      link: "/status",
    },
    {
      title: "SDK Downloads",
      description: "Official SDKs for Python, JavaScript, Java, and more.",
      icon: "💾",
      link: "/downloads",
    },
    {
      title: "Code Examples",
      description: "Ready-to-use code samples and integration examples.",
      icon: "💻",
      link: "/examples",
    },
    {
      title: "Community Forum",
      description: "Connect with other developers and get help from our community.",
      icon: "👥",
      link: "/community",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Blog & Resources
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Insights & <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Stay updated with the latest in AI detection technology, tutorials, and industry insights.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Search articles..." className="pl-10 pr-4 py-2" />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Featured Article</h2>
          </div>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <Badge variant="secondary" className="mb-4">
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl font-bold mb-4 text-balance">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-6 text-pretty">{featuredPost.excerpt}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>

                <Button asChild>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild className="p-0 h-auto">
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Developer Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to get started with Nanoprobo's AI detection platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow group">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{resource.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={resource.link}>
                      Access <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest AI detection insights, tutorials, and product updates.
          </p>
          <Button size="lg" asChild>
            <Link href="/#newsletter">Subscribe to Newsletter</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
