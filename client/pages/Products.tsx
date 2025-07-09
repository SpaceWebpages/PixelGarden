import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ArrowLeft,
  Filter,
  Heart,
  Star,
  ShoppingBag,
  Grid3X3,
  List,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Classic Wool Coat",
    price: 299,
    originalPrice: 399,
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 124,
    category: "Outerwear",
    colors: ["Black", "Navy", "Camel"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Silk Midi Dress",
    price: 189,
    originalPrice: null,
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 89,
    category: "Dresses",
    colors: ["Black", "Navy", "Emerald"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: 3,
    name: "Cashmere Sweater",
    price: 249,
    originalPrice: 329,
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 156,
    category: "Knitwear",
    colors: ["Cream", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Leather Ankle Boots",
    price: 329,
    originalPrice: null,
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 201,
    category: "Shoes",
    colors: ["Black", "Brown"],
    sizes: ["36", "37", "38", "39", "40", "41"],
  },
  {
    id: 5,
    name: "Pleated Skirt",
    price: 149,
    originalPrice: 199,
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 73,
    category: "Skirts",
    colors: ["Black", "Navy", "Burgundy"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: 6,
    name: "Blazer",
    price: 279,
    originalPrice: null,
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 142,
    category: "Blazers",
    colors: ["Black", "Navy", "Gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

const categories = [
  "All",
  "Dresses",
  "Outerwear",
  "Knitwear",
  "Shoes",
  "Skirts",
  "Blazers",
];
const colors = [
  "Black",
  "Navy",
  "Gray",
  "White",
  "Cream",
  "Camel",
  "Burgundy",
  "Emerald",
];
const sizes = ["XS", "S", "M", "L", "XL", "36", "37", "38", "39", "40", "41"];

export default function Products() {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleColorChange = (color: string, checked: boolean) => {
    if (checked) {
      setSelectedColors([...selectedColors, color]);
    } else {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    }
  };

  const handleSizeChange = (size: string, checked: boolean) => {
    if (checked) {
      setSelectedSizes([...selectedSizes, size]);
    } else {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    }
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;
    const priceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const colorMatch =
      selectedColors.length === 0 ||
      selectedColors.some((color) => product.colors.includes(color));
    const sizeMatch =
      selectedSizes.length === 0 ||
      selectedSizes.some((size) => product.sizes.includes(size));

    return categoryMatch && priceMatch && colorMatch && sizeMatch;
  });

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium text-foreground mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium text-foreground mb-4">Price Range</h3>
        <div className="px-3">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={500}
            min={0}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium text-foreground mb-4">Color</h3>
        <div className="space-y-2">
          {colors.map((color) => (
            <div key={color} className="flex items-center space-x-2">
              <Checkbox
                id={`color-${color}`}
                checked={selectedColors.includes(color)}
                onCheckedChange={(checked) =>
                  handleColorChange(color, checked as boolean)
                }
              />
              <label
                htmlFor={`color-${color}`}
                className="text-sm text-foreground cursor-pointer"
              >
                {color}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium text-foreground mb-4">Size</h3>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <Checkbox
                id={`size-${size}`}
                checked={selectedSizes.includes(size)}
                onCheckedChange={(checked) =>
                  handleSizeChange(size, checked as boolean)
                }
              />
              <label
                htmlFor={`size-${size}`}
                className="text-sm text-foreground cursor-pointer"
              >
                {size}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Products</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-light text-foreground mb-2">
              All Products
            </h1>
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="rating">Best Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-8">
              <h2 className="text-lg font-medium text-foreground mb-6">
                Filters
              </h2>
              <FilterContent />
            </div>
          </div>

          {/* Filters - Mobile */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="mb-6">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Refine your search to find the perfect items.
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "space-y-6"
              }
            >
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className={`group cursor-pointer border-0 shadow-none hover:shadow-lg transition-all duration-300 ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                >
                  <CardContent
                    className={`p-0 ${viewMode === "list" ? "flex w-full" : ""}`}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        viewMode === "list"
                          ? "w-48 h-48 flex-shrink-0"
                          : "aspect-[3/4] mb-4"
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <button className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <Heart className="h-4 w-4" />
                      </button>
                      {product.originalPrice && (
                        <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-2 py-1 text-xs font-medium rounded">
                          SALE
                        </div>
                      )}
                    </div>

                    <div
                      className={`space-y-2 ${viewMode === "list" ? "p-6 flex-1" : ""}`}
                    >
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-muted-foreground">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>
                      </div>

                      <Link to={`/products/${product.id}`}>
                        <h3 className="font-medium text-foreground hover:text-muted-foreground transition-colors">
                          {product.name}
                        </h3>
                      </Link>

                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-medium text-foreground">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {product.colors.slice(0, 3).map((color) => (
                          <Badge
                            key={color}
                            variant="outline"
                            className="text-xs"
                          >
                            {color}
                          </Badge>
                        ))}
                        {product.colors.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{product.colors.length - 3}
                          </Badge>
                        )}
                      </div>

                      {viewMode === "list" && (
                        <div className="pt-4">
                          <Button className="w-full" asChild>
                            <Link to={`/products/${product.id}`}>
                              View Details
                            </Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No products found matching your filters.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedColors([]);
                    setSelectedSizes([]);
                    setPriceRange([0, 500]);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
