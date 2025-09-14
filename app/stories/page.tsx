import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, Heart, Star, Sparkles, BookOpen, Wand2, Play } from "lucide-react"
import Link from "next/link"

const stories = [
  {
    id: 1,
    title: "Princess Aurora's Confidence Journey",
    character: "Aurora",
    description:
      "Follow Aurora as she discovers her inner strength through the magic of her enchanted gown, learning that true beauty comes from confidence and kindness.",
    image: "/princess-aurora-confidence-story-illustration.jpg",
    readTime: "5 min read",
    ageGroup: "Ages 4-8",
    therapeuticBenefit: "Self-Confidence",
    featured: true,
    videoAvailable: true,
  },
  {
    id: 2,
    title: "Bella's Garden of Friendship",
    character: "Bella",
    description:
      "Join Bella in her magical garden dress as she learns the importance of friendship and how helping others makes her heart bloom like the flowers on her dress.",
    image: "/bella-garden-friendship-story-illustration.jpg",
    readTime: "4 min read",
    ageGroup: "Ages 3-7",
    therapeuticBenefit: "Social Skills",
    featured: false,
    videoAvailable: false,
  },
  {
    id: 3,
    title: "Luna's Moonlight Adventure",
    character: "Luna",
    description:
      "Experience Luna's nighttime adventure in her shimmering moonlight gown, where she overcomes her fear of the dark and discovers the beauty of the night sky.",
    image: "/luna-moonlight-adventure-story-illustration.jpg",
    readTime: "6 min read",
    ageGroup: "Ages 5-9",
    therapeuticBenefit: "Overcoming Fears",
    featured: true,
    videoAvailable: true,
  },
  {
    id: 4,
    title: "Sophia's Creative Expression",
    character: "Sophia",
    description:
      "Watch Sophia paint the world with colors in her artistic dress, learning that creativity has no limits and every child is an artist in their own special way.",
    image: "/sophia-creative-expression-story-illustration.jpg",
    readTime: "4 min read",
    ageGroup: "Ages 4-8",
    therapeuticBenefit: "Creativity",
    featured: false,
    videoAvailable: true,
  },
  {
    id: 5,
    title: "Emma's Kindness Crown",
    character: "Emma",
    description:
      "Discover how Emma's special crown grows brighter with every act of kindness, teaching that the most beautiful accessory is a caring heart.",
    image: "/emma-kindness-crown-story-illustration.jpg",
    readTime: "5 min read",
    ageGroup: "Ages 3-7",
    therapeuticBenefit: "Empathy",
    featured: true,
    videoAvailable: false,
  },
  {
    id: 6,
    title: "Zoe's Brave Heart",
    character: "Zoe",
    description:
      "Follow Zoe as her courage-giving cape helps her stand up for what's right, showing that even the smallest princess can make the biggest difference.",
    image: "/zoe-brave-heart-story-illustration.jpg",
    readTime: "7 min read",
    ageGroup: "Ages 6-10",
    therapeuticBenefit: "Courage",
    featured: false,
    videoAvailable: true,
  },
]

const therapeuticBenefits = [
  {
    benefit: "Self-Confidence",
    description: "Stories that help children believe in themselves",
    icon: Crown,
    color: "text-primary",
  },
  {
    benefit: "Social Skills",
    description: "Learning friendship and communication",
    icon: Heart,
    color: "text-accent",
  },
  {
    benefit: "Overcoming Fears",
    description: "Building courage to face challenges",
    icon: Star,
    color: "text-secondary",
  },
  {
    benefit: "Creativity",
    description: "Encouraging artistic expression and imagination",
    icon: Sparkles,
    color: "text-primary",
  },
  {
    benefit: "Empathy",
    description: "Understanding and caring for others",
    icon: Heart,
    color: "text-accent",
  },
  {
    benefit: "Courage",
    description: "Finding strength to do what's right",
    icon: Star,
    color: "text-secondary",
  },
]

export default function StoriesPage() {
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
              <Link href="/stories" className="text-accent font-medium">
                Stories
              </Link>
              <Link href="/blog" className="text-foreground hover:text-accent transition-colors">
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
      <section className="bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <BookOpen className="h-16 w-16 text-accent" />
            </div>
            <h1 className="font-sans text-4xl lg:text-5xl font-bold text-foreground">Character Stories</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every dress tells a story, every story teaches a lesson. Discover the magical world where fashion meets
              therapy, helping your little princess grow in confidence, creativity, and kindness.
            </p>
          </div>
        </div>
      </section>

      {/* Therapeutic Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sans text-3xl font-bold text-foreground mb-4">
              Therapeutic Benefits Through Storytelling
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our stories are carefully crafted with child psychologists to promote emotional development and
              well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {therapeuticBenefits.map((item, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-muted`}>
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <h3 className="font-sans text-lg font-semibold text-card-foreground mb-2">{item.benefit}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sans text-3xl font-bold text-foreground mb-4">Featured Stories</h2>
            <p className="text-muted-foreground">Our most beloved tales that inspire and empower young hearts.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {stories
              .filter((story) => story.featured)
              .map((story) => (
                <Card
                  key={story.id}
                  className="group hover:shadow-xl transition-all duration-300 border-border bg-card overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {story.videoAvailable && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="sm" className="bg-background/90 text-foreground hover:bg-background">
                          <Play className="h-4 w-4 mr-2" />
                          Watch Story
                        </Button>
                      </div>
                    )}
                    <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {story.therapeuticBenefit}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{story.readTime}</span>
                      </div>
                      <h3 className="font-sans text-xl font-semibold text-card-foreground">{story.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{story.description}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Character: {story.character}</span>
                        <span>{story.ageGroup}</span>
                      </div>
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Read Story
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Stories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sans text-3xl font-bold text-foreground mb-4">All Character Stories</h2>
            <p className="text-muted-foreground">Explore our complete collection of therapeutic stories.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <Card key={story.id} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    {story.videoAvailable && (
                      <Badge className="absolute top-2 right-2 bg-secondary text-secondary-foreground">
                        <Play className="h-3 w-3 mr-1" />
                        Video
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {story.therapeuticBenefit}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{story.readTime}</span>
                    </div>
                    <h3 className="font-sans text-lg font-semibold text-card-foreground">{story.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{story.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                      <span>{story.ageGroup}</span>
                      <span>Character: {story.character}</span>
                    </div>
                  </div>
                </CardContent>
                <div className="p-4 pt-0">
                  <Button variant="outline" className="w-full bg-transparent">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Story
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-sans text-3xl font-bold text-foreground">Bring These Stories to Life</h2>
            <p className="text-muted-foreground">
              Each story is inspired by our luxury collections. Discover the dresses that make these magical tales come
              alive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Crown className="h-4 w-4 mr-2" />
                Shop Collections
              </Button>
              <Button variant="outline" size="lg">
                <Wand2 className="h-4 w-4 mr-2" />
                Create Custom Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
