import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@kuringifoods.com,sprfoods1999@gmail.com?subject=Website Inquiry from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}`;
    window.location.href = mailtoLink;
    toast({
      title: "📧 Redirecting to Email Client",
      description: "Please send the pre-filled email from your mail application."
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contactCall'),
      details: ["+91 866 761 2625"],
      color: "text-green-500",
      href: "tel:+918667612625"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: ["+91 866 761 2625"],
      color: "text-green-500",
      href: "https://wa.me/918667612625"
    },
    {
      icon: Mail,
      title: t('contactEmail'),
      details: ["contact@kuringifoods.com", "sprfoods1999@gmail.com"],
      color: "text-blue-500",
      href: "mailto:contact@kuringifoods.com"
    },
    {
      icon: MapPin,
      title: t('contactVisit'),
      details: ["SPR Food Products", "9/105, 3rd Main Rd, Thirupathi Nagar", "Kolathur, Chennai, Tamil Nadu - 600099"],
      color: "text-red-500"
    },
    {
      icon: Clock,
      title: t('contactHours'),
      details: [t('contactHoursDetail1'), t('contactHoursDetail2')],
      color: "text-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="food-gradient bg-clip-text text-white">{t('contactTitle')}</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">{t('contactInfo')}</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className={`w-12 h-12 bg-card rounded-full flex items-center justify-center ${info.color} border border-border`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        info.href && idx === 0 ? (
                          <a key={idx} href={info.href} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-orange-500 transition-colors">{detail}</a>
                        ) : (
                          <p key={idx} className="text-foreground/80">{detail}</p>
                        )
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-3xl p-8 border border-border">
              <h4 className="text-xl font-bold text-card-foreground mb-4">{t('whyChoose')}</h4>
              <ul className="space-y-3">
                {[t('why1'), t('why2'), t('why3'), t('why4'), t('why5')].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-card-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 border border-border"
          >
            <h3 className="text-2xl font-bold text-card-foreground mb-6">{t('sendMessage')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground/80 mb-2">{t('formName')}</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground/80 mb-2">{t('formPhone')}</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" placeholder="Your phone number" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground/80 mb-2">{t('formEmail')}</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground/80 mb-2">{t('formMessage')}</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:opacity-90 text-white font-semibold py-3 rounded-xl">
                <Send className="w-5 h-5 mr-2" />
                {t('formSubmit')}
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-card rounded-3xl p-8 text-center border border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">{t('findOnMap')}</h3>
            <p className="text-card-foreground/80 mb-6">{t('mapSubtitle')}</p>
            <div className="bg-background rounded-2xl p-4 shadow-inner">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=80.2225,13.1285,80.2275,13.1315&layer=mapnik&marker=13.13,80.225"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SPR Food Products Location"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;