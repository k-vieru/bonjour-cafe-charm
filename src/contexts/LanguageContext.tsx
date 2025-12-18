import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ro' | 'ru';

interface Translations {
  [key: string]: {
    ro: string;
    ru: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { ro: 'Acasă', ru: 'Главная' },
  'nav.about': { ro: 'Despre Noi', ru: 'О Нас' },
  'nav.menu': { ro: 'Meniu', ru: 'Меню' },
  'nav.locations': { ro: 'Locații', ru: 'Локации' },
  'nav.reviews': { ro: 'Recenzii', ru: 'Отзывы' },
  'nav.contact': { ro: 'Contact', ru: 'Контакты' },

  // Hero
  'hero.subtitle': { ro: 'Cafenea Franțuzească', ru: 'Французская Кофейня' },
  'hero.title': { ro: 'Bonjour Cafe', ru: 'Bonjour Cafe' },
  'hero.description': { ro: 'Savurează cele mai delicioase băuturi și patiserii într-o atmosferă romantică de poveste', ru: 'Насладитесь самыми вкусными напитками и выпечкой в романтической сказочной атмосфере' },
  'hero.cta': { ro: 'Descoperă Meniul', ru: 'Открыть Меню' },
  'hero.hours': { ro: 'Deschiși zilnic 7:00 - 22:00', ru: 'Открыты ежедневно 7:00 - 22:00' },

  // About
  'about.title': { ro: 'Povestea Noastră', ru: 'Наша История' },
  'about.p1': { ro: 'În inima parcurilor din Chișinău, Bonjour Cafe aduce un colț de Paris în Moldova. De la prima rază de soare până la apusul romantic, cafenelele noastre sunt locul perfect pentru a savura o cafea preparată cu pasiune.', ru: 'В самом сердце парков Кишинева Bonjour Cafe привносит частичку Парижа в Молдову. От первых лучей солнца до романтичного заката наши кафе - идеальное место, чтобы насладиться кофе, приготовленным с любовью.' },
  'about.p2': { ro: 'Folosim doar boabe de cafea de cea mai înaltă calitate, preparate cu grijă pe aparate La Marzocco, și croissante coapte zilnic după rețete tradiționale franceze.', ru: 'Мы используем только кофейные зерна высочайшего качества, приготовленные с заботой на аппаратах La Marzocco, и круассаны, выпекаемые ежедневно по традиционным французским рецептам.' },
  'about.feature1.title': { ro: 'Cafea Premium', ru: 'Премиум Кофе' },
  'about.feature1.desc': { ro: 'Preparată pe aparate La Marzocco', ru: 'Приготовлен на аппаратах La Marzocco' },
  'about.feature2.title': { ro: 'Patiserie Proaspătă', ru: 'Свежая Выпечка' },
  'about.feature2.desc': { ro: 'Croissante și deserturi făcute zilnic', ru: 'Круассаны и десерты готовятся ежедневно' },
  'about.feature3.title': { ro: 'Atmosferă Unică', ru: 'Уникальная Атмосфера' },
  'about.feature3.desc': { ro: 'Design romantic în parcuri', ru: 'Романтичный дизайн в парках' },

  // Menu
  'menu.title': { ro: 'Meniul Nostru', ru: 'Наше Меню' },
  'menu.hot': { ro: 'Băuturi Calde', ru: 'Горячие Напитки' },
  'menu.cold': { ro: 'Băuturi Reci', ru: 'Холодные Напитки' },
  'menu.pastry': { ro: 'Patiserie', ru: 'Выпечка' },
  'menu.classic': { ro: 'Classic', ru: 'Классик' },
  'menu.specialty': { ro: 'Specialty', ru: 'Specialty' },
  'menu.additions': { ro: 'Adaose', ru: 'Добавки' },

  // Locations
  'locations.title': { ro: 'Locațiile Noastre', ru: 'Наши Локации' },
  'locations.subtitle': { ro: 'Ne găsești în cele mai frumoase parcuri din Chișinău', ru: 'Найдите нас в самых красивых парках Кишинева' },

  // Reviews
  'reviews.title': { ro: 'Ce Spun Clienții', ru: 'Что Говорят Клиенты' },
  'reviews.subtitle': { ro: 'Recenzii de la iubitorii de cafea', ru: 'Отзывы любителей кофе' },

  // Contact
  'contact.title': { ro: 'Contact', ru: 'Контакты' },
  'contact.follow': { ro: 'Urmărește-ne', ru: 'Подпишись на нас' },
  'contact.hours': { ro: 'Program', ru: 'Часы Работы' },
  'contact.hours.value': { ro: 'Zilnic: 7:00 - 22:00', ru: 'Ежедневно: 7:00 - 22:00' },

  // Footer
  'footer.rights': { ro: 'Toate drepturile rezervate', ru: 'Все права защищены' },
  'footer.made': { ro: 'Făcut cu', ru: 'Сделано с' },
  'footer.in': { ro: 'în Chișinău', ru: 'в Кишиневе' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ro');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation['ro'] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
