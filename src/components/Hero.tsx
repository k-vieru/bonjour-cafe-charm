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
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 animate-fade-up [text-shadow:_0_4px_20px_rgba(0,0,0,0.8),_0_2px_10px_rgba(0,0,0,0.9),_0_0_40px_rgba(0,0,0,0.6)]">
            {t('hero.title')}
          </h1>

          {/* Description */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl px-6 py-4 mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <p className="font-body text-lg md:text-xl text-white max-w-xl mx-auto leading-relaxed [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
              {t('hero.description')}
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="#menu"
            className="group inline-block bg-gradient-warm text-primary-foreground font-body font-semibold px-8 py-4 rounded-full shadow-warm hover:shadow-glow transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 animate-fade-up relative overflow-hidden"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="relative z-10">{t('hero.cta')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-warm-gold to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" />
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
