import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Clock } from 'lucide-react';

const locations = [
  {
    name: 'Central Chișinău',
    address: 'Parcul Catedralei, Chișinău',
    hours: '07:00 - 23:00',
    featured: true,
  },
  {
    name: 'Strada Grigore Alexandrescu',
    address: 'Str. Grigore Alexandrescu, Chișinău',
    hours: '07:00 - 23:00',
  },
  {
    name: 'Bulevardul Mircea cel Bătrîn',
    address: 'Bul. Mircea cel Bătrîn 12/6, Chișinău',
    hours: '07:00 - 23:00',
  },
  {
    name: 'Scuar Cuza Vodă',
    address: 'Scuar Cuza Vodă / Sarmizegetusa, Chișinău',
    hours: '07:00 - 23:00',
  },
  {
    name: 'Ștefan cel Mare și Sfânt',
    address: 'Bul. Ștefan cel Mare și Sfânt 81, Chișinău',
    hours: '07:00 - 23:00',
  },
];

const Locations = () => {
  const { t } = useLanguage();

  return (
    <section id="locations" className="py-24 bg-gradient-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-warm-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4 animate-fade-up">
            {t('locations.title')}
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {t('locations.subtitle')}
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`group bg-card p-6 rounded-2xl border transition-all duration-500 hover:shadow-warm hover:-translate-y-2 animate-fade-up ${
                location.featured
                  ? 'border-primary/30 shadow-lg md:col-span-2 lg:col-span-1'
                  : 'border-border hover:border-primary/20'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {location.name}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-body">{location.address}</span>
                </div>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-body">{location.hours}</span>
                </div>
              </div>

              {location.featured && (
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    Locație principală
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
