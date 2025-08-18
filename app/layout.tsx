
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Toaster } from '@/components/ui/toaster'
import { CartProvider } from '@/components/cart/cart-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FaeLight Crafts - Artisan Jewelry & Handmade Accessories',
  description: 'Discover unique handcrafted jewelry and accessories by FaeLight Crafts. From elegant necklaces to statement earrings, each piece tells a story of artisanal excellence.',
  keywords: 'jewelry, handmade, artisan, crafts, necklaces, earrings, bracelets, accessories',
  authors: [{ name: 'FaeLight Crafts' }],
  openGraph: {
    title: 'FaeLight Crafts - Artisan Jewelry',
    description: 'Unique handcrafted jewelry and accessories',
    url: 'https://faelightcrafts.com',
    siteName: 'FaeLight Crafts',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CartProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
