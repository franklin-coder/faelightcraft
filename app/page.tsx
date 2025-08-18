
import { Suspense } from 'react'
import HeroSection from '@/components/sections/hero-section'
import FeaturedProducts from '@/components/sections/featured-products'
import CategoryShowcase from '@/components/sections/category-showcase'
import AboutPreview from '@/components/sections/about-preview'
import NewsletterSection from '@/components/sections/newsletter-section'

export default function HomePage() {
  return (
    <div className="pt-16 lg:pt-20">
      <HeroSection />
      
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <FeaturedProducts />
      </Suspense>
      
      <CategoryShowcase />
      <AboutPreview />
      <NewsletterSection />
    </div>
  )
}
