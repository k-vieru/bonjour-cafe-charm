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
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-warm-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Section Title */}
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-8">
            {t('about.title')}
          </h2>

          {/* Description */}
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            {t('about.p1')}
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            {t('about.p2')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl shadow-soft hover:shadow-warm transition-all duration-500 border border-border hover:border-primary/30 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
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
