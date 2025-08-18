
"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const heroContent = [
    {
      title: "Handcrafted with Love",
      subtitle: "Unique artisan jewelry created in Victoria, Canada",
      description: "Discover our collection of handmade macramé jewelry, where each piece tells a story of craftsmanship and creativity.",
      cta: "Shop Collection",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Bohemian Elegance",
      subtitle: "Embrace your free spirit with our macramé collection",
      description: "From delicate earrings to statement necklaces, find the perfect piece to express your unique style.",
      cta: "Explore Now",
      image: "https://i.pinimg.com/originals/5f/5c/98/5f5c98db87b64181d2660539a8d9a8a1.jpg"
    },
    {
      title: "Sustainable Beauty",
      subtitle: "Eco-conscious jewelry made with natural materials",
      description: "Our commitment to sustainability shines through in every carefully selected material and handcrafted detail.",
      cta: "Learn More",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length)
    }, 6000)
    
    return () => clearInterval(interval)
  }, [heroContent.length])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroContent.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-[#0A8E81] mr-3" />
            <span className="text-lg font-medium text-[#0A8E81]">FaeLight Crafts</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {heroContent[currentSlide]?.title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 opacity-90 font-light">
            {heroContent[currentSlide]?.subtitle}
          </p>
          
          <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto leading-relaxed">
            {heroContent[currentSlide]?.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/products">
              <Button 
                size="lg" 
                className="bg-[#0A8E81] hover:bg-[#087267] text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                {heroContent[currentSlide]?.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link href="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/50 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Our Story
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {heroContent.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-[#0A8E81] scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
