import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-saree.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroImage}
          alt="Premium Bridal Saree"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-dark/95 via-maroon/85 to-maroon-dark/90" />
        {/* Decorative overlay pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(40 70% 50%) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-1/4 right-10 w-32 h-32 border border-gold/20 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-20 h-20 border border-gold/15 rounded-full hidden lg:block"
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 100 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-0.5 bg-gradient-to-r from-gold via-gold-light to-transparent mb-10"
          />

          {/* Tagline with shimmer effect */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-cream mb-8 leading-tight"
          >
            <span className="inline-block">{t('hero.tagline')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-cream/85 font-sans font-light mb-12 max-w-xl leading-relaxed tracking-wide"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTAs with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Button variant="hero" size="xl" asChild className="group relative overflow-hidden">
              <a href="#collections">
                <span className="relative z-10">{t('hero.cta.explore')}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-gold-light/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="backdrop-blur-sm">
              <a href="#appointment">{t('hero.cta.appointment')}</a>
            </Button>
          </motion.div>

          {/* Trust Badge with enhanced design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20 flex items-center gap-8 text-cream/70"
          >
            <div className="flex flex-col items-center">
              <span className="text-4xl font-serif font-bold text-shimmer">30+</span>
              <span className="text-xs tracking-widest uppercase mt-1">Years of Excellence</span>
            </div>
            <div className="w-px h-14 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
            <div className="flex flex-col items-center">
              <span className="text-4xl font-serif font-bold text-shimmer">10K+</span>
              <span className="text-xs tracking-widest uppercase mt-1">Happy Brides</span>
            </div>
            <div className="w-px h-14 bg-gradient-to-b from-transparent via-gold/50 to-transparent hidden sm:block" />
            <div className="hidden sm:flex flex-col items-center">
              <span className="text-4xl font-serif font-bold text-shimmer">100%</span>
              <span className="text-xs tracking-widest uppercase mt-1">Authentic Handloom</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-7 h-12 rounded-full border-2 border-gold/40 flex items-start justify-center p-2 backdrop-blur-sm"
        >
          <motion.div 
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1.5 h-3 rounded-full bg-gradient-to-b from-gold to-gold-light" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
