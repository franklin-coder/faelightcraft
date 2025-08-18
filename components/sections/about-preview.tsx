
"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Heart, Leaf, Users, Award } from 'lucide-react'
import Link from 'next/link'

const AboutPreview = () => {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every piece is crafted by hand with passion and attention to detail"
    },
    {
      icon: Leaf,
      title: "Sustainable Materials",
      description: "We use eco-friendly and ethically sourced materials in all our creations"
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Supporting local artisans and connecting with our community in Victoria"
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "Each piece undergoes careful quality checks to ensure lasting beauty"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="FaeLight Crafts artisan at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-[#0A8E81] text-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm opacity-90">Years of Crafting</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <span className="text-[#0A8E81] font-medium text-lg">About FaeLight Crafts</span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2" style={{ color: '#000000' }}>
                Artisan Jewelry from the Heart
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Welcome to FaeLight Crafts, where every piece tells a story of passion, 
                creativity, and craftsmanship. Based in beautiful Victoria, Canada, 
                I'm Julia, and I've been creating handmade macramé jewelry that celebrates 
                the beauty of natural materials and traditional techniques.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My journey began with a simple love for creating beautiful things with my hands. 
                Today, each piece represents hours of careful work, using sustainable materials 
                and time-honored techniques passed down through generations of artisans.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0A8E81] rounded-lg flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/about">
                <Button 
                  size="lg"
                  className="bg-[#0A8E81] hover:bg-[#087267] text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
