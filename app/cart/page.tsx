import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, Heart, Minus, Plus, Trash2, ShoppingBag, ArrowRight, Gift, Shield } from "lucide-react"
import Link from "next/link"

const cartItems = [
  {
    id: 1,
    name: "Aurora's Dream Gown",
    collection: "Royal Dreams",
    price: 285,
    originalPrice: 320,
    image: "/aurora-dream-gown-pink-princess-dress.jpg",
    size: "Size 6",
    quantity: 1,
    isOnSale: true,
  },
  {
    id: 2,
    name: "Enchanted Forest Ensemble",
    collection: "Fairy Tale Adventures",
    price: 240,
    image: "/enchanted-forest-ensemble-fantasy-outfit.jpg",
    size: "Size 4",
    quantity: 2,
    isOnSale: false,
  },
]

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const savings = cartItems.reduce((sum, item) => {
    if (item.originalPrice) {
      return sum + (item.originalPrice - item.price) * item.quantity
    }
    return sum
  }, 0)
  const shipping = 0 // Free shipping
  const total = subtotal + shipping

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
                <ShoppingBag className="h-4 w-4 mr-2" />
                Cart ({cartItems.length})
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="font-sans text-3xl font-bold text-foreground">Shopping Cart</h1>
                <span className="text-muted-foreground">{cartItems.length} items</span>
              </div>

              {cartItems.map((item) => (
                <Card key={item.id} className="border-border bg-card">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-6 items-center">
                      <div className="relative">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        {item.isOnSale && (
                          <Badge className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground">
                            Sale
                          </Badge>
                        )}
                      </div>

                      <div className="md:col-span-2 space-y-2">
                        <Badge variant="outline" className="text-xs">
                          {item.collection}
                        </Badge>
                        <h3 className="font-sans text-lg font-semibold text-card-foreground">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.size}</p>
                        <div className="flex items-center space-x-2">
                          <span className="font-sans text-lg font-bold text-card-foreground">${item.price}</span>
                          {item.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">${item.originalPrice}</span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col items-end space-y-4">
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button variant="outline" size="sm">
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Continue Shopping */}
              <div className="pt-6">
                <Link href="/collections">
                  <Button variant="outline" className="bg-transparent">
                    <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="font-sans text-xl text-card-foreground">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium text-card-foreground">${subtotal}</span>
                  </div>
                  {savings > 0 && (
                    <div className="flex justify-between text-accent">
                      <span>You Save</span>
                      <span className="font-medium">-${savings}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium text-accent">Free</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between">
                      <span className="font-sans text-lg font-semibold text-card-foreground">Total</span>
                      <span className="font-sans text-lg font-bold text-card-foreground">${total}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Checkout Button */}
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Crown className="h-4 w-4 mr-2" />
                Proceed to Checkout
              </Button>

              {/* Security & Benefits */}
              <Card className="border-border bg-muted/30">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Shield className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">Secure checkout with SSL encryption</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Gift className="h-4 w-4 text-secondary" />
                    <span className="text-muted-foreground">Free gift wrapping on all orders</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Heart className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">30-day happiness guarantee</span>
                  </div>
                </CardContent>
              </Card>

              {/* Promo Code */}
              <Card className="border-border bg-card">
                <CardContent className="p-4">
                  <h3 className="font-sans font-semibold text-card-foreground mb-3">Promo Code</h3>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 text-sm rounded-lg border border-input bg-background text-foreground"
                    />
                    <Button variant="outline" size="sm">
                      Apply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
