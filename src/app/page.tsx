import { HeroCarousel } from "@/components/sections/hero-carousel";
import { CategoryRow } from "@/components/sections/category-row";
import { ProductCarousel } from "@/components/sections/product-carousel";
import { FeatureStory } from "@/components/sections/feature-story";
import { PromoTiles } from "@/components/sections/promo-tiles";
import { SellerBanner } from "@/components/sections/seller-banner";
import { ValueProps } from "@/components/sections/value-props";

export default function HomePage() {
  return (
    <main>
      <HeroCarousel />
      <CategoryRow />
      <ProductCarousel />
      <FeatureStory />
      <PromoTiles />
      <SellerBanner />
      <ValueProps />
    </main>
  );
}
