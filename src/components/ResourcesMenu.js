import React from 'react';
import NestedMenu from './NestedMenu';

// Resources flyout data — Patient Education is a category that flies out its
// education pages; the rest are plain links (matches yogidental.com).
const MENU_ITEMS = [
  {
    label: 'Patient Education',
    to: '/patient-education',
    items: [
      {label: 'Understanding Tooth Wear', to: '/understanding-tooth-wear'},
      {label: 'Causes of Tooth Pain', to: '/causes-of-tooth-pain'},
      {label: 'Obstructive Sleep Apnea', to: '/obstructive-sleep-apnea'},
      {label: 'Cracked Tooth', to: '/cracked-tooth'},
      {label: 'Consequences of Bone Loss', to: '/consequences-of-bone-loss'},
      {label: 'Plaque and Calculus (Tartar)', to: '/plaque-and-calculus'},
      {
        label: 'Temporomandibular Joint Disorder',
        to: '/temporomandibular-joint-disorder',
      },
    ],
  },
  {label: 'Blogs', to: '/blogs'},
  {label: 'Reviews page', to: '/reviews-page'},
  {label: 'Survey Link', to: '/survey-link'},
];

export default function ResourcesMenu(props) {
  return (
    <NestedMenu {...props} label="Resources" to="/resource" menuItems={MENU_ITEMS} />
  );
}
