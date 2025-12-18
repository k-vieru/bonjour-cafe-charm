import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Flame, Snowflake, Croissant } from 'lucide-react';

type MenuCategory = 'hot' | 'cold' | 'pastry';

interface MenuItem {
  name: string;
  volume?: string;
  classicPrice?: number;
  specialtyPrice?: number;
  price?: number;
}

const menuData: Record<MenuCategory, MenuItem[]> = {
  hot: [
    { name: 'Espresso', volume: '25 ml', classicPrice: 22, specialtyPrice: 34 },
    { name: 'Espresso double', volume: '50 ml', classicPrice: 33, specialtyPrice: 45 },
    { name: 'Americano', volume: '150 ml', classicPrice: 22, specialtyPrice: 34 },
    { name: 'Americano double', volume: '300 ml', classicPrice: 33, specialtyPrice: 45 },
    { name: 'Cappuccino', volume: '200 ml', classicPrice: 28, specialtyPrice: 40 },
    { name: 'Cappuccino double', volume: '300 ml', classicPrice: 40, specialtyPrice: 52 },
    { name: 'Latte', volume: '300 ml', classicPrice: 33, specialtyPrice: 45 },
    { name: 'Matcha', volume: '300 ml', classicPrice: 53, specialtyPrice: 75 },
    { name: 'Irish', volume: '200 ml', classicPrice: 32, specialtyPrice: 44 },
    { name: 'Raf', volume: '200 ml', classicPrice: 40, specialtyPrice: 52 },
    { name: 'Mocacino', volume: '200 ml', classicPrice: 35, specialtyPrice: 47 },
    { name: 'Ciocolată fierbinte', volume: '200 ml', classicPrice: 30 },
    { name: 'Ceai plic', volume: '400 ml', classicPrice: 18 },
    { name: 'Ceai infuzie', volume: '400 ml', classicPrice: 28 },
    { name: 'Ceai gem-natur', volume: '300 ml', classicPrice: 32 },
  ],
  cold: [
    { name: 'Iced Coffee', volume: '300 ml', classicPrice: 33, specialtyPrice: 45 },
    { name: 'Iced Coffee double', volume: '420 ml', classicPrice: 44, specialtyPrice: 56 },
    { name: 'Înghețată cornet', volume: '80 gr', classicPrice: 25 },
    { name: 'Înghețată topping pahar', volume: '100 gr', classicPrice: 35 },
    { name: 'Înghețată Bonjour', volume: '200 gr', classicPrice: 45 },
    { name: 'Înghețată pahar comest.', volume: '150 gr', classicPrice: 30, specialtyPrice: 33 },
    { name: 'Limonada / Mojito', volume: '400 ml', classicPrice: 44 },
    { name: 'Milkshake', volume: '420 ml', classicPrice: 44 },
    { name: 'Café glacé', volume: '200 ml', classicPrice: 33 },
    { name: 'Smoothie', volume: '400 ml', classicPrice: 60 },
    { name: 'Iced Coffee Tonic', volume: '300 ml', classicPrice: 40 },
    { name: 'Fruity Coffee Wow', volume: '400 ml', classicPrice: 44 },
    { name: 'Iced Tea gem-natur', volume: '400 ml', classicPrice: 38 },
    { name: 'Iced Tea infuzie', volume: '300 ml', classicPrice: 36 },
    { name: 'Iced Tea', volume: '400 ml', classicPrice: 28 },
    { name: 'Iced Matcha', volume: '420 ml', classicPrice: 55, specialtyPrice: 75 },
    { name: 'Coca-Cola / Fanta / Sprite', classicPrice: 20 },
    { name: 'Cappy/Fuzetea', classicPrice: 22 },
    { name: 'Suc pentru copii', classicPrice: 14 },
    { name: 'Schweppes', classicPrice: 18 },
    { name: 'Apă Borsec', classicPrice: 15 },
    { name: 'Burn', classicPrice: 40 },
  ],
  pastry: [
    { name: 'Croissant clasic', price: 20 },
    { name: 'Croissant ciocolată', price: 25 },
    { name: 'Bretzel trandafir și migdale', price: 33 },
    { name: 'Bretzel șuncă / becon', price: 40 },
    { name: 'Croissant șuncă', price: 45 },
    { name: 'Crenvursti în aluat', price: 25 },
    { name: 'Plăcintă cu brânză', price: 25 },
    { name: 'Plăcintă cu vișine', price: 22 },
    { name: 'Foietaj cu carne de pui', price: 35 },
    { name: 'Baghetă asorti', price: 58 },
    { name: 'Macarons', price: 32 },
    { name: 'Éclair', price: 23, specialtyPrice: 38 },
    { name: 'Desert asorti', price: 40 },
    { name: 'Desert vegan', price: 35, specialtyPrice: 45 },
  ],
};

