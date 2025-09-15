import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-rose-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-serif font-bold text-rose-600">
              Only for Princesses™
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-rose-600 transition-colors">
                Home
              </Link>
              <Link href="/collections" className="text-gray-700 hover:text-rose-600 transition-colors">
                Collections
              </Link>
              <Link href="/stories" className="text-gray-700 hover:text-rose-600 transition-colors">
                Stories
              </Link>
              <Link href="/about" className="text-rose-600 font-medium">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-rose-600 transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-rose-100 text-rose-800 hover:bg-rose-200">Our Story</Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Where Fashion Meets
            <span className="text-rose-600"> Psychology</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At Only for Princesses™, we believe that every child deserves to feel confident, empowered, and beautiful.
            Our therapeutic approach to luxury children's fashion combines haute couture craftsmanship with
            psychological wellness.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We create more than just beautiful dresses – we craft confidence, nurture self-expression, and celebrate
                the unique spirit of every child. Our therapeutic fashion approach is rooted in child psychology
                research, ensuring that each piece not only looks stunning but also contributes to positive emotional
                development.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Boost self-confidence through beautiful, well-fitted garments</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Encourage creative self-expression and individuality</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Support emotional well-being through therapeutic fashion</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👑</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Therapeutic Fashion</h3>
                <p className="text-gray-600">
                  Our designs are informed by child psychology research, ensuring that each piece contributes to
                  positive emotional development and self-esteem building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every decision we make is guided by our commitment to quality, safety, and the emotional well-being of
              children.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-rose-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Luxury Craftsmanship</h3>
                <p className="text-gray-600">
                  Each piece is meticulously crafted using the finest materials and haute couture techniques, ensuring
                  exceptional quality and durability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-rose-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Safety First</h3>
                <p className="text-gray-600">
                  All our garments undergo rigorous safety testing and use only child-safe materials, giving parents
                  complete peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="border-rose-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Sustainable Luxury</h3>
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
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of designers, child psychologists, and craftspeople work together to create magical
              experiences for children.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-rose-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👩‍🎨</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Isabella Chen</h3>
              <p className="text-rose-600 mb-3">Creative Director</p>
              <p className="text-gray-600 text-sm">
                Former haute couture designer with 15 years of experience in luxury children's fashion.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-rose-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Dr. Michael Rodriguez</h3>
              <p className="text-rose-600 mb-3">Child Psychologist</p>
              <p className="text-gray-600 text-sm">
                Specialist in child development and self-esteem, ensuring our designs support emotional well-being.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-rose-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👩‍💼</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Sarah Williams</h3>
              <p className="text-rose-600 mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Mother of three and advocate for children's emotional wellness through fashion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-rose-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Ready to Empower Your Little Princess?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our collections and give your child the gift of confidence, creativity, and beautiful memories that
            will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8">
              <Link href="/collections">Shop Collections</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-rose-600 text-rose-600 hover:bg-rose-50 px-8 bg-transparent"
            >
              <Link href="/stories">Read Our Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Only for Princesses™</h3>
              <p className="text-gray-400 text-sm">
                Luxury children's fashion with therapeutic benefits. Empowering young minds through beautiful design.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link href="/collections" className="block text-gray-400 hover:text-white transition-colors">
                  Collections
                </Link>
                <Link href="/stories" className="block text-gray-400 hover:text-white transition-colors">
                  Stories
                </Link>
                <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-400">Size Guide</p>
                <p className="text-gray-400">Care Instructions</p>
                <p className="text-gray-400">Returns & Exchanges</p>
                <p className="text-gray-400">Contact Us</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-400">WhatsApp Support</p>
                <p className="text-gray-400">Newsletter</p>
                <p className="text-gray-400">Instagram</p>
                <p className="text-gray-400">Pinterest</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Only for Princesses™. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
