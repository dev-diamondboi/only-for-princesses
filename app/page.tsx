import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">👑</span>
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
                💖
              </Button>
              <Button variant="outline" size="sm">
                Cart (0)
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
        <div className="absolute inset-0 bg-[url('/luxury-children-fashion-boutique-interior.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-pink-100 text-pink-800 border-pink-200">
                  ✨ Therapeutic Fashion
                </Badge>
                <h1 className="font-serif text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Where Haute Couture Meets
                  <span className="text-pink-600 block">Little Dreams</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                  Revolutionary luxury children's fashion that combines exquisite design with child psychology and
                  safety technology. Every piece tells a story, every story empowers a princess.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                  👑 Shop Collections
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-pink-200 text-pink-700 hover:bg-pink-50 bg-transparent"
                >
                  🪄 Discover Stories
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-1">
                  <span className="text-amber-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm text-gray-500 ml-2">Trusted by 1000+ families</span>
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
                <div className="absolute -top-4 -right-4 bg-amber-100 text-amber-800 p-3 rounded-full shadow-lg">🛡️</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-pink-100 text-pink-800 p-4 rounded-2xl shadow-lg">
                <div className="text-sm font-medium">Therapeutic Benefits</div>
                <div className="text-xs opacity-80">Confidence • Creativity • Joy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900">Why Choose Only for Princesses™</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every piece is crafted with love, designed with purpose, and created to empower your little princess.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">👑</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900">Haute Couture Quality</h3>
                <p className="text-gray-600">
                  Premium materials and exquisite craftsmanship in every stitch, designed to last and inspire.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">💖</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900">Therapeutic Design</h3>
                <p className="text-gray-600">
                  Each piece incorporates child psychology principles to boost confidence and emotional well-being.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900">Safety Technology</h3>
                <p className="text-gray-600">
                  Advanced safety features and child-friendly materials ensure comfort and protection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-pink-100 via-rose-100 to-amber-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900">
              Ready to Empower Your Little Princess?
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of families who have discovered the magic of therapeutic luxury fashion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                ✨ Start Shopping
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-pink-200 text-pink-700 hover:bg-pink-50 bg-transparent"
              >
                Learn Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-xl">👑</span>
                <span className="font-serif text-lg font-bold text-gray-900">Only for Princesses™</span>
              </div>
              <p className="text-gray-600 text-sm">
                Luxury children's fashion that empowers and inspires little princesses worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif font-semibold text-gray-900">Shop</h4>
              <div className="space-y-2 text-sm">
                <Link href="/collections" className="text-gray-600 hover:text-pink-600 transition-colors block">
                  Collections
                </Link>
                <Link href="/new-arrivals" className="text-gray-600 hover:text-pink-600 transition-colors block">
                  New Arrivals
                </Link>
                <Link href="/sale" className="text-gray-600 hover:text-pink-600 transition-colors block">
                  Sale
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif font-semibold text-gray-900">About</h4>
              <div className="space-y-2 text-sm">
                <Link href="/stories" className="text-gray-600 hover:text-pink-600 transition-colors block">
                  Character Stories
                </Link>
                <Link href="/blog" className="text-gray-600 hover:text-pink-600 transition-colors block">
                  Blog
                </Link>
                <Link href="/mission" className="text-gray-600 hover:text-pink-600 transition-colors block">
                  Our Mission
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif font-semibold text-gray-900">Support</h4>
              <div className="space-y-2 text-sm">
                <Link href="/contact" className="text-gray-600 hover:text-pink-600 transition-colors block">
                  Contact Us
                </Link>
                <Link href="/size-guide" className="text-gray-600 hover:text-pink-600 transition-colors block">
                  Size Guide
                </Link>
                <Link href="/returns" className="text-gray-600 hover:text-pink-600 transition-colors block">
                  Returns
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2024 Only for Princesses™. All rights reserved. Empowering little princesses worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
