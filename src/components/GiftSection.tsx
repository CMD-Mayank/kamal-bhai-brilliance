import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Gift, Truck, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import giftBox from '@/assets/gift-box.jpg';

const GiftSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    { icon: Gift, titleKey: 'gift.feature1' },
    { icon: Heart, titleKey: 'gift.feature2' },
    { icon: Truck, titleKey: 'gift.feature3' },
  ];

  return (
    <section id="gift" className="py-24 bg-cream" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <img
                src={giftBox}
                alt="Premium Gift Box"
                className="rounded-lg shadow-elegant-md w-full"
              />
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 rounded-lg -z-10" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-lg -z-10" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
              {t('gift.title')}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-maroon mb-6">
              {t('gift.subtitle')}
            </h2>
            <div className="w-20 h-0.5 bg-gold mb-8" />
            
            <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-10">
              {t('gift.description')}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-gold" />
                  </div>
                  <span className="font-sans font-medium text-foreground">
                    {t(feature.titleKey)}
                  </span>
                </motion.div>
              ))}
            </div>

            <Button variant="maroon" size="xl" asChild>
              <a href="#contact">Explore Gift Options</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
