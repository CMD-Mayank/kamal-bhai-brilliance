import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      text: 'The moment I walked into Kamal Bhai Saree Sangam, I knew I would find my dream bridal saree. The collection is exquisite, and the staff helped me choose the perfect piece for my wedding day.',
      rating: 5,
    },
    {
      name: 'Anjali Gupta',
      location: 'Mumbai',
      text: 'My mother bought her wedding saree from here 30 years ago, and I continued the tradition. The quality and craftsmanship are unmatched. Truly a heritage store.',
      rating: 5,
    },
    {
      name: 'Meera Reddy',
      location: 'Bangalore',
      text: 'I traveled from Bangalore just to visit this store. The bridal collection exceeded all my expectations. The personalized attention and expert guidance made my experience memorable.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-cream-dark" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
            {t('testimonials.title')}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-maroon mb-6">
            {t('testimonials.subtitle')}
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-8 rounded-lg shadow-elegant hover:shadow-elegant-md transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                  <Quote className="w-5 h-5 text-maroon-dark" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground font-sans leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-serif font-semibold text-maroon">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
