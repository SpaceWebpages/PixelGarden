import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Truck, Clock, Globe, Package } from "lucide-react";

export default function Shipping() {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Shipping Information</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-foreground mb-4">
            Shipping Information
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer fast, reliable shipping options to get your order to you
            quickly and safely.
          </p>
        </div>

        {/* Shipping Options */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-foreground mb-6">
            Shipping Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Truck className="h-5 w-5" />
                  <span>Standard Shipping</span>
                  <Badge>Free over $75</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <strong>Delivery:</strong> 3-5 business days
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Cost:</strong> $8.95 (Free on orders over $75)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Perfect for regular orders when you're not in a rush.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Express Shipping</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <strong>Delivery:</strong> 1-2 business days
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Cost:</strong> $19.95
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Fast delivery for when you need your items quickly.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>International Shipping</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <strong>Delivery:</strong> 7-14 business days
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Cost:</strong> Varies by location
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We ship to over 50 countries worldwide.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="h-5 w-5" />
                  <span>Same Day Delivery</span>
                  <Badge variant="secondary">Select cities</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <strong>Delivery:</strong> Same day
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Cost:</strong> $29.95
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Available in NYC, LA, Chicago, and San Francisco.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Processing Time */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-foreground mb-6">
            Processing Time
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-foreground mb-3">
                    Standard Items
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Most orders are processed within 1-2 business days.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Orders placed after 2 PM EST will be processed the next
                    business day.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-3">
                    Custom/Pre-order Items
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Custom items may take 2-3 weeks to process.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    You'll receive email updates on your order status.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tracking */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-foreground mb-6">
            Order Tracking
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Once your order ships, you'll receive a confirmation email
                  with tracking information. You can track your package using:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • The tracking link in your shipping confirmation email
                  </li>
                  <li>• Your account dashboard (if you're logged in)</li>
                  <li>• The carrier's website using your tracking number</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* International Shipping */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-foreground mb-6">
            International Shipping
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Customs & Duties</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  International customers are responsible for any customs duties
                  or taxes imposed by their country.
                </p>
                <p className="text-sm text-muted-foreground">
                  These fees are not included in your order total and vary by
                  country.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Restricted Countries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Due to shipping restrictions, we currently cannot ship to
                  certain countries.
                </p>
                <p className="text-sm text-muted-foreground">
                  Please contact us if you're unsure about shipping to your
                  location.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-light text-foreground mb-4">
            Questions About Shipping?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our customer service team is here to help with any shipping
            questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Contact Support
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
