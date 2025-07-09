import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-foreground">
            LUXE
          </Link>
          <p className="text-muted-foreground mt-2">
            Welcome back to your account
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              <User className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
              Sign In
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                disabled
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                disabled
              />
            </div>
            <Button className="w-full" disabled>
              Sign In (Coming Soon)
            </Button>
            <div className="text-center text-sm">
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Forgot your password?
              </Link>
            </div>
            <div className="text-center text-sm">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-foreground hover:text-muted-foreground transition-colors font-medium"
              >
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="font-medium text-foreground mb-3">Coming Soon:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Secure authentication</li>
              <li>• Account management</li>
              <li>• Order history</li>
              <li>• Wishlist functionality</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
