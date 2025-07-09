import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus } from "lucide-react";

export default function Register() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-foreground">
            LUXE
          </Link>
          <p className="text-muted-foreground mt-2">
            Create your account to get started
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              <UserPlus className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
              Create Account
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  disabled
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  disabled
                />
              </div>
            </div>
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
                placeholder="Create a password"
                disabled
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                disabled
              />
            </div>
            <Button className="w-full" disabled>
              Create Account (Coming Soon)
            </Button>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-foreground hover:text-muted-foreground transition-colors font-medium"
              >
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="font-medium text-foreground mb-3">Coming Soon:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Account creation</li>
              <li>• Email verification</li>
              <li>• Profile management</li>
              <li>• Personalized recommendations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
