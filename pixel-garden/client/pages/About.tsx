import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Heart, Users, Globe } from "lucide-react";

export default function About() {
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
                className="text-sm font-medium text-primary border-b-2 border-primary"
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
          <span className="text-foreground">About</span>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            About LUXE
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe that true elegance transcends trends. Since our founding,
            LUXE has been dedicated to creating timeless pieces that embody
            sophistication, quality, and conscious craftsmanship.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020 with a vision to redefine modern luxury, LUXE
                  emerged from a simple belief: exceptional fashion should be
                  both beautiful and responsible.
                </p>
                <p>
                  Our journey began with a small collection of carefully crafted
                  pieces, each designed to stand the test of time. Today, we
                  continue to honor that commitment by partnering with skilled
                  artisans and using sustainable materials.
                </p>
                <p>
                  Every piece in our collection tells a story of meticulous
                  attention to detail, from the initial sketch to the final
                  stitch.
                </p>
              </div>
            </div>
            <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Our atelier"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-foreground mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-none">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-3">
                  Craftsmanship
                </h3>
                <p className="text-muted-foreground">
                  Every piece is meticulously crafted by skilled artisans who
                  share our passion for excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-none">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-3">
                  Sustainability
                </h3>
                <p className="text-muted-foreground">
                  We're committed to ethical practices and sustainable materials
                  that respect our planet.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-none">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-3">
                  Community
                </h3>
                <p className="text-muted-foreground">
                  We believe in fostering relationships with our customers,
                  partners, and artisans.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-muted/30 rounded-lg p-8 md:p-12 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-light text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              To create fashion that empowers individuals to express their
              authentic selves while building a more sustainable and equitable
              future for the industry we love.
            </p>
            <Button size="lg" asChild>
              <Link to="/products">Explore Our Collection</Link>
            </Button>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-foreground mb-8 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Creative Director",
                image: "/placeholder.svg",
              },
              {
                name: "Marcus Rodriguez",
                role: "Head of Sustainability",
                image: "/placeholder.svg",
              },
              {
                name: "Emma Thompson",
                role: "Lead Designer",
                image: "/placeholder.svg",
              },
            ].map((member) => (
              <Card
                key={member.name}
                className="text-center border-0 shadow-none"
              >
                <CardContent className="p-6">
                  <div className="aspect-square bg-muted rounded-full overflow-hidden mb-4 mx-auto w-32">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-light text-foreground mb-6">
            Join Our Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of a community that values quality, sustainability, and
            timeless style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/products">Shop Collection</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
