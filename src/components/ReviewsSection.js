import React, {useEffect, useRef, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// Static curated reviews — always shown, and the permanent fallback when no
// Google Places API key is configured (see docusaurus.config.js customFields).
const REVIEWS = [
  {name: 'Kachine McDougald', text: 'Yogi provides me with great care, as I feel at home with the service provided every visit. They make the appointment process very welcoming and easy going. Thanks to Ms.Keisha & Chasity I leave each visit taken care of with a smile on my face. 🙂'},
  {name: 'Queen Bell', text: 'Overall the staff is professional. The staff will ask if you need anything to drink while waiting. I like the fact they will text you to see how you are doing after every visit.'},
  {name: 'Claire Mnt', text: 'Nikki showed me amazing customer service from the beginning. She made sure that she asked me how my day was and asked if the temperature in the room was sufficient. She assured me that the doctor would be in to see me in seconds. The room was clean and I honestly have no complaints at all.'},
  {name: 'Jocelyn Cruz', text: 'Yogi dental was absolutely amazing!!! They were so kind and so helpful. Helped me setup a great arrangement for what ever my insurance didn’t cover. Truly recommend them for any work needed!'},
  {name: 'Cat Life', text: 'Best dentists in the area. Great office staff. Accommodating appointments and treatment. I hope they soon take Medicaid because the service is top notch.'},
  {name: 'dyani lewis', text: 'I got all 4 wisdom teeth extracted at this location and it was such a comforting experience, everyone was patient and explained everything clearly and followed up with my needs. I definitely recommend for anyone who needs a dentist that they can trust!'},
  {name: 'Dejon Scott', text: 'I’ve been going to this dentist for years. The staffs are amazing and they all work together. Great work YOGIDENTAL.'},
  {name: 'Judah Mourneth', text: 'Customers service, the experience, professionalism very great and top notch. With very competent dentists that knows what they’re doing 100% I will surely recommend them to friends and family.'},
  {name: 'Bee Hue', text: 'Keycha in reception is amazing. Perfect energy, very nice, and very informative.'},
  {name: 'yahyah manley', text: 'Yogi dental is the best dentist I’ve been to in a while. Great service as well as a friendly welcoming. Chasity is a great help, she has pleasant conversations and is very courteous when doing xrays. Highly recommend.'},
  {name: 'Christine Michel', text: 'The staff is very pleasant. They always check on you every step of the way. I’ve been guided on how to maintain better dental care. Would highly recommend.'},
  {name: 'teresa miranda', text: 'A pleasant experience! The staff is friendly and professional, highly recommend! Stephanie was very knowledgeable and helpful.'},
  {name: 'Martin Hall', text: 'The Doctors and staff very pleasant, comforting and very professional. Special thanks goes out to Nicky, Rose and especially the work horse of the group Saba at the front desk. Happy Thanksgiving to all.'},
  {name: 'Jamal Edghill', text: 'Yogi Dental is a great place to get your teeth taken care of. The staff is extremely helpful and Dr. Patel always takes care of me.'},
  {name: 'Jemima Noel', text: 'Really love coming here. I love the receptionist, she is so friendly. Always so excited to greet you when you come. The doctors are friendly and helpful. The best dental team.'},
  {name: 'Nyjanah Pride', text: 'Wonderful dentist office. Have been coming here for a year now and love it. The doctors/providers are amazing and know what they’re doing. Definitely would recommend.'},
  {name: 'Ann Baker', text: 'Great service, very professional and personable. I had an implant and it looks perfect — you would never be able to tell. I give them 5 ⭐️.'},
  {name: 'Keona Neal', text: 'Dr. Patel and her assistant Katherine is the BEST! They both made me feel very comfortable during my visit and took care of all my needs. My teeth not only feel clean but they look very good!'},
  {name: 'Ashley Mercado', text: 'Staff were wonderful. Nicky is so funny. The doctors are knowledgeable and attentive. Overall great experience.'},
  {name: 'Anthony Clinton', text: 'They were great. I came in for an extraction and cleaning. Didn’t hurt at all and was in and out with proper instructions and guidance. I would totally recommend this place.'},
  {name: 'Darnell Robinson', text: 'I am very pleased with this office. The staff is very friendly and helpful. I came in with unhealthy gums and left with them healthy. 10/10!'},
  {name: 'Roodner Paul', text: 'Yogi dental staff was professional and attentive to my care.'},
  {name: 'Kshama Gera', text: 'Such an amazing experience with Chasity and Dr. Patel.'},
  {name: 'Anthony Smith', text: 'Chasity gave great customer service and I am very satisfied.'},
];

const FALLBACK_RATING = 4.8;
const FALLBACK_TOTAL = 1204;
const GOOGLE_REVIEW_LINK = 'https://share.google/Ul3KD5H5LNoUGxTuw';

const MAPS_SCRIPT_ID = 'yd-google-maps-places';

function loadMapsScript(apiKey) {
  return new Promise((resolve, reject) => {
    if (window.google?.maps?.places) {
      resolve();
      return;
    }
    const existing = document.getElementById(MAPS_SCRIPT_ID);
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', reject);
      return;
    }
    const script = document.createElement('script');
    script.id = MAPS_SCRIPT_ID;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// Google's Place Details API returns at most 5 reviews — that's a hard API
// limit, not something we can configure around. We show those live reviews
// first, then top up with the curated list so the page still feels full.
function useGoogleReviews(apiKey, placeId) {
  const [live, setLive] = useState(null);
  const nodeRef = useRef(null);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM || !apiKey || !placeId) {
      return;
    }
    let cancelled = false;

    loadMapsScript(apiKey)
      .then(() => {
        if (cancelled) return;
        if (!nodeRef.current) {
          nodeRef.current = document.createElement('div');
        }
        const service = new window.google.maps.places.PlacesService(nodeRef.current);
        service.getDetails(
          {placeId, fields: ['rating', 'user_ratings_total', 'reviews']},
          (place, status) => {
            if (cancelled) return;
            if (status !== window.google.maps.places.PlacesServiceStatus.OK || !place) {
              return;
            }
            setLive({
              rating: place.rating,
              total: place.user_ratings_total,
              reviews: (place.reviews || []).map((r) => ({
                name: r.author_name,
                text: r.text,
                rating: r.rating,
              })),
            });
          },
        );
      })
      .catch(() => {
        // Network/key error — silently keep the static fallback.
      });

    return () => {
      cancelled = true;
    };
  }, [apiKey, placeId]);

  return live;
}

