import ProductGrid from "@/components/shared/product/ProductGrid";
import { Button } from "@/components/ui/button";

import { useProducts } from "@/hooks/useProducts";

const LiveAuctionsSection = () => {
  const { mappedProducts } = useProducts();
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-12">
          Live Auctions
        </h2>

        <div className="md:hidden">
          <ProductGrid
            showSeeAll={false}
            products={mappedProducts}
            columns={2}
          />
        </div>

        <div className="hidden md:block">
          <ProductGrid
            showSeeAll={false}
            products={mappedProducts}
            columns={4}
          />
        </div>

        
      </div>
    </section>
  );
};

export default LiveAuctionsSection;
