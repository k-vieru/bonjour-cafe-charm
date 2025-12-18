import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    author: 'Gheorghe Sarev',
    rating: 5,
    text: 'Cafea este la fel de bună precum în toată rețeaua, însă atmosfera este una ce te cucerește din primul moment și totul datorită unui decor și iluminări fermecătoare ✨',
    date: 'acum o lună',
  },
  {
    author: 'DMTR',
    badge: 'Local Guide',
    rating: 5,
    text: 'Beautiful kiosk in a middle of a park. They serve simple but delicious handmade chocolate, croissants and other little pastries.',
    date: 'acum 9 luni',
  },
  {
    author: 'Cristian Donciu',
    rating: 5,
    text: 'Eva, Maria si Galina sunt cele mai amabile domnisoare care lucreaza la Bonjour! Am avut ocazia de a avea o discutie extrem de placuta, pot spune chiar cu mult mai placuta decat intalnesc de obicei la Bonjour.',
    date: 'acum 3 săptămâni',
  },
  {
    author: 'Elena M',
    badge: 'Local Guide',
    rating: 5,
    text: 'I like their coffee and macaroons. The place itself is perfect for work or meeting with a friend.',
    date: 'acum 2 săptămâni',
  },
  {
    author: 'Victor Fală',
    rating: 5,
    text: 'Îmi place să-mi iau cafeaua aici. Personalul e cu zvâc și știu să-ți zâmbească neforțat chiar și când stai pitulat lângă geamul lor, căci plouă, iar asta înseamnă foarte mult.',
    date: 'acum 2 luni',
  },
  {
    author: 'Uğur Pınaraltı',
    badge: 'Local Guide',
    rating: 5,
    text: 'Very sweet cafe, as it is in the park, the atmosphere and view is beautiful too, drinks and desserts have good quality!',
    date: 'acum 4 luni',
  },
  {
    author: 'Mădălina Moisă',
    badge: 'Local Guide',
    rating: 5,
    text: 'Una dintre cele mai cochete cafenele, frumos integrata in parc, cafea si produse de patiserie buna. Ma intorc cu drag aici de fiecare data cand ajung in Chisinau.',
    date: 'acum 11 luni',
  },
  {
    author: 'Cristina Postaru',
    badge: 'Local Guide',
    rating: 5,
    text: 'Chioșc cu o diversitate bună de cafea și ceaiuri, deserturile sunt la fel bune. Spațiul aferent este mereu amenajat foarte original și asta face sa ai o experiență plăcută.',
    date: 'acum un an',
  },
  {
    author: 'Oktay Yörük',
    badge: 'Local Guide',
    rating: 5,
    text: "It's a great place to sit and drink something cold in a Parisian atmosphere among the trees. If you're passing through these areas, I definitely recommend you to spend some time there.",
    date: 'acum un an',
  },
  {
    author: 'Bartek Show',
    badge: 'Local Guide',
    rating: 5,
    text: 'This beautiful place is one of the best cosy places in Chisinau',
    date: 'acum o lună',
  },
  {
    author: 'Rafeeque M. Ali',
    badge: 'Local Guide',
    rating: 5,
    text: 'A nice cafe at the middle of the park...great ambiance, nice coffee and croissants..',
    date: 'acum un an',
  },
  {
    author: 'neetZza nitZza',
    badge: 'Local Guide',
    rating: 5,
    text: 'The pictures speak for themselves, the atmosphere is very nice (and Frenchy). Pastry, macarons, eclairs, and all sorts of drinks are available for take away, but there are also few tables.',
    date: 'acum un an',
  },
  {
    author: 'Iana Melnik',
    badge: 'Local Guide',
    rating: 5,
    text: 'Băuturile sunt pur și simplu divine, iar atmosfera este relaxantă și primitoare. Perfect pentru a savura o cafea excelentă într-un mediu plăcut și prietenos.',
    date: 'acum un an',
  },
  {
    author: 'Shyam Mohan Peelery',
    badge: 'Local Guide',
    rating: 5,
    text: 'A good open cafe inside the Stephen the Great Central Park. It has open seats and the atmosphere is beautiful. The light and decoratives are very attractive.',
    date: 'acum un an',
  },
  {
    author: 'Олена Чурсіна',
    badge: 'Local Guide',
    rating: 5,
    text: 'Un loc foarte atmosferic, cu un fler franțuzesc 😍 Delicios, romantic, calm, cu o priveliște frumoasă, acompaniament muzical – eu și soțul meu eram într-o altă dimensiune.',
    date: 'acum 3 luni',
  },
  {
    author: 'Jakub Adamec',
    badge: 'Local Guide',
    rating: 5,
    text: 'Loc magic uimitor, personalul a fost foarte util și plăcut. Îl recomand cu siguranță, poți să stai și aici și să asculți muzică. Atmosferă grozavă.',
    date: 'acum o lună',
  },
];

const Reviews = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + reviewsPerPage >= reviews.length ? 0 : prev + reviewsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - reviewsPerPage < 0 ? Math.max(0, reviews.length - reviewsPerPage) : prev - reviewsPerPage
    );
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + reviewsPerPage);

  return (
    <section id="reviews" className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative Quote */}
      <div className="absolute top-10 left-10 opacity-5">
        <Quote className="w-48 h-48 text-primary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            {t('reviews.title')}
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            {t('reviews.subtitle')}
          </p>
          
          {/* Google Rating */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-warm-gold text-warm-gold" />
              ))}
            </div>
            <span className="font-body font-semibold text-foreground">4.5</span>
            <span className="font-body text-muted-foreground">Google Reviews</span>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {visibleReviews.map((review, index) => (
              <div
                key={currentIndex + index}
                className="bg-card p-6 rounded-2xl shadow-soft border border-border hover:border-primary/20 transition-all duration-500"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-display font-semibold text-foreground">
                      {review.author}
                    </h4>
                    {review.badge && (
                      <span className="text-xs text-primary font-medium">
                        {review.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-warm-gold text-warm-gold" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="font-body text-muted-foreground leading-relaxed mb-4 line-clamp-4">
                  "{review.text}"
                </p>

                {/* Date */}
                <p className="font-body text-sm text-muted-foreground/60">
                  {review.date}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(reviews.length / reviewsPerPage) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i * reviewsPerPage)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    Math.floor(currentIndex / reviewsPerPage) === i
                      ? 'bg-primary w-6'
                      : 'bg-border hover:bg-primary/50'
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
