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
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex flex-col items-start">
            <span className="text-2xl md:text-3xl font-serif font-bold text-maroon tracking-wide">
              Kamal Bhai
            </span>
            <span className="text-xs md:text-sm font-sans text-gold-dark tracking-[0.2em] uppercase">
              Saree Sangam
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground/80 hover:text-maroon font-sans text-sm tracking-wide transition-colors duration-300 relative group"
              >
                {t(item.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-gold/30 hover:border-gold hover:bg-gold/5 transition-all duration-300"
            >
              <Globe className="w-4 h-4 text-maroon" />
              <span className="text-sm font-medium text-maroon">
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
