import React from 'react';
import Link from '@docusaurus/Link';

/**
 * Blog list as a 3-column "Resource" card grid, matching yogidental.com:
 * feature image, teal "Resource" label, teal title, and an excerpt.
 */
export default function BlogPostItems({items}) {
  return (
    <div className="yd-blog-grid">
      {items.map(({content}) => {
        const {metadata, frontMatter, assets} = content;
        const image = (assets && assets.image) || frontMatter.image;
        return (
          <Link
            className="yd-blog-card"
            to={metadata.permalink}
            key={metadata.permalink}>
            {image && (
              <div className="yd-blog-card__img">
                <img src={image} alt={metadata.title} loading="lazy" />
              </div>
            )}
            <div className="yd-blog-card__body">
              <span className="yd-blog-card__label">Resource</span>
              <h2 className="yd-blog-card__title">{metadata.title}</h2>
              <p className="yd-blog-card__excerpt">{metadata.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
