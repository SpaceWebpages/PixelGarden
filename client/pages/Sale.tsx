import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Star, Timer } from "lucide-react";

const saleProducts = [
  {
    id: 1,
    name: "Classic Wool Coat",
    price: 299,
    originalPrice: 399,
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 124,
    discount: 25,
  },
  {
    id: 2,
    name: "Cashmere Sweater",
    price: 249,
    originalPrice: 329,
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 156,
    discount: 24,
  },
  {
    id: 3,
    name: "Pleated Skirt",
    price: 149,
    originalPrice: 199,
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 73,
    discount: 25,
  },
  {
    id: 4,
    name: "Silk Blouse",
    price: 179,
    originalPrice: 229,
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 98,
    discount: 22,
  },
];

export default function Sale() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-foreground">
                LUXE
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/products"
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                Products
              </Link>
              <Link
                to="/categories"
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                Categories
              </Link>
              <Link
                to="/sale"
                className="text-sm font-medium text-primary border-b-2 border-primary"
              >
                Sale
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                About
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                Login
              </Link>
              <Link
                to="/cart"
                className="p-2 hover:bg-accent rounded-md transition-colors"
              >
                <ShoppingBag className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Sale</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <h1 className="text-4xl font-light text-foreground">
              Limited Time Sale
            </h1>
            <Badge variant="destructive" className="text-lg px-3 py-1">
              Up to 50% Off
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Discover exceptional pieces at incredible prices. Limited quantities
            available.
          </p>
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <Timer className="h-5 w-5" />
            <span className="text-sm">Sale ends soon</span>
          </div>
        </div>

        {/* Sale Banner */}
        <div className="bg-gradient-to-r from-destructive/10 to-destructive/5 border border-destructive/20 rounded-lg p-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-medium text-foreground mb-2">
              Extra 20% Off Your First Sale Purchase
            </h2>
            <p className="text-muted-foreground mb-4">
              Use code{" "}
              <span className="font-mono bg-muted px-2 py-1 rounded">
                FIRST20
              </span>{" "}
              at checkout
            </p>
            <Button size="lg" asChild>
              <Link to="/products?sale=true">Shop Sale Items</Link>
            </Button>
          </div>
        </div>

        {/* Sale Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-foreground mb-8">
            Featured Sale Items
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {saleProducts.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer border-0 shadow-none hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden aspect-[3/4] mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-2 py-1 text-xs font-medium rounded">
                      -{product.discount}%
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-foreground">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-medium text-foreground">
                        ${product.price}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sale Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-foreground mb-8">
            Shop Sale by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Dresses", count: 24 },
              { name: "Outerwear", count: 18 },
              { name: "Knitwear", count: 15 },
              { name: "Shoes", count: 32 },
            ].map((category) => (
              <Link
                key={category.name}
                to={`/products?category=${category.name.toLowerCase()}&sale=true`}
                className="group"
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count} items
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12 bg-muted/30 rounded-lg">
          <h2 className="text-3xl font-light text-foreground mb-4">
            Don't Miss Out
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            These deals won't last long. Shop now and save on premium fashion
            pieces.
          </p>
          <Button size="lg" asChild>
            <Link to="/products">View All Sale Items</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
