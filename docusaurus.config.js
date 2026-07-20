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
        logo: {
          alt: 'Yogi Dental Center',
          src: 'img/logo.jpeg',
          height: 56,
        },
        links: [
          {
            title: 'Yogi Dental Center',
            items: [
              {
                label: '📍 30 Scotland Road, Orange, NJ 07050',
                href: 'https://maps.google.com/?q=30+Scotland+Road+Orange+NJ+07050',
              },
              {
                label: '📍 9 Mount Pleasant TPKE, STE 203, Denville, NJ 07834',
                href: 'https://maps.google.com/?q=9+Mount+Pleasant+Turnpike+Suite+203+Denville+NJ+07834',
              },
              {label: '✉️ yogidental@gmail.com', href: 'mailto:yogidental@gmail.com'},
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
              {label: 'Patient Education', to: '/patient-education'},
              {label: 'Dental Insurance', to: '/dental-insurance'},
            ],
          },
          {
            title: 'Make an Appointment',
            items: [
              {label: '📞 973-673-1311', href: 'tel:9736731311'},
              {label: 'Book Online', to: '/appointment'},
              {label: 'Blogs', to: '/blogs'},
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
