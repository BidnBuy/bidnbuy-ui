import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useProductStore, type Product } from "@/store/products";
import { fetchProducts } from "@/services/products";

import { useIsMobile } from "@/hooks/useIsMobile";

import { SearchBar } from "@/components/search-bar/SearchBar";
import { CategoryTabs } from "@/components/category-tabs/CategoryTabs";
import { MobileProductSection } from "@/components/product-section/MobileProductSection";
import { MobileDiscoverSection } from "@/components/discover-section/MobileDiscoverSection";

import { ProductHeroSection } from "@/components/product-hero-section/ProductHeroSection";
import { DesktopProductSection } from "@/components/product-section/DesktopProductSection";
import { DesktopDiscoverSection } from "@/components/discover-section/DesktopDiscoverSection";
import { FeaturedCarousel } from "@/components/featured-carousel/FeaturedCarousel";
import LoadingGrid from "@/components/loading-grid/LoadingGrid";

const ProductHome = () => {
  const isMobile = useIsMobile();

  const categories = [
    "All",
    "Automotive",
    "Beauty & Personal Care",
    "Toys & Games",
    "Home & Garden",
    "Clothing & Accessories",
    "Books & Media",
    "Jewelry & Watches",
    "Health & Wellness",
    "Electronics"
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  const setProducts = useProductStore((state) => state.setProducts);

  useEffect(() => {
    setProducts(products);
  }, [products, setProducts]);

  const actionTypes = ["buy", "bid", "offer"] as const;
  const mapProductToUI = (product: Product, idx: number) => ({
    image:
      Array.isArray(product.files) && product.files.length > 0
        ? product.files[0]
        : "",
    title: product.itemName,
    rating: 5,
    reviews: 0,
    price:
      product.discountPrice && product.discountPrice !== product.basePrice
        ? `$${product.discountPrice}`
        : `$${product.basePrice}`,
    originalPrice:
      product.discountPrice && product.discountPrice !== product.basePrice
        ? `$${product.basePrice}`
        : undefined,
    actionType: actionTypes[idx % actionTypes.length],
  });

  const getProductsByCategory = (category: string) =>
    category === "All"
      ? products.map(mapProductToUI)
      : products.filter((product) => product.categories.includes(category)).map(mapProductToUI)

  console.log('Get products by category', getProductsByCategory)

  // const getProductsByCategory = (category: string) =>
  //   category === "All"
  //     ? products.map(mapProductToUI)
  //     : products.filter((p) => p.category === category).map(mapProductToUI);

  // const exploreProductsData = products.map(mapProductToUI);
  // const electronicsProductsData = products.map(mapProductToUI);
  // const featuredProductsData = products.slice(0, 8).map(mapProductToUI);


  const categoryCounts: Record<string, number> = {};
  products.forEach((product) => {
    if (product.categories && product.categories !== "All") {
      categoryCounts[product.categories] = (categoryCounts[product.categories] || 0) + 1;
    }
  });
  const mostPopulatedCategory = Object.entries(categoryCounts).sort(
    (a, b) => b[1] - a[1]
  )[0]?.[0];
  const mostPopulatedProducts = mostPopulatedCategory
    ? getProductsByCategory(mostPopulatedCategory)
    : [];

  if (isMobile) {
    return (
      <div className="flex flex-col min-h-screen bg-[#01151C] text-white">
        <SearchBar />
        <CategoryTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className="flex-1 overflow-auto">
          <div className="flex flex-col gap-6 pb-6">
            <FeaturedCarousel />
            {isLoading ? (
              <LoadingGrid />
            ) : (
              <>
                {/* Render each category section with matching id for scroll */}
                {categories.map((category) => {
                  const productsForCategory = getProductsByCategory(category);
                  if (productsForCategory.length === 0) return null;
                  return (
                    <div key={category} id={`category-section-${category.replace(/\s+/g, '-')}`}>
                      <MobileProductSection
                        title={category}
                        products={productsForCategory}
                      />
                    </div>
                  );
                })}
                {/* Discover section can be placed after some categories if needed */}
                <MobileDiscoverSection />
                {mostPopulatedCategory && mostPopulatedProducts.length > 0 && (
                  <div id={`category-section-${mostPopulatedCategory.replace(/\s+/g, '-')}`}>
                    <MobileProductSection
                      title={`Top in ${mostPopulatedCategory}`}
                      products={mostPopulatedProducts}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#01151C] text-white">
      <ProductHeroSection />
      <div className="px-6">
        {isLoading ? (
          <LoadingGrid />
        ) : (
          <>
            {/* Render each category section with matching id for scroll */}
            {categories.map((category) => {
              const productsForCategory = getProductsByCategory(category);
              if (productsForCategory.length === 0) return null;
              return (
                <div key={category} id={`category-section-${category.replace(/\s+/g, '-')}`}>
                  <DesktopProductSection
                    title={category}
                    products={productsForCategory}
                    columns={category === 'All' ? 4 : 8}
                  />
                </div>
              );
            })}
            <DesktopDiscoverSection />
            {mostPopulatedCategory && mostPopulatedProducts.length > 0 && (
              <div id={`category-section-${mostPopulatedCategory.replace(/\s+/g, '-')}`}>
                <DesktopProductSection
                  title={`Top in ${mostPopulatedCategory}`}
                  products={mostPopulatedProducts}
                  columns={4}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductHome;
