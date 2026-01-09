import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

import bridalSaree from '@/assets/bridal-saree.jpg';
import festiveSaree from '@/assets/festive-saree.jpg';
import partySaree from '@/assets/party-saree.jpg';
import designerSaree from '@/assets/designer-saree.jpg';
import giftBox from '@/assets/gift-box.jpg';

const CollectionsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const collections = [
    {
      titleKey: 'collections.bridal',
      descKey: 'collections.bridal.desc',
      image: bridalSaree,
      featured: true,
    },
    {
      titleKey: 'collections.festive',
      descKey: 'collections.festive.desc',
      image: festiveSaree,
    },
    {
      titleKey: 'collections.party',
      descKey: 'collections.party.desc',
      image: partySaree,
    },
    {
      titleKey: 'collections.designer',
      descKey: 'collections.designer.desc',
      image: designerSaree,
    },
    {
      titleKey: 'collections.gift',
      descKey: 'collections.gift.desc',
      image: giftBox,
    },
  ];

  return (
    <section id="collections" className="py-28 bg-cream-dark relative overflow-hidden" ref={ref}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(40 70% 50% / 0.1) 1px, transparent 0)', backgroundSize: '60px 60px' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with ornate design */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-gold font-sans text-sm tracking-[0.4em] uppercase mb-6 block font-medium">
            {t('collections.title')}
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-maroon mb-8">
            {t('collections.subtitle')}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rotate-45 border border-gold" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Collections Grid with enhanced cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.titleKey}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer shadow-luxury hover:shadow-[0_30px_80px_-20px_hsl(345_65%_25%/0.4)] transition-all duration-500 ${
                collection.featured ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`aspect-[3/4] ${collection.featured ? 'md:aspect-[4/3]' : ''}`}>
                <img
                  src={collection.image}
                  alt={t(collection.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              
              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/95 via-maroon/40 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Decorative border on hover */}
              <div className="absolute inset-2 border border-gold/0 group-hover:border-gold/30 rounded-lg transition-all duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform group-hover:translate-y-[-8px] transition-transform duration-500">
                <h3 className={`font-serif font-bold text-cream mb-3 ${
                  collection.featured ? 'text-2xl md:text-4xl' : 'text-xl'
                }`}>
                  {t(collection.titleKey)}
                </h3>
                <p className="text-cream/80 font-sans text-sm mb-5 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {t(collection.descKey)}
                </p>
                <div className="flex items-center gap-2 text-gold font-sans text-sm font-medium group-hover:gap-5 transition-all duration-500">
                  <span className="tracking-wider uppercase text-xs">{t('collections.view')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
