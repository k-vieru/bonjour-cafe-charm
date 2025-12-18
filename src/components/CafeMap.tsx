import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

// Custom marker icon
const customIcon = new Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8B6914" width="36" height="36">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  `),
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36],
});

const CafeMap = () => {
  const center: [number, number] = [47.0245, 28.8322];

  const openDirections = (lat: number, lng: number) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
  };

  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-luxury border border-border">
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={[location.lat, location.lng]}
            icon={customIcon}
          >
            <Popup>
              <div className="p-2 min-w-[200px]">
                <h3 className="font-semibold text-base mb-1">{location.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{location.address}</p>
                <p className="text-sm text-gray-500 mb-3">{location.hours}</p>
                <button
                  onClick={() => openDirections(location.lat, location.lng)}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Direcții
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CafeMap;
