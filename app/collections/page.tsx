import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Star, Crown, Sparkles, Filter, SortAsc } from "lucide-react"
import Link from "next/link"
import { NewsletterSignup } from "@/components/newsletter-signup"

const collections = [
  {
    id: 1,
    name: "Royal Dreams",
    description: "Enchanting gowns fit for a princess",
    image: "/royal-dreams-collection-luxury-princess-dress.jpg",
    itemCount: 12,
    priceRange: "$180 - $450",
    featured: true,
  },
  {
    id: 2,
    name: "Garden Party",
    description: "Elegant florals for special occasions",
    image: "/garden-party-collection-floral-dress-children.jpg",
    itemCount: 8,
    priceRange: "$120 - $280",
    featured: false,
  },
  {
    id: 3,
    name: "Fairy Tale Adventures",
    description: "Whimsical designs for imaginative play",
    image: "/fairy-tale-adventures-collection-fantasy-dress.jpg",
    itemCount: 15,
    priceRange: "$95 - $320",
    featured: true,
  },
  {
    id: 4,
    name: "Little Duchess",
    description: "Sophisticated styles for young ladies",
    image: "/little-duchess-collection-elegant-formal-wear.jpg",
    itemCount: 10,
    priceRange: "$200 - $500",
    featured: false,
  },
]

const products = [
  {
    id: 1,
    name: "Aurora's Dream Gown",
    collection: "Royal Dreams",
    price: 285,
    originalPrice: 320,
    image: "/aurora-dream-gown-pink-princess-dress.jpg",
    rating: 5,
    reviews: 24,
    isNew: true,
    isSale: true,
  },
  {
    id: 2,
    name: "Rose Garden Dress",
    collection: "Garden Party",
    price: 195,
    image: "/rose-garden-dress-floral-children-fashion.jpg",
    rating: 4.8,
    reviews: 18,
    isNew: false,
    isSale: false,
  },
  {
    id: 3,
    name: "Enchanted Forest Ensemble",
    collection: "Fairy Tale Adventures",
    price: 240,
    image: "/enchanted-forest-ensemble-fantasy-outfit.jpg",
    rating: 4.9,
    reviews: 31,
    isNew: true,
    isSale: false,
  },
  {
    id: 4,
    name: "Little Duchess Coat",
    collection: "Little Duchess",
    price: 380,
    image: "/little-duchess-coat-elegant-formal-wear.jpg",
    rating: 5,
    reviews: 12,
    isNew: false,
    isSale: false,
  },
  {
    id: 5,
    name: "Butterfly Ballet Tutu",
    collection: "Fairy Tale Adventures",
    price: 165,
    originalPrice: 195,
    image: "/butterfly-ballet-tutu-dance-dress.jpg",
    rating: 4.7,
    reviews: 22,
    isNew: false,
    isSale: true,
  },
  {
    id: 6,
    name: "Moonlight Serenade Gown",
    collection: "Royal Dreams",
    price: 425,
    image: "/moonlight-serenade-gown-luxury-evening-dress.jpg",
    rating: 5,
    reviews: 8,
    isNew: true,
    isSale: false,
  },
]

export default function CollectionsPage() {
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
              <Link href="/collections" className="text-accent font-medium">
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
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="font-sans text-4xl lg:text-5xl font-bold text-foreground">Luxury Collections</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our curated collections of therapeutic luxury fashion, each designed to inspire confidence and
              spark imagination in your little princess.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {collections.map((collection) => (
              <Card
                key={collection.id}
                className="group hover:shadow-xl transition-all duration-300 border-border bg-card overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {collection.featured && (
                    <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-sans text-xl font-semibold text-card-foreground mb-2">{collection.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{collection.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{collection.itemCount} pieces</span>
                    <span className="font-medium text-card-foreground">{collection.priceRange}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Explore Collection
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="border-t border-border bg-muted/30 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <SortAsc className="h-4 w-4 mr-2" />
                Sort by: Featured
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">Showing {products.length} of 45 products</div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 border-border bg-card overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && <Badge className="bg-accent text-accent-foreground">New</Badge>}
                    {product.isSale && <Badge className="bg-destructive text-destructive-foreground">Sale</Badge>}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div>
                      <Badge variant="outline" className="text-xs mb-2">
                        {product.collection}
                      </Badge>
                      <h3 className="font-sans text-lg font-semibold text-card-foreground">{product.name}</h3>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(product.rating) ? "fill-secondary text-secondary" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-sans text-xl font-bold text-card-foreground">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Crown className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup variant="hero" />
        </div>
      </section>
    </div>
  )
}
