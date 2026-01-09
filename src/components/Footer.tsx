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
    <footer className="bg-gradient-luxury py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute top-10 left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Logo & Tagline */}
          <div>
            <div className="mb-6">
              <span className="text-2xl md:text-3xl font-serif font-bold text-cream tracking-wide">
                Kamal Bhai
              </span>
              <div className="text-xs md:text-sm font-sans text-gold tracking-[0.25em] uppercase mt-1">
                Saree Sangam
              </div>
            </div>
            <p className="text-cream/60 font-sans leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-gold mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-gold/50" />
              Quick Links
            </h3>
            <nav className="grid grid-cols-2 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-cream/60 hover:text-gold font-sans text-sm transition-all duration-300 hover:translate-x-1"
                >
                  {t(link.key)}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-gold mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-gold/50" />
              Follow Us
            </h3>
            <div className="flex gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold hover:bg-gold/10 hover:shadow-glow transition-all duration-400 group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Ornate Divider */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/30" />
          <div className="w-2 h-2 rotate-45 border border-gold/50" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/30" />
        </div>

        {/* Copyright */}
        <div className="text-center text-cream/40 font-sans text-sm tracking-wider">
          © {new Date().getFullYear()} Kamal Bhai Saree Sangam. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
