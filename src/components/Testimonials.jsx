import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Chennai",
      rating: 5,
      text: "The best idli batter I've ever used! My family loves the soft, fluffy idlis we make with Kuringi batter. It's consistently fresh and perfectly fermented.",
      avatar: "PS"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Chennai",
      rating: 5,
      text: "Amazing dosa batter! The dosas come out crispy and golden every time. The taste is just like my grandmother used to make. Highly recommended!",
      avatar: "RK"
    },
    {
      id: 3,
      name: "Meera Patel",
      location: "Chennai",
      rating: 5,
      text: "I've been using Kuringi batter for over 2 years now. The quality is outstanding and the convenience is unmatched. Fresh delivery every time!",
      avatar: "MP"
    },
    {
      id: 4,
      name: "Suresh Reddy",
      location: "Chennai",
      rating: 5,
      text: "Authentic taste and premium quality! The combo pack is perfect for our family. Both idli and dosa batter are excellent. Worth every penny!",
      avatar: "SR"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="food-gradient bg-clip-text text-white">{t('testimonialsTitle')}</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            {t('testimonialsSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative border border-border"
            >
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-card-foreground/80 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-bold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-card-foreground/70">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-card rounded-3xl p-8 shadow-lg max-w-4xl mx-auto border border-border">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">4.9/5</div>
                <div className="text-card-foreground/80">{t('avgRating')}</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">500+</div>
                <div className="text-card-foreground/80">{t('happyReviews')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">98%</div>
                <div className="text-card-foreground/80">{t('satisfactionRate')}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;