import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
      <button
        onClick={() => setLanguage('ro')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'ro'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        RO
      </button>
      <button
        onClick={() => setLanguage('ru')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'ru'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
