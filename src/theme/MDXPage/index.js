import React from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import MDXContent from '@theme/MDXContent';
import TOC from '@theme/TOC';
import ContentVisibility from '@theme/ContentVisibility';
import EditMetaRow from '@theme/EditMetaRow';
import styles from './styles.module.css';

// Per-page WebPage + BreadcrumbList schema.org entries, plus twitter:title/
// twitter:description — the two pieces the site-wide headTags config and
// Docusaurus's own PageMetadata can't cover, since they need this specific
// page's title/description/URL. Interlinks with the site-wide Organization/
// WebSite graph (docusaurus.config.js) via matching @id references.
function ExtraPageMetadata({title, description, permalink, lastUpdatedAt}) {
  const {siteConfig} = useDocusaurusContext();
  const absoluteUrl = `${siteConfig.url}${permalink}`;
  const dateModified = lastUpdatedAt
    ? new Date(lastUpdatedAt * 1000).toISOString()
    : undefined;

  const graph = [
    {
      '@type': 'BreadcrumbList',
      '@id': `${absoluteUrl}#breadcrumblist`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${siteConfig.url}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: title,
          item: absoluteUrl,
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${absoluteUrl}#webpage`,
      url: absoluteUrl,
      name: title,
      description,
      inLanguage: 'en-US',
      isPartOf: {'@id': `${siteConfig.url}/#website`},
      breadcrumb: {'@id': `${absoluteUrl}#breadcrumblist`},
      ...(dateModified ? {dateModified} : {}),
    },
  ];

  return (
    <Head>
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">
        {JSON.stringify({'@context': 'https://schema.org', '@graph': graph})}
      </script>
    </Head>
  );
}

export default function MDXPage(props) {
  const {content: MDXPageContent} = props;
  const {metadata, assets} = MDXPageContent;
  const {
    title,
    editUrl,
    description,
    frontMatter,
    lastUpdatedBy,
    lastUpdatedAt,
    permalink,
  } = metadata;
  const {
    keywords,
    wrapperClassName,
    hide_table_of_contents: hideTableOfContents,
  } = frontMatter;
  const image = assets.image ?? frontMatter.image;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  return (
    <HtmlClassNameProvider
      className={clsx(
        wrapperClassName ?? ThemeClassNames.wrapper.mdxPages,
        ThemeClassNames.page.mdxPage,
      )}>
      <Layout>
        <PageMetadata
          title={title}
          description={description}
          keywords={keywords}
          image={image}
        />
        <ExtraPageMetadata
          title={title}
          description={description}
          permalink={permalink}
          lastUpdatedAt={lastUpdatedAt}
        />
        <main className="container container--fluid margin-vert--lg">
          <div className={clsx('row', styles.mdxPageWrapper)}>
            <div className={clsx('col', !hideTableOfContents && 'col--8')}>
              <ContentVisibility metadata={metadata} />
              <article>
                <MDXContent>
                  <MDXPageContent />
                </MDXContent>
              </article>
              {canDisplayEditMetaRow && (
                <EditMetaRow
                  className={clsx(
                    'margin-top--sm',
                    ThemeClassNames.pages.pageFooterEditMetaRow,
                  )}
                  editUrl={editUrl}
                  lastUpdatedAt={lastUpdatedAt}
                  lastUpdatedBy={lastUpdatedBy}
                />
              )}
            </div>
            {!hideTableOfContents && MDXPageContent.toc.length > 0 && (
              <div className="col col--2">
                <TOC
                  toc={MDXPageContent.toc}
                  minHeadingLevel={frontMatter.toc_min_heading_level}
                  maxHeadingLevel={frontMatter.toc_max_heading_level}
                />
              </div>
            )}
          </div>
        </main>
      </Layout>
    </HtmlClassNameProvider>
  );
}
