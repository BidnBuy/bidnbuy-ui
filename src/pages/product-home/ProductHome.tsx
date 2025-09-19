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
  const allProductData = getProductsByCategory('All')
  const fashionProductsData = getProductsByCategory('Fashion')
  const electronicsProductsData = getProductsByCategory('Electronics')
  const automotiveProductsData = getProductsByCategory('Automotive')
  const beautyCareProductsData = getProductsByCategory('Beauty & Personal Care')
  const toysAndGamesProductsData = getProductsByCategory('Toys & Games')
  const homeAndGardenProductsData = getProductsByCategory('Home & Garden')
  const clothingAndAccessoriesProductsData = getProductsByCategory('Clothing & Accessories')
  const booksAndMediaProductsData = getProductsByCategory('Books & Media')
  const jewelryAndWatchesProductsData = getProductsByCategory('Jewelry & Watches')
  const healthAndWellnessProductsData = getProductsByCategory('Health & Wellness')


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
                <MobileProductSection
                  title="Explore Your Interests"
                  products={allProductData}
                />
                <MobileProductSection
                  title="All things Electronics"
                  products={electronicsProductsData}
                />
                <MobileDiscoverSection />
                <MobileProductSection
                  title="All things Fashion"
                  products={fashionProductsData}
                />
                <MobileProductSection
                  title="Automotive Essentials"
                  products={automotiveProductsData}
                />
                <MobileProductSection
                  title="Beauty And Personal Care"
                  products={beautyCareProductsData}
                />
                <MobileDiscoverSection />
                <MobileProductSection
                  title="For Children - Toys And Games"
                  products={toysAndGamesProductsData}
                />
                <MobileProductSection
                  title="Home and Garden Must-Haves"
                  products={homeAndGardenProductsData}
                />
                <MobileProductSection
                  title="Clothing And Accessories"
                  products={clothingAndAccessoriesProductsData}
                />

                <MobileDiscoverSection />
                <MobileProductSection
                  title="Books and Media"
                  products={booksAndMediaProductsData}
                />
                <MobileProductSection
                  title="All Things Style and Accessories"
                  products={jewelryAndWatchesProductsData}
                />
                <MobileProductSection
                  title="AHealth And Wellness Essentials"
                  products={healthAndWellnessProductsData}
                />
                {mostPopulatedCategory && mostPopulatedProducts.length > 0 && (
                  <MobileProductSection
                    title={`Top in ${mostPopulatedCategory}`}
                    products={mostPopulatedProducts}
                  />
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
            <DesktopProductSection
              title="Explore Your Interests"
              products={exploreProductsData}
              columns={4}
            />
            <DesktopProductSection
              title="All Things Electronics"
              products={electronicsProductsData}
              columns={4}
            />
            <DesktopDiscoverSection />
            <DesktopProductSection
              title="Featured Listings"
              products={featuredProductsData}
              columns={8}
            />
            <DesktopProductSection
              title="Fashion Deals For You"
              products={exploreProductsData}
              columns={8}
            />
            {mostPopulatedCategory && mostPopulatedProducts.length > 0 && (
              <DesktopProductSection
                title={`Top in ${mostPopulatedCategory}`}
                products={mostPopulatedProducts}
                columns={4}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductHome;
