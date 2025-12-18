import { useState } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

interface Location {
  name: string;
  address: string;
  hours: string;
  lat: number;
  lng: number;
  featured?: boolean;
}

const locations: Location[] = [
  {
    name: 'Central Chișinău',
    address: 'Parcul Catedralei, Chișinău',
    hours: '07:00 - 23:00',
    lat: 47.0245,
    lng: 28.8322,
    featured: true,
  },
  {
    name: 'Strada Grigore Alexandrescu',
    address: 'Str. Grigore Alexandrescu, Chișinău',
    hours: '07:00 - 23:00',
    lat: 47.0167,
    lng: 28.8497,
  },
  {
    name: 'Bulevardul Mircea cel Bătrîn',
    address: 'Bul. Mircea cel Bătrîn 12/6, Chișinău',
    hours: '07:00 - 23:00',
    lat: 47.0456,
    lng: 28.8156,
  },
  {
    name: 'Scuar Cuza Vodă',
    address: 'Scuar Cuza Vodă / Sarmizegetusa, Chișinău',
    hours: '07:00 - 23:00',
    lat: 47.0189,
    lng: 28.8267,
  },
  {
    name: 'Ștefan cel Mare și Sfânt',
    address: 'Bul. Ștefan cel Mare și Sfânt 81, Chișinău',
    hours: '07:00 - 23:00',
    lat: 47.0211,
    lng: 28.8378,
  },
];

const CafeMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);

  const openDirections = (lat: number, lng: number) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
  };

  // Create OpenStreetMap embed URL centered on selected location
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${selectedLocation.lng - 0.02},${selectedLocation.lat - 0.01},${selectedLocation.lng + 0.02},${selectedLocation.lat + 0.01}&layer=mapnik&marker=${selectedLocation.lat},${selectedLocation.lng}`;

  return (
    <div className="space-y-4">
      {/* Location selector pills */}
      <div className="flex flex-wrap gap-2 justify-center">
        {locations.map((location, index) => (
          <button
            key={index}
            onClick={() => setSelectedLocation(location)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm transition-all duration-300 ${
              selectedLocation.name === location.name
                ? 'bg-primary text-primary-foreground shadow-warm'
                : 'bg-card border border-border hover:border-primary/30 text-foreground'
            }`}
          >
            <MapPin className="w-4 h-4" />
            {location.name}
          </button>
        ))}
      </div>

      {/* Map container */}
      <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-luxury border border-border relative">
        <iframe
          src={mapUrl}
          className="w-full h-full border-0"
          title="Cafe Location Map"
          loading="lazy"
        />
        
        {/* Overlay with location info */}
        <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display font-semibold text-foreground">{selectedLocation.name}</h3>
              <p className="text-sm text-muted-foreground">{selectedLocation.address}</p>
              <p className="text-sm text-muted-foreground">{selectedLocation.hours}</p>
            </div>
            <button
              onClick={() => openDirections(selectedLocation.lat, selectedLocation.lng)}
              className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:shadow-warm shrink-0"
            >
              <ExternalLink className="w-4 h-4" />
              Direcții
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeMap;
