import React from 'react';
import NestedMenu from './NestedMenu';

// Services flyout data — "All Services" lead, then three categories that each
// fly out their child services on hover (matches yogidental.com).
const MENU_ITEMS = [
  {label: 'All Services', to: '/services', header: true},
  {
    label: 'Preventive Dentistry',
    to: '/preventive-dentistry',
    items: [
      {label: 'Teeth Cleaning', to: '/teeth-cleaning'},
      {label: 'Exams', to: '/dental-exams'},
      {label: 'Xrays', to: '/xrays'},
      {label: 'Fluoride Treatments', to: '/fluoride-treatments'},
      {label: 'Oral Cancer Screening', to: '/oral-cancer-screening'},
    ],
  },
  {
    label: 'General Family Dentistry',
    to: '/general-family-dentistry',
    items: [
      {
        label: 'Periodontal Gum Disease Treatment',
        to: '/periodontal-gum-disease-treatment',
      },
      {label: 'Invisalign Braces', to: '/invisalign-braces'},
      {label: 'Dentures / Teeth-in-a-day', to: '/dentures-teeth-in-a-day'},
      {label: 'Root Canals', to: '/root-canals-2'},
      {label: 'Dental Implants', to: '/dental-implants'},
    ],
  },
  {
    label: 'Cosmetic Dentistry',
    to: '/cosmetic-dentistry-2',
    items: [
      {label: 'ZOOM Teeth Whitening', to: '/zoom-teeth-whitening'},
      {label: 'Porcelain Veneers', to: '/porcelain-veneers'},
      {label: 'Porcelain Bridges', to: '/porcelain-bridges'},
      {label: 'Porcelain Crowns', to: '/porcelain-crowns'},
      {label: 'Tooth Fillings', to: '/tooth-fillings'},
      {label: 'Snap on Smile', to: '/snap-on-smile'},
      {label: 'Drill-Free Cavities', to: '/drill-free-cavities'},
    ],
  },
];

export default function ServicesMenu(props) {
  return (
    <NestedMenu {...props} label="Services" to="/services" menuItems={MENU_ITEMS} />
  );
}
