import React from 'react';
import Head from '@docusaurus/Head';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Canonical URL + og:url change per route, so they can't live in the static
// headTags in docusaurus.config.js — this wraps every page in the app to
// inject them dynamically, matching the current path on every single page.
export default function Root({children}) {
  const {siteConfig} = useDocusaurusContext();
  const {pathname} = useLocation();
  const canonicalUrl = `${siteConfig.url}${pathname}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
      </Head>
      {children}
    </>
  );
}
