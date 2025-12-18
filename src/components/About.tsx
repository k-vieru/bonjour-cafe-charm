import { useLanguage } from '@/contexts/LanguageContext';
import { Coffee, Croissant, Sparkles } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Coffee,
      title: t('about.feature1.title'),
      desc: t('about.feature1.desc'),
    },
    {
      icon: Croissant,
      title: t('about.feature2.title'),
      desc: t('about.feature2.desc'),
    },
    {
      icon: Sparkles,
      title: t('about.feature3.title'),
      desc: t('about.feature3.desc'),
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-cream relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-float" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-warm-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Section Title */}
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-8 animate-fade-up">
            {t('about.title')}
          </h2>

          {/* Description */}
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {t('about.p1')}
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t('about.p2')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl shadow-soft hover:shadow-luxury transition-all duration-500 border border-border hover:border-primary/30 text-center hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
