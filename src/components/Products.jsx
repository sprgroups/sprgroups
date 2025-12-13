import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
const Products = () => {
  const {
    t
  } = useLanguage();
  const products = [{
    id: 1,
    name: t('product1Name'),
    description: t('product1Desc'),
    image: "assets/images/1c2725ad43d51ab607711fb76a0836a6.webp"
  }, {
    id: 2,
    name: t('product2Name'),
    description: t('product2Desc'),
    image: "assets/images/64d94ec53e999012fdb7ad18595ae271.webp"
  }, {
    id: 3,
    name: t('product3Name'),
    description: t('product3Desc'),
    image: "assets/images/765dcd42432015802baec914c552f462.webp"
  }];
  const handleContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="food-gradient bg-clip-text text-white">{t('productsTitle')}</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            {t('productsSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => <motion.div key={product.id} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col border border-border">
              <div className="mb-6">
                <img alt={product.name} className="w-full h-64 object-contain rounded-2xl" src={product.image} />
              </div>

              <div className="space-y-4 flex-grow flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">{product.name}</h3>
                  <p className="text-card-foreground/80 leading-relaxed">{product.description}</p>
                </div>
                <p className="text-sm text-center text-card-foreground/60 mt-4">
                  Only available in Chennai, Tamil Nadu.
                </p>
              </div>
            </motion.div>)}
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mt-16 bg-card p-8 rounded-3xl shadow-lg max-w-3xl mx-auto border border-border">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">{t('contactForBulk')}</h3>
          <p className="text-card-foreground/80 mb-6">Can order via Phone or WhatsApp.</p>
          <Button onClick={handleContact} className="bg-gradient-to-r from-orange-500 to-blue-500 hover:opacity-90 text-white font-semibold py-3 px-8 rounded-xl">
            <Phone className="w-5 h-5 mr-2" />
            {t('contactForBulkCta')}
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default Products;