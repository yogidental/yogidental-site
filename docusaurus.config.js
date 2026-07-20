// @ts-check
// Docusaurus configuration for the Yogi Dental Center site.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yogi Dental Center',
  tagline: 'Gentle Family & Cosmetic Dentistry in Orange, NJ',
  favicon: 'img/favicon.jpeg',

  future: {
    v4: true,
  },

  url: 'https://yogidental.com',
  baseUrl: '/',

  organizationName: 'yogidental',
  projectName: 'yogidental-site',

  // Migrated pages contain legacy cross-links; warn rather than fail the build.
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        // On WordPress these posts lived at the site root. The blog plugin
        // scopes post slugs to routeBasePath, so keep the old URLs working.
        redirects: [
          // /about 301s to /about-us upstream; several pages link to it.
          {from: '/about', to: '/about-us'},
          // These three are linked from live buttons but 404 on the source
          // site. Page content is migrated verbatim, so the links still point
          // here; these redirects send them where they were meant to go.
          {from: '/financing', to: '/dental-financing'},
          {from: '/exams', to: '/dental-exams'},
          {from: '/genereral-family-dentistry', to: '/general-family-dentistry'},
        ].concat([
          'why-does-tooth-pain-come-and-go',
          'can-invisalign-fix-crowded-teeth-and-bite-problems',
          'dream-smile-with-porcelain-veneers',
          'drill-free-cavity-treatment',
          'fast-dental-treatments-that-work-to-improve-your-smile',
          'how-we-make-every-dental-visit-painless-and-comfortable',
          'how-do-invisalign-work-to-strengthen-your-teeth',
          'the-importance-of-regular-dental-check-ups',
          'dental-hygiene-tips-for-a-bright-smile',
        ].map((slug) => ({from: `/${slug}`, to: `/blogs/${slug}`}))),
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: 'blogs',
          blogTitle: 'Blogs',
          blogDescription:
            'Dental health tips and news from Yogi Dental Center',
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 10,
          postsPerPage: 10,
          showReadingTime: true,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          // Migrated posts have no <!-- truncate --> marker.
          onUntruncatedBlogPosts: 'ignore',
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'Yogi Dental Center Blog',
            xslt: true,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.jpeg',
      // The source site is light-only; hide the theme toggle to match.
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Yogi Dental Center',
        logo: {
          alt: 'Yogi Dental Center',
          src: 'img/logo.jpeg',
        },
        items: [
          {to: '/', label: 'Home', position: 'left', activeBaseRegex: '^/$'},
          {
            type: 'dropdown',
            label: 'About Us',
            position: 'left',
            items: [
              {to: '/about-us', label: 'About Us'},
              {to: '/dental-financing', label: 'Financing'},
              {to: '/guarantee', label: 'Guarantee'},
              {to: '/dental-insurance', label: 'Dental Insurance'},
            ],
          },
          {
            type: 'dropdown',
            label: 'Services',
            position: 'left',
            className: 'yd-mega-toggle',
            // Grouped mega-menu matching yogidental.com: three service
            // categories, each heading its own column of child services.
            // The category / child classNames drive the multi-column CSS.
            items: [
              {to: '/services', label: 'All Services', className: 'yd-cat-all'},
              {
                to: '/preventive-dentistry',
                label: 'Preventive Dentistry',
                className: 'yd-cat',
              },
              {to: '/teeth-cleaning', label: 'Teeth Cleaning', className: 'yd-sub'},
              {to: '/dental-exams', label: 'Exams', className: 'yd-sub'},
              {to: '/xrays', label: 'Xrays', className: 'yd-sub'},
              {
                to: '/fluoride-treatments',
                label: 'Fluoride Treatments',
                className: 'yd-sub',
              },
              {
                to: '/oral-cancer-screening',
                label: 'Oral Cancer Screening',
                className: 'yd-sub',
              },
              {
                to: '/general-family-dentistry',
                label: 'General Family Dentistry',
                className: 'yd-cat',
              },
              {
                to: '/periodontal-gum-disease-treatment',
                label: 'Periodontal Gum Disease Treatment',
                className: 'yd-sub',
              },
              {to: '/invisalign-braces', label: 'Invisalign Braces', className: 'yd-sub'},
              {
                to: '/dentures-teeth-in-a-day',
                label: 'Dentures / Teeth-in-a-day',
                className: 'yd-sub',
              },
              {to: '/root-canals-2', label: 'Root Canals', className: 'yd-sub'},
              {to: '/dental-implants', label: 'Dental Implants', className: 'yd-sub'},
              {
                to: '/cosmetic-dentistry-2',
                label: 'Cosmetic Dentistry',
                className: 'yd-cat',
              },
              {
                to: '/zoom-teeth-whitening',
                label: 'ZOOM Teeth Whitening',
                className: 'yd-sub',
              },
              {to: '/porcelain-veneers', label: 'Porcelain Veneers', className: 'yd-sub'},
              {to: '/porcelain-bridges', label: 'Porcelain Bridges', className: 'yd-sub'},
              {to: '/porcelain-crowns', label: 'Porcelain Crowns', className: 'yd-sub'},
              {to: '/tooth-fillings', label: 'Tooth Fillings', className: 'yd-sub'},
              {to: '/snap-on-smile', label: 'Snap on Smile', className: 'yd-sub'},
              {to: '/drill-free-cavities', label: 'Drill-Free Cavities', className: 'yd-sub'},
            ],
          },
          {to: '/smile-gallery', label: 'Smile Gallery', position: 'left'},
          {
            type: 'dropdown',
            label: 'Resources',
            position: 'left',
            items: [
              {to: '/resource', label: 'Resources'},
              {to: '/patient-education', label: 'Patient Education'},
              {to: '/blogs', label: 'Blogs'},
              {to: '/reviews-page', label: 'Reviews'},
              {to: '/testimonials', label: 'Testimonials'},
              {to: '/survey-link', label: 'Survey Link'},
            ],
          },
          {
            to: '/appointment',
            label: 'Make Appointment',
            position: 'right',
            className: 'navbar-cta',
          },
          {
            href: 'tel:9736731311',
            label: '📞 973-673-1311',
            position: 'right',
            className: 'navbar-phone',
          },
        ],
      },
      footer: {
        style: 'light',
        // Rebuilt to mirror the source footer: brand + locations column,
        // two chevron link lists, and an appointment blurb with a phone pill.
        links: [
          {
            items: [
              {
                html: '<img class="footer__brand-logo" src="/img/logo.jpeg" alt="Yogi Dental Center" />',
              },
              {
                html:
                  '<div class="footer__loc">' +
                  '<svg class="footer__ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>' +
                  '<span><strong>Yogi Dental Center</strong><br/>30 Scotland Road, Orange, NJ 07050</span></div>',
              },
              {
                html:
                  '<div class="footer__loc">' +
                  '<svg class="footer__ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>' +
                  '<span><strong>Smile Center of Denville</strong><br/>9 Mount Pleasant TPKE, STE 203, Denville, NJ 07834</span></div>',
              },
              {
                html:
                  '<a class="footer__email" href="mailto:yogidental@gmail.com">' +
                  '<svg class="footer__ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>' +
                  '<span>yogidental@gmail.com</span></a>',
              },
            ],
          },
          {
            title: 'Quick Links',
            items: [
              {label: 'About Us', to: '/about-us'},
              {label: 'Services', to: '/services'},
              {label: 'Contact', to: '/contact'},
              {label: 'Smile Gallery', to: '/smile-gallery'},
              {label: 'Reviews', to: '/reviews-page'},
            ],
          },
          {
            title: 'Useful Links',
            items: [
              {label: 'Privacy Policy', to: '/privacy-policy'},
              {label: 'Terms and Conditions', to: '/terms-and-conditions'},
              {label: 'Disclaimer', to: '/terms-and-conditions'},
              {label: 'Support', to: '/contact'},
            ],
          },
          {
            title: 'Make an Appointment',
            items: [
              {
                html:
                  '<p class="footer__appt">Booking your visit at Yogi Dental is quick and easy. ' +
                  'Whether you&rsquo;re due for a checkup, need a consultation, or want to explore ' +
                  'cosmetic treatments, our friendly team is ready to help. Simply call us or book ' +
                  'online to choose a convenient time that fits your schedule. Your journey to a ' +
                  'healthier, brighter smile starts here!</p>',
              },
              {
                html:
                  '<a class="footer__phone" href="tel:9736731311">' +
                  '<span class="footer__phone-ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg></span>' +
                  '<span>973-673-1311</span></a>',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Yogi Dental. All rights reserved. Rajal Patel DDS — Orange New Jersey Dentist`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