const additions = [
  { name: 'Lapte', price: 3 },
  { name: 'Toping sirop', price: 3 },
  { name: 'Lapte vegan', price: '10/15' },
  { name: 'Pahar comestibil', price: '6/10' },
];

const Menu = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('hot');

  const categories = [
    { id: 'hot' as const, icon: Flame, label: t('menu.hot') },
    { id: 'cold' as const, icon: Snowflake, label: t('menu.cold') },
    { id: 'pastry' as const, icon: Croissant, label: t('menu.pastry') },
  ];

  return (
    <section id="menu" className="py-24 bg-gradient-dark text-cream relative overflow-hidden">
      {/* Decorative chalk texture effect */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-center mb-12">
          {t('menu.title')}
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-body font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground shadow-warm'
                  : 'bg-accent/50 text-cream/80 hover:bg-accent/70'
              }`}
            >
              <cat.icon className="w-5 h-5" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-3xl mx-auto">
          {/* Header for drinks with classic/specialty */}
          {(activeCategory === 'hot' || activeCategory === 'cold') && (
            <div className="flex justify-end gap-8 mb-4 pr-4 text-sm text-cream/60 font-body uppercase tracking-wider">
              <span className="w-16 text-center">{t('menu.classic')}</span>
              <span className="w-16 text-center">{t('menu.specialty')}</span>
            </div>
          )}

          <div className="space-y-1">
            {menuData[activeCategory].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-cream/5 transition-colors group"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-body text-lg text-cream group-hover:text-warm-gold transition-colors">
                    {item.name}
                  </span>
                  {item.volume && (
                    <span className="text-sm text-cream/50">{item.volume}</span>
                  )}
                </div>
                
                <div className="flex items-center gap-8">
                  {item.classicPrice !== undefined && (
                    <span className="w-16 text-center font-body font-semibold text-warm-gold">
                      {item.classicPrice}
                    </span>
                  )}
                  {item.specialtyPrice !== undefined ? (
                    <span className="w-16 text-center font-body font-semibold text-warm-gold">
                      {item.specialtyPrice}
                    </span>
                  ) : item.classicPrice !== undefined ? (
                    <span className="w-16 text-center font-body text-cream/30">—</span>
                  ) : null}
                  {item.price !== undefined && (
                    <span className="font-body font-semibold text-warm-gold">
                      {item.price}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Additions section for hot drinks */}
          {activeCategory === 'hot' && (
            <div className="mt-8 pt-6 border-t border-cream/20">
              <h3 className="font-display text-xl text-cream/80 mb-4">{t('menu.additions')}</h3>
              <div className="space-y-2">
                {additions.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 px-4">
                    <span className="font-body text-cream/70">{item.name}</span>
                    <span className="font-body text-warm-gold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Price note */}
        <p className="text-center text-cream/50 text-sm mt-8 font-body">
          * {t('menu.classic')} / {t('menu.specialty')} - MDL
        </p>
      </div>
    </section>
  );
};

export default Menu;
