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
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
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
            items: [
              {to: '/services', label: 'All Services'},
              {to: '/preventive-dentistry', label: 'Preventive Dentistry'},
              {to: '/teeth-cleaning', label: '— Teeth Cleaning'},
              {to: '/dental-exams', label: '— Exams'},
              {to: '/xrays', label: '— Xrays'},
              {to: '/fluoride-treatments', label: '— Fluoride Treatments'},
              {
                to: '/oral-cancer-screening',
                label: '— Oral Cancer Screening',
              },
              {
                to: '/general-family-dentistry',
                label: 'General Family Dentistry',
              },
              {
                to: '/periodontal-gum-disease-treatment',
                label: '— Periodontal Gum Disease Treatment',
              },
              {to: '/invisalign-braces', label: '— Invisalign Braces'},
              {
                to: '/dentures-teeth-in-a-day',
                label: '— Dentures / Teeth-in-a-day',
              },
              {to: '/root-canals-2', label: '— Root Canals'},
              {to: '/dental-implants', label: '— Dental Implants'},
              {to: '/cosmetic-dentistry-2', label: 'Cosmetic Dentistry'},
              {
                to: '/zoom-teeth-whitening',
                label: '— ZOOM Teeth Whitening',
              },
              {to: '/porcelain-veneers', label: '— Porcelain Veneers'},
              {to: '/porcelain-bridges', label: '— Porcelain Bridges'},
              {to: '/porcelain-crowns', label: '— Porcelain Crowns'},
              {to: '/tooth-fillings', label: '— Tooth Fillings'},
              {to: '/snap-on-smile', label: '— Snap on Smile'},
              {to: '/drill-free-cavities', label: '— Drill-Free Cavities'},
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
          {to: '/contact', label: 'Contact', position: 'right'},
          {
            to: '/appointment',
            label: 'Make an Appointment',
            position: 'right',
            className: 'navbar-cta',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Services',
            items: [
              {label: 'Preventive Dentistry', to: '/preventive-dentistry'},
              {
                label: 'General Family Dentistry',
                to: '/general-family-dentistry',
              },
              {label: 'Cosmetic Dentistry', to: '/cosmetic-dentistry-2'},
              {label: 'Dental Implants', to: '/dental-implants'},
              {label: 'Invisalign Braces', to: '/invisalign-braces'},
            ],
          },
          {
            title: 'Useful Links',
            items: [
              {label: 'About Us', to: '/about-us'},
              {label: 'Smile Gallery', to: '/smile-gallery'},
              {label: 'Patient Education', to: '/patient-education'},
              {label: 'Blogs', to: '/blogs'},
              {label: 'Dental Insurance', to: '/dental-insurance'},
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: '30 Scotland Road, Orange, NJ 07050',
                href: 'https://maps.google.com/?q=30+Scotland+Road+Orange+NJ+07050',
              },
              {label: '973-673-1311', href: 'tel:9736731311'},
              {label: 'Make an Appointment', to: '/appointment'},
              {label: 'Contact Us', to: '/contact'},
            ],
          },
          {
            title: 'Legal',
            items: [
              {label: 'Privacy Policy', to: '/privacy-policy'},
              {label: 'Terms and Conditions', to: '/terms-and-conditions'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Yogi Dental Center. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
