import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.collections', href: '#collections' },
    { key: 'nav.appointment', href: '#appointment' },
    { key: 'nav.gift', href: '#gift' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="bg-maroon-dark py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <div className="mb-4">
              <span className="text-2xl md:text-3xl font-serif font-bold text-cream tracking-wide">
                Kamal Bhai
              </span>
              <div className="text-xs md:text-sm font-sans text-gold tracking-[0.2em] uppercase">
                Saree Sangam
              </div>
            </div>
            <p className="text-cream/70 font-sans">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-gold mb-6">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-cream/70 hover:text-gold font-sans text-sm transition-colors duration-300"
                >
                  {t(link.key)}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-gold mb-6">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-cream/70 hover:text-gold hover:border-gold transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gold/20 mb-8" />

        {/* Copyright */}
        <div className="text-center text-cream/50 font-sans text-sm">
          © {new Date().getFullYear()} Kamal Bhai Saree Sangam. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
