import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      {/* Navigation */}
      <nav className="border-b border-pink-100 bg-pink-50/95 backdrop-blur supports-[backdrop-filter]:bg-pink-50/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">👑</span>
              <span className="font-sans text-xl font-bold text-gray-900">Only for Princesses™</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-pink-600 transition-colors">
                Home
              </Link>
              <Link href="/collections" className="text-gray-700 hover:text-pink-600 transition-colors">
                Collections
              </Link>
              <Link href="/stories" className="text-gray-700 hover:text-pink-600 transition-colors">
                Stories
              </Link>
              <Link href="/about" className="text-pink-600 font-medium">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-pink-600 transition-colors">
                Blog
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                💖
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-pink-200 text-pink-700 hover:bg-pink-50 bg-transparent"
              >
                Cart (0)
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-200 px-4 py-2">
              ✨ Our Story
            </Badge>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Where Fashion Meets
              <span className="text-pink-600 block">Psychology</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              At Only for Princesses™, we believe that every child deserves to feel confident, empowered, and beautiful.
              Our therapeutic approach to luxury children's fashion combines haute couture craftsmanship with
              psychological wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We create more than just beautiful dresses – we craft confidence, nurture self-expression, and celebrate
                the unique spirit of every child. Our therapeutic fashion approach is rooted in child psychology
                research, ensuring that each piece not only looks stunning but also contributes to positive emotional
                development.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Boost self-confidence through beautiful, well-fitted garments</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Encourage creative self-expression and individuality</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Support emotional well-being through therapeutic fashion</p>
                </div>
              </div>
            </div>
            <Card className="border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">👑</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900">Therapeutic Fashion</h3>
                <p className="text-gray-600">
                  Our designs are informed by child psychology research, ensuring that each piece contributes to
                  positive emotional development and self-esteem building.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every decision we make is guided by our commitment to quality, safety, and the emotional well-being of
              children.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900">Luxury Craftsmanship</h3>
                <p className="text-gray-600">
                  Each piece is meticulously crafted using the finest materials and haute couture techniques, ensuring
                  exceptional quality and durability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900">Safety First</h3>
                <p className="text-gray-600">
                  All our garments undergo rigorous safety testing and use only child-safe materials, giving parents
                  complete peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900">Sustainable Luxury</h3>
                <p className="text-gray-600">
                  We're committed to ethical production practices and sustainable materials, creating beautiful pieces
                  that respect our planet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of designers, child psychologists, and craftspeople work together to create magical
              experiences for children.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-32 h-32 bg-amber-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-4xl">👩‍🎨</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900">Isabella Chen</h3>
              <p className="text-pink-600 font-medium">Creative Director</p>
              <p className="text-gray-600 text-sm">
                Former haute couture designer with 15 years of experience in luxury children's fashion.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-32 h-32 bg-pink-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-4xl">👨‍⚕️</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900">Dr. Michael Rodriguez</h3>
              <p className="text-pink-600 font-medium">Child Psychologist</p>
              <p className="text-gray-600 text-sm">
                Specialist in child development and self-esteem, ensuring our designs support emotional well-being.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-32 h-32 bg-amber-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-4xl">👩‍💼</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900">Sarah Williams</h3>
              <p className="text-pink-600 font-medium">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Mother of three and advocate for children's emotional wellness through fashion.
              </p>
            </div>
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
              Discover our collections and give your child the gift of confidence, creativity, and beautiful memories
              that will last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                👑 Shop Collections
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-pink-200 text-pink-700 hover:bg-pink-50 bg-transparent"
              >
                🪄 Read Our Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 border-t border-pink-100">
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
                <Link href="/about" className="text-gray-600 hover:text-pink-600 transition-colors block">
                  About Us
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

          <div className="border-t border-pink-100 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2024 Only for Princesses™. All rights reserved. Empowering little princesses worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
