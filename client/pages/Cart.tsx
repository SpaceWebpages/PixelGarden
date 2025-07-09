import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag } from "lucide-react";

export default function Cart() {
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
        <h1 className="text-3xl font-light text-foreground mb-8">
          Shopping Cart
        </h1>

        <div className="text-center py-20">
          <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
          <h2 className="text-2xl font-light text-foreground mb-4">
            Your cart is empty
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            This page will display cart items, quantities, pricing, and checkout
            options.
          </p>
          <div className="bg-muted/30 p-8 rounded-lg max-w-md mx-auto mb-8">
            <h3 className="font-medium text-foreground mb-4">Coming Soon:</h3>
            <ul className="text-sm text-muted-foreground space-y-2 text-left">
              <li>• Cart item management</li>
              <li>• Quantity adjustments</li>
              <li>• Price calculations</li>
              <li>• Shipping options</li>
              <li>• Promo code support</li>
              <li>• Save for later functionality</li>
            </ul>
          </div>
          <Button asChild>
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
