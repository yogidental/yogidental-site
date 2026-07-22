import React, {useState, useEffect, useCallback} from 'react';

// Trusted-financing-partner logos, shown one at a time in the carousel.
const LOGOS = [
  {src: '/img/site/logo.svg', alt: 'Financing partner'},
  {
    src: '/img/site/Alphaeon_Credit_logo_registered_RGB-300x138.png',
    alt: 'Alphaeon Credit',
  },
  {src: '/img/site/Logo-Primary-1.svg', alt: 'Financing partner'},
  {src: '/img/site/lendingclubLogo.svg', alt: 'LendingClub'},
  {src: '/img/site/main_logo-300x77.png', alt: 'CareCredit'},
];

export default function LogoCarousel() {
  const [index, setIndex] = useState(0);
  const count = LOGOS.length;

  const go = useCallback(
    (delta) => setIndex((prev) => (prev + delta + count) % count),
    [count],
  );

  // Auto-advance (client-side only).
  useEffect(() => {
    const timer = setInterval(() => setIndex((p) => (p + 1) % count), 3500);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className="yd-carousel">
      <button
        type="button"
        className="yd-carousel__arrow yd-carousel__arrow--prev"
        onClick={() => go(-1)}
        aria-label="Previous logo">
        ‹
      </button>

      <div className="yd-carousel__viewport">
        {LOGOS.map((logo, i) => (
          <img
            key={logo.src}
            className={
              'yd-carousel__logo' + (i === index ? ' is-active' : '')
            }
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
          />
        ))}
      </div>

      <button
        type="button"
        className="yd-carousel__arrow yd-carousel__arrow--next"
        onClick={() => go(1)}
        aria-label="Next logo">
        ›
      </button>

      <div className="yd-carousel__dots">
        {LOGOS.map((logo, i) => (
          <button
            type="button"
            key={logo.src}
            className={'yd-carousel__dot' + (i === index ? ' is-active' : '')}
            onClick={() => setIndex(i)}
            aria-label={`Go to logo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
