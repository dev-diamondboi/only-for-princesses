import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Sparkles, Crown, Shield, Wand2 } from "lucide-react"
import Link from "next/link"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-secondary" />
              <span className="font-sans text-xl font-bold text-foreground">Only for Princesses™</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/collections" className="text-foreground hover:text-accent transition-colors">
                Collections
              </Link>
              <Link href="/stories" className="text-foreground hover:text-accent transition-colors">
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
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-muted">
        <div className="absolute inset-0 bg-[url('/luxury-children-fashion-boutique-interior.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-secondary-foreground">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Therapeutic Fashion
                </Badge>
                <h1 className="font-sans text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Where Haute Couture Meets
                  <span className="text-accent block">Little Dreams</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                  Revolutionary luxury children's fashion that combines exquisite design with child psychology and
                  safety technology. Every piece tells a story, every story empowers a princess.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Crown className="h-4 w-4 mr-2" />
                  Shop Collections
                </Button>
                <Button variant="outline" size="lg">
                  <Wand2 className="h-4 w-4 mr-2" />
                  Discover Stories
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">Trusted by 1000+ families</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/elegant-little-girl-in-luxury-pink-dress-princess-.jpg"
                  alt="Little princess in luxury fashion"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground p-3 rounded-full shadow-lg">
                  <Shield className="h-6 w-6" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-4 rounded-2xl shadow-lg">
                <div className="text-sm font-medium">Therapeutic Benefits</div>
                <div className="text-xs opacity-80">Confidence • Creativity • Joy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-sans text-3xl lg:text-4xl font-bold text-foreground">
              Why Choose Only for Princesses™
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every piece is crafted with love, designed with purpose, and created to empower your little princess.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Crown className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-sans text-xl font-semibold text-card-foreground">Haute Couture Quality</h3>
                <p className="text-muted-foreground">
                  Premium materials and exquisite craftsmanship in every stitch, designed to last and inspire.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-sans text-xl font-semibold text-card-foreground">Therapeutic Design</h3>
                <p className="text-muted-foreground">
                  Each piece incorporates child psychology principles to boost confidence and emotional well-being.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-sans text-xl font-semibold text-card-foreground">Safety Technology</h3>
                <p className="text-muted-foreground">
                  Advanced safety features and child-friendly materials ensure comfort and protection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup variant="hero" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-sans text-3xl lg:text-4xl font-bold text-foreground">
              Ready to Empower Your Little Princess?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of families who have discovered the magic of therapeutic luxury fashion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Sparkles className="h-4 w-4 mr-2" />
                Start Shopping
              </Button>
              <Button variant="outline" size="lg">
                Learn Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Crown className="h-6 w-6 text-secondary" />
                <span className="font-sans text-lg font-bold text-card-foreground">Only for Princesses™</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Luxury children's fashion that empowers and inspires little princesses worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-sans font-semibold text-card-foreground">Shop</h4>
              <div className="space-y-2 text-sm">
                <Link href="/collections" className="text-muted-foreground hover:text-accent transition-colors block">
                  Collections
                </Link>
                <Link href="/new-arrivals" className="text-muted-foreground hover:text-accent transition-colors block">
                  New Arrivals
                </Link>
                <Link href="/sale" className="text-muted-foreground hover:text-accent transition-colors block">
                  Sale
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-sans font-semibold text-card-foreground">About</h4>
              <div className="space-y-2 text-sm">
                <Link href="/stories" className="text-muted-foreground hover:text-accent transition-colors block">
                  Character Stories
                </Link>
                <Link href="/blog" className="text-muted-foreground hover:text-accent transition-colors block">
                  Blog
                </Link>
                <Link href="/mission" className="text-muted-foreground hover:text-accent transition-colors block">
                  Our Mission
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-sans font-semibold text-card-foreground">Support</h4>
              <div className="space-y-2 text-sm">
                <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors block">
                  Contact Us
                </Link>
                <Link href="/size-guide" className="text-muted-foreground hover:text-accent transition-colors block">
                  Size Guide
                </Link>
                <Link href="/returns" className="text-muted-foreground hover:text-accent transition-colors block">
                  Returns
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Only for Princesses™. All rights reserved. Empowering little princesses worldwide.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Chat Widget */}
      <WhatsAppChat />
    </div>
  )
}
