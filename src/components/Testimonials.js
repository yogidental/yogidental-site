import React from 'react';

// Patient reviews shown in a continuously-scrolling marquee (as on the source).
const AV = {
  a: '/img/site/testimonial-Q8JDNBT.png',
  b: '/img/site/testimonial-YV9ABZR.png',
  c: '/img/site/testimonial-83S5W35.jpg',
  d: '/img/site/testimonial-M6NJPEF.png',
  e: '/img/site/testimonial-A8E2W8S.jpg',
};

const REVIEWS = [
  {quote: 'What I like most is the warmth and professionalism of the staff. The doctors are open, down to earth and truly phenomenal. I have been a client for years and I have no immediate plans to switch.', name: 'Ms. Delrose Robinson', role: 'Entrepreneur', avatar: AV.a},
  {quote: 'The teeth fit perfectly in my mouth. I am very satisfied with the results. I have nothing but promise for the doctors. They do perfect follow up work.', name: 'Mr. Frank Reid', role: 'Manager', avatar: AV.b},
  {quote: 'I was very well accommodated. I didn’t feel any pain throughout any of my visits. I trust Dr. Patel and her staff. I feel like I have been treated like a number one patient.', name: 'Mr. Jeffery Mathurin', role: 'HR Manager', avatar: AV.c},
  {quote: 'I submit this letter to express my great satisfaction with your combined efforts and commitment towards making me a happy patient. It truly does not go unrecognized. I am genuinely happy with my results.', name: 'Ms. Camille Wilkinson', role: 'HR Manager', avatar: AV.d},
  {quote: 'Firstly, I must thank each and every one of you for making me feel safe and secure. I was always so nervous and scared of needles, but after Dr. Patel spoke to me and explained, I felt so relaxed. I have three implants done and I am very happy with the work.', name: 'Mrs. Dhanrajie Sonnylal', role: 'Entrepreneur', avatar: AV.e},
  {quote: 'When I first came in to get my teeth whitened, I was very optimistic. Dr. Patel did a great job — now I find myself blinding my eyes every time I smile in the mirror. I would highly recommend Dr. Patel to anyone looking for a bigger and better smile.', name: 'Emmanuel Freeman', role: 'Manager', avatar: AV.a},
  {quote: 'I am satisfied so far with my implants. My doctors have done a good job — no disappointment — and I thank the staff also for helping. Thank You all so much.', name: 'Charel Matthews', role: 'HR Manager', avatar: AV.b},
  {quote: 'Thank You Dr. Patel and your staff for a wonderful job. I am pain free and confident when I smile. I have learned the importance of regular teeth brushing and regular dental visits. Thank You again.', name: 'Susana Martinez', role: 'Entrepreneur', avatar: AV.c},
];

function Card({review}) {
  return (
    <div className="yd-tcard">
      <span className="yd-tcard__mark" aria-hidden="true">”</span>
      <p className="yd-tcard__quote">{review.quote}</p>
      <div className="yd-tcard__author">
        <img className="yd-tcard__avatar" src={review.avatar} alt="" aria-hidden="true" />
        <span>
          <strong>— {review.name}</strong>
          <br />
          <span className="yd-role">{review.role}</span>
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Duplicate the list so the marquee loops seamlessly.
  const loop = [...REVIEWS, ...REVIEWS];
  return (
    <div className="yd-marquee">
      <div className="yd-marquee__track">
        {loop.map((review, i) => (
          <Card review={review} key={i} />
        ))}
      </div>
    </div>
  );
}
