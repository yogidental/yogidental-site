import React from 'react';
import Link from '@docusaurus/Link';

/**
 * Services navbar item — a nested (flyout) mega-menu matching yogidental.com:
 * hovering "Services" reveals the three categories, and hovering a category
 * flies its child services out beside it. Registered as a custom navbar item
 * type via src/theme/NavbarItem/ComponentTypes.js so it keeps real SPA links.
 */
const CATEGORIES = [
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

export default function ServicesMenu({mobile}) {
  // Mobile drawer: no hover, so render the full tree expanded and indented.
  if (mobile) {
    return (
      <>
        <li className="menu__list-item">
          <Link className="menu__link" to="/services">
            Services
          </Link>
        </li>
        {CATEGORIES.map((cat) => (
          <React.Fragment key={cat.to}>
            <li className="menu__list-item">
              <Link className="menu__link yd-svc__m-cat" to={cat.to}>
                {cat.label}
              </Link>
            </li>
            {cat.items.map((item) => (
              <li className="menu__list-item" key={item.to}>
                <Link className="menu__link yd-svc__m-sub" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </React.Fragment>
        ))}
      </>
    );
  }

  // Desktop: hoverable dropdown with a flyout submenu per category.
  return (
    <div className="navbar__item dropdown dropdown--hoverable yd-svc">
      <Link className="navbar__link" to="/services">
        Services
      </Link>
      <div className="dropdown__menu yd-svc__menu">
        <Link className="yd-svc__all" to="/services">
          All Services
        </Link>
        <ul className="yd-svc__cats">
          {CATEGORIES.map((cat) => (
            <li className="yd-svc__cat" key={cat.to}>
              <Link className="yd-svc__cat-link" to={cat.to}>
                <span>{cat.label}</span>
                <span className="yd-svc__arrow" aria-hidden="true">
                  ›
                </span>
              </Link>
              <ul className="yd-svc__flyout">
                {cat.items.map((item) => (
                  <li key={item.to}>
                    <Link className="yd-svc__sub" to={item.to}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
