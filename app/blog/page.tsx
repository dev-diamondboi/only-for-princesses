import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, Heart, Calendar, User, ArrowRight, Search, Tag } from "lucide-react"
import Link from "next/link"
import { NewsletterSignup } from "@/components/newsletter-signup"

const blogPosts = [
  {
    id: 1,
    title: "The Psychology Behind Children's Fashion Choices",
    excerpt:
      "Discover how clothing choices impact your child's emotional development and self-confidence. Learn the science behind therapeutic fashion.",
    author: "Dr. Sarah Mitchell",
    authorRole: "Child Psychologist",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "Psychology",
    image: "/psychology-children-fashion-choices-blog.jpg",
    featured: true,
    tags: ["Psychology", "Child Development", "Fashion Therapy"],
  },
  {
    id: 2,
    title: "Sustainable Luxury: Our Commitment to Ethical Fashion",
    excerpt:
      "Learn about our sustainable practices and how we create luxury children's fashion while protecting the environment for future generations.",
    author: "Maria Rodriguez",
    authorRole: "Sustainability Director",
    publishDate: "2024-01-12",
    readTime: "6 min read",
    category: "Sustainability",
    image: "/sustainable-luxury-ethical-fashion-blog.jpg",
    featured: false,
    tags: ["Sustainability", "Ethical Fashion", "Environment"],
  },
  {
    id: 3,
    title: "Building Confidence Through Dress-Up Play",
    excerpt:
      "Explore how imaginative play with beautiful clothing helps children develop self-esteem, creativity, and social skills.",
    author: "Emma Thompson",
    authorRole: "Child Development Specialist",
    publishDate: "2024-01-10",
    readTime: "5 min read",
    category: "Child Development",
    image: "/building-confidence-dress-up-play-blog.jpg",
    featured: true,
    tags: ["Confidence", "Play Therapy", "Child Development"],
  },
  {
    id: 4,
    title: "The Art of Haute Couture for Little Ones",
    excerpt:
      "Take a behind-the-scenes look at our design process and the craftsmanship that goes into creating each magical piece.",
    author: "Isabella Chen",
    authorRole: "Head Designer",
    publishDate: "2024-01-08",
    readTime: "7 min read",
    category: "Design",
    image: "/art-haute-couture-little-ones-blog.jpg",
    featured: false,
    tags: ["Design", "Craftsmanship", "Haute Couture"],
  },
  {
    id: 5,
    title: "Color Psychology in Children's Clothing",
    excerpt: "Understanding how different colors affect mood, behavior, and emotional well-being in young children.",
    author: "Dr. James Wilson",
    authorRole: "Color Therapist",
    publishDate: "2024-01-05",
    readTime: "6 min read",
    category: "Psychology",
    image: "/color-psychology-children-clothing-blog.jpg",
    featured: true,
    tags: ["Color Psychology", "Mood", "Therapy"],
  },
  {
    id: 6,
    title: "Caring for Your Princess Dresses: A Complete Guide",
    excerpt: "Expert tips on how to maintain the beauty and longevity of your luxury children's fashion pieces.",
    author: "Sophie Laurent",
    authorRole: "Textile Care Expert",
    publishDate: "2024-01-03",
    readTime: "4 min read",
    category: "Care Guide",
    image: "/caring-princess-dresses-complete-guide-blog.jpg",
    featured: false,
    tags: ["Care Guide", "Maintenance", "Luxury Fashion"],
  },
]

const categories = [
  { name: "Psychology", count: 8 },
  { name: "Child Development", count: 12 },
  { name: "Design", count: 6 },
  { name: "Sustainability", count: 4 },
  { name: "Care Guide", count: 5 },
  { name: "Fashion Therapy", count: 7 },
]

const popularTags = [
  "Child Development",
  "Psychology",
  "Confidence",
  "Fashion Therapy",
  "Sustainability",
  "Design",
  "Color Psychology",
  "Play Therapy",
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-secondary" />
              <Link href="/" className="font-sans text-xl font-bold text-foreground">
                Only for Princesses™
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/collections" className="text-foreground hover:text-accent transition-colors">
                Collections
              </Link>
              <Link href="/stories" className="text-foreground hover:text-accent transition-colors">
                Stories
              </Link>
              <Link href="/blog" className="text-accent font-medium">
                Blog
              </Link>
              <Link href="/about" className="text-foreground hover:text-accent transition-colors">
                About
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                Cart (0)
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="font-sans text-4xl lg:text-5xl font-bold text-foreground">The Princess Journal</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Insights, stories, and expert advice on therapeutic fashion, child development, and creating magical
              moments for your little princess.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            <section className="mb-16">
              <h2 className="font-sans text-2xl font-bold text-foreground mb-8">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts
                  .filter((post) => post.featured)
                  .slice(0, 2)
                  .map((post) => (
                    <Card
                      key={post.id}
                      className="group hover:shadow-xl transition-all duration-300 border-border bg-card overflow-hidden"
                    >
                      <div className="relative">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">Featured</Badge>
                      </div>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs">
                              {post.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{post.readTime}</span>
                          </div>

                          <h3 className="font-sans text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors">
                            {post.title}
                          </h3>

                          <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>

                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <User className="h-3 w-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                            </div>
                          </div>

                          <Button
                            variant="outline"
                            className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                          >
                            Read Article
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </section>

            {/* All Posts */}
            <section>
              <h2 className="font-sans text-2xl font-bold text-foreground mb-8">Latest Articles</h2>
              <div className="space-y-6">
                {blogPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group hover:shadow-lg transition-all duration-300 border-border bg-card"
                  >
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="relative">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover rounded-l-lg group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs">
                              {post.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{post.readTime}</span>
                          </div>

                          <h3 className="font-sans text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors">
                            {post.title}
                          </h3>

                          <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>

                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <User className="h-3 w-3" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-3 w-3" />
                                <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                              </div>
                            </div>

                            <Button variant="ghost" size="sm" className="group-hover:text-accent transition-colors">
                              Read More
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8 sticky top-24">
              {/* Categories */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <h3 className="font-sans text-lg font-semibold text-card-foreground">Categories</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <Link
                        href={`/blog/category/${category.name.toLowerCase()}`}
                        className="text-muted-foreground hover:text-accent transition-colors text-sm"
                      >
                        {category.name}
                      </Link>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{category.count}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <h3 className="font-sans text-lg font-semibold text-card-foreground">Popular Tags</h3>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <NewsletterSignup className="sticky top-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
