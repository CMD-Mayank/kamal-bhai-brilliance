import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.collections', href: '#collections' },
    { key: 'nav.gift', href: '#gift' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-xl border-b border-gold/30 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo with elegant styling */}
          <a href="#home" className="flex flex-col items-start group">
            <span className="text-2xl md:text-3xl font-serif font-bold text-maroon tracking-wide group-hover:text-shimmer transition-all duration-500">
              Kamal Bhai
            </span>
            <span className="text-xs md:text-sm font-sans text-gold-dark tracking-[0.25em] uppercase">
              Saree Sangam
            </span>
          </a>

          {/* Desktop Navigation with enhanced hover */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground/70 hover:text-maroon font-sans text-sm tracking-wider uppercase transition-all duration-300 relative group"
              >
                {t(item.key)}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gold-light via-gold to-gold-light group-hover:w-full transition-all duration-400 ease-out" />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-5">
            {/* Language Toggle with glow */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 hover:border-gold hover:bg-gold/10 hover:shadow-glow transition-all duration-400 group"
            >
              <Globe className="w-4 h-4 text-maroon group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm font-semibold text-maroon tracking-wide">
                {language === 'en' ? 'हिंदी' : 'EN'}
              </span>
            </button>

            {/* CTA Button - Desktop */}
            <Button variant="gold" size="sm" className="hidden md:flex" asChild>
              <a href="#appointment">{t('nav.appointment')}</a>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-maroon"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-cream border-t border-gold/20"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground/80 hover:text-maroon font-sans text-lg py-2 border-b border-gold/10"
                >
                  {t(item.key)}
                </a>
              ))}
              <Button variant="gold" className="mt-4" asChild>
                <a href="#appointment" onClick={() => setIsMenuOpen(false)}>
                  {t('nav.appointment')}
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
