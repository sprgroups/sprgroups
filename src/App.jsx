import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Home from '@/components/Home';
import Products from '@/components/Products';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LanguageProvider>
        <Helmet>
          <title>Kuringi - Premium Idli Dosa Batter by SPR Food Products</title>
          <meta name="description" content="Discover the finest quality idli and dosa batter from Kuringi, a brand of SPR Food Products. Made with traditional recipes for authentic South Indian taste." />
        </Helmet>
        
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>
            <Home />
            <Products />
            <About />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <Toaster />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;