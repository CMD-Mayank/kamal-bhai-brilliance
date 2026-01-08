import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Clock, User, Phone, MessageSquare, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AppointmentSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="appointment" className="py-24 bg-maroon" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
              {t('appointment.title')}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-cream mb-6">
              {t('appointment.subtitle')}
            </h2>
            <div className="w-20 h-0.5 bg-gold mb-8" />
            
            <p className="text-cream/80 font-sans text-lg leading-relaxed mb-8">
              Experience a personalized bridal consultation with our expert stylists. 
              We'll help you find the perfect saree that matches your vision for your special day.
            </p>

            <div className="space-y-4 text-cream/90">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-gold" />
                </div>
                <span>Private consultation room</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-gold" />
                </div>
                <span>Expert bridal stylists</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-gold" />
                </div>
                <span>Curated collection preview</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="bg-cream rounded-lg p-8 md:p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                  <Check className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-maroon mb-4">
                  Appointment Requested!
                </h3>
                <p className="text-muted-foreground">
                  {t('appointment.success')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-cream rounded-lg p-8 md:p-12 shadow-elegant-md">
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t('appointment.name')}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        placeholder="Enter your full name"
                        className="pl-10 h-12 bg-background border-border focus:border-gold"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t('appointment.phone')}
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="pl-10 h-12 bg-background border-border focus:border-gold"
                        required
                      />
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t('appointment.date')}
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          type="date"
                          className="pl-10 h-12 bg-background border-border focus:border-gold"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t('appointment.time')}
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          type="time"
                          className="pl-10 h-12 bg-background border-border focus:border-gold"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Occasion */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t('appointment.occasion')}
                    </label>
                    <Select required>
                      <SelectTrigger className="h-12 bg-background border-border focus:border-gold">
                        <SelectValue placeholder="Select occasion" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">{t('appointment.occasion.wedding')}</SelectItem>
                        <SelectItem value="engagement">{t('appointment.occasion.engagement')}</SelectItem>
                        <SelectItem value="festival">{t('appointment.occasion.festival')}</SelectItem>
                        <SelectItem value="other">{t('appointment.occasion.other')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t('appointment.message')}
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                      <Textarea
                        placeholder="Any special requests or preferences..."
                        className="pl-10 min-h-[100px] bg-background border-border focus:border-gold resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <Button type="submit" variant="gold" size="xl" className="w-full">
                    {t('appointment.submit')}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
