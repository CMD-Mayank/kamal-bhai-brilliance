import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: t('contact.address'),
    },
    {
      icon: Phone,
      title: 'Phone',
      content: t('contact.phone'),
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: t('contact.hours'),
    },
  ];

  return (
    <section id="contact" className="py-24 bg-cream" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
            {t('contact.title')}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-maroon mb-6">
            {t('contact.subtitle')}
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden shadow-elegant-md h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5499844815757!2d77.22726531508368!3d28.650847982417577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0c4b4b8d4f%3A0x9c5b2a6b8e8b8f8f!2sChandni%20Chowk%2C%20Delhi!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location"
            />
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-maroon text-lg mb-1">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground font-sans">
                      {info.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <Button 
              variant="gold" 
              size="xl" 
              className="w-fit"
              asChild
            >
              <a 
                href="https://wa.me/919711741234" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                {t('contact.whatsapp')}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
