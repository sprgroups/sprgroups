import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const handleOrderNow = () => {
    window.open('https://wa.me/918667612625', '_blank');
  };

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-pattern overflow-hidden pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Star className="w-4 h-4 mr-2 fill-current" />
                {t('heroQuality')}
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold text-foreground leading-tight"
              >
                <span className="food-gradient bg-clip-text text-white">
                  {t('heroTitle')}
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-foreground/80 leading-relaxed max-w-lg"
              >
                {t('heroSubtitle')}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-4"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-green-500" />
                </div>
                <span className="text-sm font-medium text-foreground/90">{t('featureFresh')}</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-blue-500" />
                </div>
                <span className="text-sm font-medium text-foreground/90">{t('featureNatural')}</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-6 h-6 text-purple-500" />
                </div>
                <span className="text-sm font-medium text-foreground/90">{t('featurePremium')}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 text-lg font-semibold pulse-glow"
              >
                {t('ctaOrder')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={scrollToProducts}
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10 px-8 py-3 text-lg font-semibold"
              >
                {t('ctaViewProducts')}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative floating">
              <img 
                alt="Fresh idli and dosa with traditional South Indian breakfast setup"
                className="w-full h-auto rounded-3xl spice-shadow"
               src="assets/images/photo-1642099716502-c3c63499c312.jpeg" />
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-card rounded-full p-4 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">4.9</div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs text-card-foreground/80">Rating</div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-green-500 text-white rounded-full p-4 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-lg font-bold">100%</div>
                  <div className="text-xs">Natural</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full opacity-50 floating"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-yellow-500/20 rounded-full opacity-50 floating" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-green-500/20 rounded-full opacity-50 floating" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default Hero;