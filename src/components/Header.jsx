import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, Globe, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, toggleLanguage, language } = useLanguage();
  const { theme, setTheme } = useTheme();

  const logoEn = "assets/images/ee14fc27d1850425184c1ded3b68cbec.webp";
  const logoTa = "assets/images/a64fa1808f72a24778764a748f510e63.webp";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleCall = () => {
    window.location.href = "tel:+918667612625";
  };

  const handleEmail = () => {
    window.location.href = "mailto:contact@kuringifoods.com";
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <img src={language === 'en' ? logoEn : logoTa} alt="Kuringi Logo" className="h-12 object-contain" />
            <span className="text-2xl font-bold text-foreground">{t('brandName')}</span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-6">
            {[
              { label: t('navHome'), id: 'home' },
              { label: t('navProducts'), id: 'products' },
              { label: t('navAbout'), id: 'about' },
              { label: t('navTestimonials'), id: 'testimonials' },
              { label: t('navContact'), id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-orange-500 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={handleCall} className="text-orange-500 hover:text-orange-600">
              <Phone className="w-4 h-4 mr-2" />
              {t('callUs')}
            </Button>
            <Button variant="ghost" size="sm" onClick={handleEmail} className="text-orange-500 hover:text-orange-600">
              <Mail className="w-4 h-4 mr-2" />
              {t('email')}
            </Button>
            <Button variant="outline" size="sm" onClick={toggleLanguage} className="border-orange-500 text-orange-500 hover:bg-orange-500/10">
              <Globe className="w-4 h-4 mr-2" />
              {t('language')}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <div className="py-4 space-y-2">
              {[
                { label: t('navHome'), id: 'home' },
                { label: t('navProducts'), id: 'products' },
                { label: t('navAbout'), id: 'about' },
                { label: t('navTestimonials'), id: 'testimonials' },
                { label: t('navContact'), id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-orange-500 hover:bg-accent transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex space-x-2 px-4 pt-2">
                <Button variant="outline" size="sm" onClick={handleCall} className="flex-1">
                  <Phone className="w-4 h-4 mr-2" />
                  {t('callUs')}
                </Button>
                <Button variant="outline" size="sm" onClick={handleEmail} className="flex-1">
                  <Mail className="w-4 h-4 mr-2" />
                  {t('email')}
                </Button>
              </div>
              <div className="flex space-x-2 px-4 pt-2">
                <Button variant="outline" size="sm" onClick={toggleLanguage} className="flex-1 border-orange-500 text-orange-500 hover:bg-orange-500/10">
                  <Globe className="w-4 h-4 mr-2" />
                  {t('language')}
                </Button>
                <Button variant="outline" size="sm" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="flex-1">
                  {theme === 'dark' ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};
export default Header;