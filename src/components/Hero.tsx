import { useLanguage } from '@/contexts/LanguageContext';
import { Clock } from 'lucide-react';
import cafeKiosk from '@/assets/cafe-kiosk.png';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={cafeKiosk}
          alt="Bonjour Cafe Kiosk"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/40 to-espresso/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {/* String lights effect */}
        <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-warm-gold/30 to-transparent animate-shimmer" />
        <div className="absolute top-24 left-10 w-2 h-2 rounded-full bg-warm-gold/60 animate-glow" />
        <div className="absolute top-22 left-1/4 w-2 h-2 rounded-full bg-warm-gold/60 animate-glow" style={{ animationDelay: '0.3s' }} />
        <div className="absolute top-20 left-1/2 w-2 h-2 rounded-full bg-warm-gold/60 animate-glow" style={{ animationDelay: '0.6s' }} />
        <div className="absolute top-24 right-1/4 w-2 h-2 rounded-full bg-warm-gold/60 animate-glow" style={{ animationDelay: '0.9s' }} />
        <div className="absolute top-22 right-10 w-2 h-2 rounded-full bg-warm-gold/60 animate-glow" style={{ animationDelay: '1.2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center pt-24">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-cream mb-6 animate-fade-up drop-shadow-2xl">
            {t('hero.title')}
          </h1>

          {/* Description */}
          <p className="font-body text-lg md:text-xl text-cream/90 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up drop-shadow-md" style={{ animationDelay: '0.2s' }}>
            {t('hero.description')}
          </p>

          {/* CTA Button */}
          <a
            href="#menu"
            className="inline-block bg-gradient-warm text-primary-foreground font-body font-semibold px-8 py-4 rounded-full shadow-warm hover:shadow-glow transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            {t('hero.cta')}
          </a>

          {/* Hours Badge */}
          <div
            className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 bg-foreground/90 rounded-full animate-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            <Clock className="w-4 h-4 text-primary" />
            <span className="font-body text-sm text-background font-medium">{t('hero.hours')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
