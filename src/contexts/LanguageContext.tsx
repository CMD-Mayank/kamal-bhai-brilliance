import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.collections': 'Collections',
    'nav.appointment': 'Book Appointment',
    'nav.gift': 'Gift Solutions',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.tagline': 'Elegance Woven in Tradition',
    'hero.subtitle': 'Discover our exquisite collection of handcrafted bridal sarees, where timeless artistry meets modern elegance.',
    'hero.cta.explore': 'Explore Collections',
    'hero.cta.appointment': 'Book Appointment',
    
    // About
    'about.title': 'Our Legacy',
    'about.subtitle': 'A Heritage of Excellence',
    'about.description': 'For over three decades, Kamal Bhai Saree Sangam has been the trusted destination for brides seeking the perfect saree. Nestled in the historic lanes of Chandni Chowk, Delhi, our family-run establishment has dressed countless brides, weaving dreams into every thread.',
    'about.craftsmanship': 'Traditional Craftsmanship',
    'about.craftsmanship.desc': 'Each saree is a masterpiece, handcrafted by skilled artisans preserving ancient weaving traditions.',
    'about.heritage': 'Heritage & Trust',
    'about.heritage.desc': 'Three generations of expertise, serving families with warmth, trust, and unparalleled quality.',
    'about.bridal': 'Bridal Expertise',
    'about.bridal.desc': 'Specialized in bridal collections, understanding the dreams and emotions of every bride.',
    
    // Collections
    'collections.title': 'Our Collections',
    'collections.subtitle': 'Curated for Every Occasion',
    'collections.bridal': 'Bridal Sarees',
    'collections.bridal.desc': 'Exquisite handwoven sarees for your most special day',
    'collections.festive': 'Festive Sarees',
    'collections.festive.desc': 'Celebrate traditions with vibrant festive collections',
    'collections.party': 'Party Wear',
    'collections.party.desc': 'Contemporary elegance for modern celebrations',
    'collections.designer': 'Designer Sarees',
    'collections.designer.desc': 'Exclusive designer pieces for the discerning bride',
    'collections.gift': 'Gift Boxes',
    'collections.gift.desc': 'Premium gifting solutions for special occasions',
    'collections.view': 'View Collection',
    
    // Appointment
    'appointment.title': 'Book Your Appointment',
    'appointment.subtitle': 'Experience personalized bridal consultation',
    'appointment.name': 'Full Name',
    'appointment.phone': 'Phone Number',
    'appointment.date': 'Preferred Date',
    'appointment.time': 'Preferred Time',
    'appointment.occasion': 'Occasion',
    'appointment.occasion.wedding': 'Wedding',
    'appointment.occasion.engagement': 'Engagement',
    'appointment.occasion.festival': 'Festival',
    'appointment.occasion.other': 'Other',
    'appointment.message': 'Special Requests',
    'appointment.submit': 'Book Appointment',
    'appointment.success': 'Thank you! We will contact you shortly to confirm your appointment.',
    
    // Gift
    'gift.title': 'Premium Gift Solutions',
    'gift.subtitle': 'The Art of Thoughtful Gifting',
    'gift.description': 'Celebrate special moments with our elegantly curated saree gift boxes. Perfect for weddings, festivals, and cherished occasions.',
    'gift.feature1': 'Luxurious Packaging',
    'gift.feature2': 'Personalized Selection',
    'gift.feature3': 'Doorstep Delivery',
    
    // Testimonials
    'testimonials.title': 'What Our Brides Say',
    'testimonials.subtitle': 'Stories of Trust & Elegance',
    
    // Contact
    'contact.title': 'Visit Our Store',
    'contact.subtitle': 'Experience the Elegance in Person',
    'contact.address': 'Chandni Chowk, Delhi, India',
    'contact.phone': '+91 98765 43210',
    'contact.hours': 'Mon - Sat: 10:00 AM - 8:00 PM',
    'contact.whatsapp': 'Chat on WhatsApp',
    
    // Footer
    'footer.tagline': 'Weaving Dreams Since 1990',
    'footer.rights': 'All rights reserved.',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.collections': 'संग्रह',
    'nav.appointment': 'अपॉइंटमेंट बुक करें',
    'nav.gift': 'उपहार समाधान',
    'nav.contact': 'संपर्क करें',
    
    // Hero
    'hero.tagline': 'परंपरा में बुनी शान',
    'hero.subtitle': 'हस्तनिर्मित दुल्हन साड़ियों का हमारा अनूठा संग्रह देखें, जहां शाश्वत कला आधुनिक शान से मिलती है।',
    'hero.cta.explore': 'संग्रह देखें',
    'hero.cta.appointment': 'अपॉइंटमेंट बुक करें',
    
    // About
    'about.title': 'हमारी विरासत',
    'about.subtitle': 'उत्कृष्टता की विरासत',
    'about.description': 'तीन दशकों से अधिक समय से, कमल भाई साड़ी संगम उन दुल्हनों के लिए विश्वसनीय गंतव्य रहा है जो परफेक्ट साड़ी की तलाश में हैं। दिल्ली के ऐतिहासिक चांदनी चौक की गलियों में बसा, हमारा पारिवारिक प्रतिष्ठान अनगिनत दुल्हनों को सजा चुका है।',
    'about.craftsmanship': 'पारंपरिक शिल्प कौशल',
    'about.craftsmanship.desc': 'प्रत्येक साड़ी एक कृति है, कुशल कारीगरों द्वारा प्राचीन बुनाई परंपराओं को संरक्षित करते हुए हस्तनिर्मित।',
    'about.heritage': 'विरासत और विश्वास',
    'about.heritage.desc': 'तीन पीढ़ियों की विशेषज्ञता, परिवारों की गर्मजोशी, विश्वास और बेजोड़ गुणवत्ता के साथ सेवा।',
    'about.bridal': 'दुल्हन विशेषज्ञता',
    'about.bridal.desc': 'दुल्हन संग्रह में विशेषज्ञ, हर दुल्हन के सपनों और भावनाओं को समझना।',
    
    // Collections
    'collections.title': 'हमारे संग्रह',
    'collections.subtitle': 'हर अवसर के लिए चुने गए',
    'collections.bridal': 'दुल्हन साड़ियां',
    'collections.bridal.desc': 'आपके सबसे खास दिन के लिए उत्कृष्ट हाथ से बुनी साड़ियां',
    'collections.festive': 'त्योहार साड़ियां',
    'collections.festive.desc': 'जीवंत त्योहारी संग्रह के साथ परंपराओं का जश्न मनाएं',
    'collections.party': 'पार्टी वियर',
    'collections.party.desc': 'आधुनिक उत्सवों के लिए समकालीन शान',
    'collections.designer': 'डिजाइनर साड़ियां',
    'collections.designer.desc': 'समझदार दुल्हन के लिए विशेष डिजाइनर टुकड़े',
    'collections.gift': 'उपहार बॉक्स',
    'collections.gift.desc': 'विशेष अवसरों के लिए प्रीमियम उपहार समाधान',
    'collections.view': 'संग्रह देखें',
    
    // Appointment
    'appointment.title': 'अपॉइंटमेंट बुक करें',
    'appointment.subtitle': 'व्यक्तिगत दुल्हन परामर्श का अनुभव करें',
    'appointment.name': 'पूरा नाम',
    'appointment.phone': 'फोन नंबर',
    'appointment.date': 'पसंदीदा तारीख',
    'appointment.time': 'पसंदीदा समय',
    'appointment.occasion': 'अवसर',
    'appointment.occasion.wedding': 'शादी',
    'appointment.occasion.engagement': 'सगाई',
    'appointment.occasion.festival': 'त्योहार',
    'appointment.occasion.other': 'अन्य',
    'appointment.message': 'विशेष अनुरोध',
    'appointment.submit': 'अपॉइंटमेंट बुक करें',
    'appointment.success': 'धन्यवाद! हम आपकी अपॉइंटमेंट की पुष्टि के लिए जल्द ही संपर्क करेंगे।',
    
    // Gift
    'gift.title': 'प्रीमियम उपहार समाधान',
    'gift.subtitle': 'सोच-समझकर उपहार देने की कला',
    'gift.description': 'हमारे शानदार ढंग से तैयार साड़ी उपहार बॉक्स के साथ विशेष क्षणों का जश्न मनाएं। शादियों, त्योहारों और अनमोल अवसरों के लिए एकदम सही।',
    'gift.feature1': 'शानदार पैकेजिंग',
    'gift.feature2': 'व्यक्तिगत चयन',
    'gift.feature3': 'घर पर डिलीवरी',
    
    // Testimonials
    'testimonials.title': 'हमारी दुल्हनें क्या कहती हैं',
    'testimonials.subtitle': 'विश्वास और शान की कहानियां',
    
    // Contact
    'contact.title': 'हमारे स्टोर पर आएं',
    'contact.subtitle': 'शान का व्यक्तिगत अनुभव करें',
    'contact.address': 'चांदनी चौक, दिल्ली, भारत',
    'contact.phone': '+91 98765 43210',
    'contact.hours': 'सोम - शनि: सुबह 10:00 - रात 8:00',
    'contact.whatsapp': 'व्हाट्सएप पर चैट करें',
    
    // Footer
    'footer.tagline': '1990 से सपने बुन रहे हैं',
    'footer.rights': 'सर्वाधिकार सुरक्षित।',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
