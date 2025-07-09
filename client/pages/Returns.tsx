import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag, RotateCcw, Package, CheckCircle } from "lucide-react";

export default function Returns() {
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
          <span className="text-foreground">Returns & Exchanges</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-foreground mb-4">
            Returns & Exchanges
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We want you to love your purchase. If you're not completely
            satisfied, we're here to help.
          </p>
        </div>

        {/* Return Policy Overview */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <RotateCcw className="h-5 w-5" />
                <span>30-Day Return Policy</span>
                <Badge variant="secondary">Hassle-free</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-muted/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Package className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-medium text-foreground mb-2">
                    30 Days to Return
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Returns accepted within 30 days of delivery
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-muted/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-medium text-foreground mb-2">
                    Original Condition
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Items must be unworn with original tags
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-muted/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <RotateCcw className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-medium text-foreground mb-2">
                    Free Returns
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Free return shipping for US orders over $75
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How to Return */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-foreground mb-6">
            How to Return an Item
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Step 1: Start Your Return</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Log into your account and go to your order history. Select
                  "Return Items" next to the order you'd like to return.
                </p>
                <Button variant="outline">Start Return Process</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Step 2: Pack Your Items</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pack your items in the original packaging if possible. Include
                  the return authorization form that will be emailed to you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Step 3: Ship Your Return</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Use the prepaid return label provided (for eligible orders) or
                  ship to our returns center. You'll receive tracking
                  information once we receive your return.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Return Conditions */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-foreground mb-6">
            Return Conditions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">What We Accept</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Items in original condition with tags attached</li>
                  <li>• Unworn and unwashed clothing</li>
                  <li>• Shoes in original box without signs of wear</li>
                  <li>• Accessories in original packaging</li>
                  <li>• Items returned within 30 days of delivery</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">
                  What We Cannot Accept
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Worn or washed items</li>
                  <li>• Items without original tags</li>
                  <li>• Personalized or custom items</li>
                  <li>• Undergarments and swimwear</li>
                  <li>• Items returned after 30 days</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Refund Information */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-foreground mb-6">
            Refunds & Processing
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-foreground mb-3">
                    Processing Time
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Returns are processed within 3-5 business days of receipt.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    You'll receive an email confirmation once your return is
                    processed.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-3">
                    Refund Method
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Refunds will be issued to your original payment method.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Credit card refunds may take 3-10 business days to appear.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Exchanges */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-foreground mb-6">
            Exchanges
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                We currently don't offer direct exchanges. To exchange an item
                for a different size or color:
              </p>
              <ol className="space-y-2 text-muted-foreground">
                <li>
                  1. Return your original item following our return process
                </li>
                <li>2. Place a new order for the item you want</li>
                <li>
                  3. We'll process your refund once we receive your return
                </li>
              </ol>
              <p className="text-sm text-muted-foreground mt-4">
                This ensures you get the item you want as quickly as possible.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact */}
        <div className="text-center bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-light text-foreground mb-4">
            Need Help with Your Return?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our customer service team is here to help make your return process
            as smooth as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
