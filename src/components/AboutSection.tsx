import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Heart, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Sparkles,
      titleKey: 'about.craftsmanship',
      descKey: 'about.craftsmanship.desc',
    },
    {
      icon: Heart,
      titleKey: 'about.heritage',
      descKey: 'about.heritage.desc',
    },
    {
      icon: Award,
      titleKey: 'about.bridal',
      descKey: 'about.bridal.desc',
    },
  ];

  return (
    <section id="about" className="py-24 bg-cream" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
            {t('about.title')}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-maroon mb-6">
            {t('about.subtitle')}
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Image Pattern */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-maroon/10 rounded-lg overflow-hidden relative">
              <div className="absolute inset-4 border border-gold/30 rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl font-serif font-bold text-maroon/20 mb-4">KB</div>
                  <div className="text-2xl font-serif text-maroon">Est. 1990</div>
                  <div className="text-sm text-gold-dark tracking-widest mt-2">CHANDNI CHOWK, DELHI</div>
                </div>
              </div>
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold" />
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-foreground/80 leading-relaxed mb-8 font-sans">
              {t('about.description')}
            </p>
            <p className="text-muted-foreground leading-relaxed font-sans italic border-l-4 border-gold pl-6">
              "Every saree we craft carries the essence of Indian heritage – the intricate zari work, 
              the vibrant colors, the stories of generations. When a bride wears our saree, she doesn't 
              just wear fabric; she wears a legacy."
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className="bg-card p-8 rounded-lg shadow-elegant hover:shadow-elegant-md transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-maroon mb-4">
                {t(feature.titleKey)}
              </h3>
              <p className="text-muted-foreground font-sans">
                {t(feature.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
