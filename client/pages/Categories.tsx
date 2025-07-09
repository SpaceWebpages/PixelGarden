import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "New Arrivals",
    description: "Discover our latest collection",
    image: "/placeholder.svg",
    link: "/products?category=new-arrivals",
    itemCount: 24,
  },
  {
    id: 2,
    name: "Dresses",
    description: "From casual to formal",
    image: "/placeholder.svg",
    link: "/products?category=dresses",
    itemCount: 45,
  },
  {
    id: 3,
    name: "Outerwear",
    description: "Stay warm in style",
    image: "/placeholder.svg",
    link: "/products?category=outerwear",
    itemCount: 32,
  },
  {
    id: 4,
    name: "Knitwear",
    description: "Soft and comfortable",
    image: "/placeholder.svg",
    link: "/products?category=knitwear",
    itemCount: 28,
  },
  {
    id: 5,
    name: "Shoes",
    description: "Step up your style",
    image: "/placeholder.svg",
    link: "/products?category=shoes",
    itemCount: 67,
  },
  {
    id: 6,
    name: "Accessories",
    description: "Complete your look",
    image: "/placeholder.svg",
    link: "/products?category=accessories",
    itemCount: 89,
  },
];

export default function Categories() {
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
                className="text-sm font-medium text-primary border-b-2 border-primary"
              >
                Categories
              </Link>
              <Link
                to="/sale"
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
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
          <span className="text-foreground">Categories</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-foreground mb-4">
            Shop by Category
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections designed for the modern
            lifestyle
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} to={category.link} className="group">
              <Card className="overflow-hidden border-0 shadow-none hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-medium text-foreground mb-2">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        {category.description}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {category.itemCount} items
                      </p>
                      <Button variant="outline" size="sm">
                        Shop Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 py-12 bg-muted/30 rounded-lg">
          <h2 className="text-3xl font-light text-foreground mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Browse our complete collection or get in touch with our style
            consultants
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
