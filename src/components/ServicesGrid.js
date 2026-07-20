import React from 'react';
import Link from '@docusaurus/Link';

// Tooth-icon variants cycled across the cards, as on the source site.
const ICONS = [
  '/img/site/whitee.png',
  '/img/site/check.png',
  '/img/site/filling.png',
];

const SERVICES = [
  {title: 'Diagnostic Exam', to: '/dental-exams', desc: 'A detailed exam using digital tools to assess your teeth, gums, and bite—creating a personalized treatment plan for optimal oral health.'},
  {title: 'Cleaning', to: '/teeth-cleaning', desc: 'Gentle, thorough cleanings remove plaque and tartar to prevent cavities, gum disease, and bad breath—keeping your smile fresh and healthy.'},
  {title: 'Periodontal Scaling', to: '/periodontal-gum-disease-treatment', desc: 'Deep cleaning below the gumline to remove buildup and treat early-stage gum disease, protecting your teeth and bone health.'},
  {title: 'Laser-Assisted Gum Treatments', to: '/gum-treatment', desc: 'Minimally invasive laser therapy treats gum disease, reduces bacteria, and promotes healing with less discomfort and faster recovery.'},
  {title: 'Extraction', to: '/contact', desc: 'Gentle tooth removal when damage or infection is too severe—always focused on comfort and future restoration options.'},
  {title: 'Socket Preservation', to: '/preventive-dentistry', desc: 'Preserves bone structure after extraction, preparing the area for future implants and supporting long-term dental health.'},
  {title: 'Implants (Single and Multiple Teeth)', to: '/dental-implants', desc: 'Permanent replacements for missing teeth using titanium roots and custom crowns—restoring full function and natural aesthetics.'},
  {title: 'All-on-4 Hybrid Dentures', to: '/dentures-teeth-in-a-day', desc: 'All-on-4 Hybrid Dentures offer a secure, full-arch tooth replacement using just four implants—delivering stability, a natural look, and a life-changing smile transformation.'},
  {title: 'Snap-On Smile', to: '/snap-on-smile', desc: 'Snap-On Smile is a removable arch that fits over your teeth to instantly transform your smile—no drilling, no pain, just a quick, comfortable way to boost your confidence and appearance.'},
  {title: 'Zoom Whitening', to: '/zoom-teeth-whitening', desc: 'In-office whitening that lifts stains and brightens your teeth by several shades in one visit—safe, fast, and effective.'},
  {title: 'Resin Restoration', to: '/tooth-fillings', desc: 'Tooth-colored fillings that repair decay or damage while blending seamlessly with your natural teeth for a flawless look.'},
  {title: 'Veneers (Porcelain)', to: '/porcelain-veneers', desc: 'Porcelain veneers are thin, durable shells that cover chips, stains, or gaps—enhancing your smile with a flawless, natural-looking finish.'},
  {title: 'Same-Day Crowns', to: '/porcelain-crowns', desc: 'Get high-quality crowns crafted and placed in a single visit—no temporary crowns or multiple appointments needed.'},
  {title: 'Root Canals', to: '/root-canals-2', desc: 'Save infected teeth with a root canal—relieves pain, removes infection, and restores your natural tooth’s strength.'},
  {title: 'Cosmetic Dentistry', to: '/cosmetic-dentistry-2', desc: 'From whitening to veneers, we enhance your smile’s look and feel with treatments tailored to your goals and features.'},
  {title: 'Sinus Augmentation', to: '/contact', desc: 'Boosts bone volume in the upper jaw to prepare for implants—ideal for patients with bone loss near the sinus area.'},
  {title: 'Invisalign', to: '/invisalign-braces', desc: 'Clear, removable aligners straighten your teeth discreetly—no wires, no brackets, just a confident, aligned smile.'},
  {title: 'Preventive Dentistry', to: '/preventive-dentistry', desc: 'Keep your smile healthy with our Preventive Dentistry services, including cleanings, exams, and early detection to stop dental issues before they start.'},
  {title: 'General & Family Dentistry', to: '/general-family-dentistry', desc: "Complete dental care for all ages! From check-ups to fillings, we keep your family's smiles healthy, bright, and pain-free."},
];

export default function ServicesGrid() {
  return (
    <div className="yd-services-grid">
      {SERVICES.map((service, i) => (
        <div className="yd-service-card" key={service.title}>
          <div className="yd-service-card__head">
            <img
              className="yd-service-card__ico"
              src={ICONS[i % ICONS.length]}
              alt=""
              aria-hidden="true"
            />
            <h3>{service.title}</h3>
          </div>
          <p>{service.desc}</p>
          <Link className="yd-readmore" to={service.to}>
            Read More <span aria-hidden="true">→</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
