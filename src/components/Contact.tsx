import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Clock, Heart } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="py-16 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="animate-fade-up">
              <h3 className="font-display text-2xl font-semibold text-cream mb-4">
                Bonjour <span className="font-light italic">Cafe</span>
              </h3>
              <p className="font-body text-cream/70 leading-relaxed">
                Un colț de Paris în inima Chișinăului. Cafea, patiserie și atmosferă de poveste.
              </p>
            </div>

            {/* Hours */}
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h4 className="font-display text-lg font-semibold text-cream mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-warm-gold" />
                {t('contact.hours')}
              </h4>
              <p className="font-body text-cream/70">
                {t('contact.hours.value')}
              </p>
            </div>

            {/* Social */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="font-display text-lg font-semibold text-cream mb-4">
                {t('contact.follow')}
              </h4>
              <a
                href="https://www.instagram.com/bonjour.cafe.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-3 bg-cream/10 rounded-lg hover:bg-cream/20 transition-all duration-300 group hover:-translate-y-1"
              >
                <Instagram className="w-6 h-6 text-warm-gold group-hover:scale-110 transition-transform duration-300" />
                <span className="font-body text-cream">@bonjour.cafe.md</span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-cream/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-body text-sm text-cream/60">
                © {new Date().getFullYear()} kvieru. {t('footer.rights')}.
              </p>
              <p className="font-body text-sm text-cream/60 flex items-center gap-1">
                {t('footer.made')} <Heart className="w-4 h-4 text-warm-gold fill-warm-gold animate-pulse" /> {t('footer.in')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
