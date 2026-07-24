import React from 'react';

// Patient reviews shown in a continuously moving marquee (as on the source).
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

function Stars() {
  return (
    <div className="yd-review-card__stars" aria-hidden="true">
      {'★★★★★'}
    </div>
  );
}

function Card({review}) {
  return (
    <div className="yd-review-card">
      <Stars />
      <p className="yd-review-card__text">{review.text}</p>
      <span className="yd-review-card__divider" />
      <strong className="yd-review-card__name">{review.name}</strong>
    </div>
  );
}

export default function Reviews() {
  const loop = [...REVIEWS, ...REVIEWS];
  return (
    <div className="yd-marquee yd-reviews">
      <div className="yd-marquee__track">
        {loop.map((review, i) => (
          <Card review={review} key={i} />
        ))}
      </div>
    </div>
  );
}
