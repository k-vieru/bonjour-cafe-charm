import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Clock, Phone } from 'lucide-react';

const locations = [
  {
    name: 'Parcul Central Ștefan cel Mare',
    address: 'Parcul Ștefan cel Mare și Sfânt, Chișinău',
    hours: '7:00 - 22:00',
    phone: '+373 XX XXX XXX',
    featured: true,
  },
  {
    name: 'Parcul Valea Morilor',
    address: 'Parcul Valea Morilor, Chișinău',
    hours: '7:00 - 22:00',
    phone: '+373 XX XXX XXX',
  },
  {
    name: 'Parcul Dendrariu',
    address: 'Parcul Dendrariu, Chișinău',
    hours: '7:00 - 22:00',
    phone: '+373 XX XXX XXX',
  },
  {
    name: 'Parcul La Izvor',
    address: 'Parcul La Izvor, Chișinău',
    hours: '7:00 - 22:00',
    phone: '+373 XX XXX XXX',
  },
];

const Locations = () => {
  const { t } = useLanguage();

  return (
    <section id="locations" className="py-24 bg-gradient-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-warm-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            {t('locations.title')}
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            {t('locations.subtitle')}
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`group bg-card p-6 rounded-2xl border transition-all duration-500 hover:shadow-warm ${
                location.featured
                  ? 'border-primary/30 shadow-lg md:col-span-2 md:max-w-2xl md:mx-auto'
                  : 'border-border hover:border-primary/20'
              }`}
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {location.name}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-body">{location.address}</span>
                </div>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-body">{location.hours}</span>
                </div>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-body">{location.phone}</span>
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
