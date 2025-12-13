import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Leaf, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Heart,
      title: t('madeWithLove'),
      description: t('madeWithLoveDesc')
    },
    {
      icon: Leaf,
      title: t('featureNatural'),
      description: t('naturalDesc')
    },
    {
      icon: Award,
      title: t('featurePremium'),
      description: t('premiumQualityDesc')
    },
    {
      icon: Clock,
      title: t('featureFresh'),
      description: t('freshDailyDesc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                <span className="food-gradient bg-clip-text text-white">{t('aboutTitle')}</span>
              </h2>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>{t('aboutP1')}</p>
                <p>{t('aboutP2')}</p>
                <p>{t('aboutP3')}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">25+</div>
                <div className="text-foreground/80">{t('expYears')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">10K+</div>
                <div className="text-foreground/80">{t('happyCustomers')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">100%</div>
                <div className="text-foreground/80">{t('naturalIngredients')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-500 mb-2">4.9</div>
                <div className="text-foreground/80">{t('customerRating')}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <img 
                alt="Traditional South Indian kitchen with authentic cooking methods"
                className="w-full h-80 object-cover rounded-3xl shadow-lg"
               src="assets/images/photo-1684207936300-0f3bca40c1e6.jpeg" />
              
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-lg border border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500 mb-1">Fresh</div>
                  <div className="text-sm text-card-foreground/80">Every Day</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 text-center border border-border"
                >
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <feature.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-card-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-card-foreground/80 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;