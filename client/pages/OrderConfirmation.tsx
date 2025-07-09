import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Package, Truck } from "lucide-react";

export default function OrderConfirmation() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <Link to="/" className="text-2xl font-bold text-foreground">
            LUXE
          </Link>
        </div>

        <div className="text-center py-12">
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-light text-foreground mb-4">
            Order Confirmed!
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Thank you for your purchase. Your order has been confirmed and will
            be processed shortly.
          </p>

          <Card className="max-w-md mx-auto mb-8">
            <CardContent className="p-6">
              <h3 className="font-medium text-foreground mb-4">
                Order #12345 (Sample)
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Order Total:</span>
                  <span className="font-medium">$299.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Estimated Delivery:
                  </span>
                  <span className="font-medium">3-5 business days</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-muted/30 p-8 rounded-lg max-w-2xl mx-auto mb-8">
            <h3 className="font-medium text-foreground mb-6">
              What happens next?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Package className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                <h4 className="font-medium text-foreground mb-2">Processing</h4>
                <p className="text-sm text-muted-foreground">
                  We'll prepare your order for shipping
                </p>
              </div>
              <div className="text-center">
                <Truck className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                <h4 className="font-medium text-foreground mb-2">Shipping</h4>
                <p className="text-sm text-muted-foreground">
                  Your order will be shipped to your address
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                <h4 className="font-medium text-foreground mb-2">Delivered</h4>
                <p className="text-sm text-muted-foreground">
                  Enjoy your new purchase!
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>

          <div className="mt-12 bg-muted/30 p-6 rounded-lg max-w-md mx-auto">
            <h3 className="font-medium text-foreground mb-3">Coming Soon:</h3>
            <ul className="text-sm text-muted-foreground space-y-1 text-left">
              <li>• Real order tracking</li>
              <li>• Email confirmations</li>
              <li>• Order status updates</li>
              <li>• Account order history</li>
              <li>• Return & exchange options</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
