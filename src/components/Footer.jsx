import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Heart, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const companyLogo = "assets/images/9f293060f65a60e697a1172e4e51fa31.webp";

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: t('navHome'), id: 'home' },
    { label: t('navProducts'), id: 'products' },
    { label: t('navAbout'), id: 'about' },
    { label: t('navTestimonials'), id: 'testimonials' },
    { label: t('navContact'), id: 'contact' },
  ];

  const productLinks = [
    { label: t('product1Name'), id: 'products' },
    { label: t('product2Name'), id: 'products' },
    { label: t('product3Name'), id: 'products' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3 mb-4">
              <img src={companyLogo} alt="SPR Food Products Logo" className="h-12 object-contain" />
              <span className="text-xl font-bold">{t('companyName')}</span>
            </div>
            <p className="text-gray-300 leading-relaxed">{t('footerDesc')}</p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/918667612625"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <span className="text-lg font-bold">{t('quickLinks')}</span>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-orange-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <span className="text-lg font-bold">{t('ourProducts')}</span>
            <div className="space-y-2">
              {productLinks.map((product, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(product.id)}
                  className="block text-gray-300 hover:text-orange-400 transition-colors"
                >
                  {product.label}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <span className="text-lg font-bold">{t('contactInfoFooter')}</span>
            <div className="space-y-3">
              <a href="tel:+918667612625" className="flex items-center space-x-3 text-gray-300 hover:text-orange-400">
                <Phone className="w-5 h-5 text-orange-400" />
                <span>+91 866 761 2625</span>
              </a>
              <a href="https://wa.me/918667612625" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-orange-400">
                <MessageSquare className="w-5 h-5 text-orange-400" />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:contact@kuringifoods.com" className="flex items-center space-x-3 text-gray-300 hover:text-orange-400">
                <Mail className="w-5 h-5 text-orange-400" />
                <span>contact@kuringifoods.com</span>
              </a>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  SPR Food Products, 9/105, 3rd Main Rd, Thirupathi Nagar, Kolathur, Chennai - 600099
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              {t('footerRights')}
            </p>
            <div className="flex items-center space-x-1 text-gray-400">
              <span>{t('footerMadeWith')}</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>{t('footerForTaste')}</span>
            </div>
            <div className="flex space-x-6">
              {[t('privacyPolicy'), t('termsOfService'), t('refundPolicy')].map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
export default Footer;