function Stars({count = 5}) {
  return (
    <div className="yd-review-box__stars" aria-hidden="true">
      {'★★★★★'.slice(0, count)}
    </div>
  );
}

function ReviewBox({review}) {
  return (
    <div className="yd-review-box">
      <Stars count={review.rating || 5} />
      <p className="yd-review-box__text">{review.text}</p>
      <span className="yd-review-box__divider" />
      <strong className="yd-review-box__name">{review.name}</strong>
    </div>
  );
}

function MarqueeRow({items, slow}) {
  const loop = [...items, ...items];
  return (
    <div className="yd-reviews-row">
      <div className={slow ? 'yd-marquee__track yd-marquee__track--slow' : 'yd-marquee__track'}>
        {loop.map((review, i) => (
          <ReviewBox review={review} key={i} />
        ))}
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const {siteConfig} = useDocusaurusContext();
  const {googlePlacesApiKey, googlePlaceId} = siteConfig.customFields || {};
  const live = useGoogleReviews(googlePlacesApiKey, googlePlaceId);

  const rating = live?.rating ?? FALLBACK_RATING;
  const total = live?.total ?? FALLBACK_TOTAL;
  const allReviews = live?.reviews?.length ? [...live.reviews, ...REVIEWS] : REVIEWS;

  const mid = Math.ceil(allReviews.length / 2);
  const rowA = allReviews.slice(0, mid);
  const rowB = allReviews.slice(mid);

  return (
    <div className="yd-reviews-section">
      <div className="yd-rating-summary">
        <div className="yd-rating-summary__badge">
          <span className="yd-rating-summary__score">{rating.toFixed(1)}</span>
        </div>
        <div className="yd-rating-summary__right">
          <span className="yd-rating-summary__label">Excellent</span>
          <div className="yd-rating-summary__stars" aria-hidden="true">★★★★★</div>
          <p className="yd-rating-summary__meta">
            Based on <strong>{total.toLocaleString()}</strong> Google reviews
          </p>
        </div>
        <a
          className="yd-rating-summary__cta"
          href={GOOGLE_REVIEW_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          Write a Review
        </a>
      </div>

      <div className="yd-reviews">
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} slow />
      </div>
    </div>
  );
}
