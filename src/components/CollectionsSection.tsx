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
    <section id="collections" className="py-24 bg-cream-dark" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
            {t('collections.title')}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-maroon mb-6">
            {t('collections.subtitle')}
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.titleKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                collection.featured ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`aspect-[3/4] ${collection.featured ? 'md:aspect-[4/3]' : ''}`}>
                <img
                  src={collection.image}
                  alt={t(collection.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/90 via-maroon/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className={`font-serif font-bold text-cream mb-2 ${
                  collection.featured ? 'text-2xl md:text-3xl' : 'text-xl'
                }`}>
                  {t(collection.titleKey)}
                </h3>
                <p className="text-cream/80 font-sans text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t(collection.descKey)}
                </p>
                <div className="flex items-center gap-2 text-gold font-sans text-sm group-hover:gap-4 transition-all duration-300">
                  <span>{t('collections.view')}</span>
                  <ArrowRight className="w-4 h-4" />
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
