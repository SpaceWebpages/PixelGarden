import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lock } from "lucide-react";

export default function Checkout() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" asChild>
            <Link to="/cart">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cart
            </Link>
          </Button>
          <Link to="/" className="text-2xl font-bold text-foreground">
            LUXE
          </Link>
          <div className="w-20"></div>
        </div>

        <div className="text-center py-20">
          <Lock className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-4xl font-light text-foreground mb-4">
            Secure Checkout
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            This page will provide a secure checkout experience with billing
            information, shipping details, and payment processing.
          </p>
          <div className="bg-muted/30 p-8 rounded-lg max-w-md mx-auto">
            <h3 className="font-medium text-foreground mb-4">Coming Soon:</h3>
            <ul className="text-sm text-muted-foreground space-y-2 text-left">
              <li>• Secure payment processing</li>
              <li>• Billing & shipping forms</li>
              <li>• Order summary review</li>
              <li>• Multiple payment methods</li>
              <li>• Address validation</li>
              <li>• Order confirmation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
