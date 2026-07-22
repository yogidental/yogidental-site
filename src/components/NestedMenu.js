import React from 'react';
import Link from '@docusaurus/Link';

/**
 * Shared renderer for a navbar menu that can nest one level: each entry is
 * either a plain link, a "header" link (styled like the source's "All Services"
 * lead item), or a category whose `items` fly out beside it on hover.
 *
 * Used by ServicesMenu and ResourcesMenu, which supply their own data. Kept as
 * plain props (not Docusaurus config) so the data always reaches the component.
 */
function Category({item}) {
  const hasChildren = item.items && item.items.length > 0;
  return (
    <li className="yd-svc__cat">
      <Link className="yd-svc__cat-link" to={item.to}>
        <span>{item.label}</span>
        {hasChildren && (
          <span className="yd-svc__arrow" aria-hidden="true">
            ›
          </span>
        )}
      </Link>
      {hasChildren && (
        <ul className="yd-svc__flyout">
          {item.items.map((sub) => (
            <li key={sub.to}>
              <Link className="yd-svc__sub" to={sub.to}>
                {sub.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function NestedMenu({label, to, menuItems = [], mobile}) {
  // Mobile drawer: no hover — render the whole tree expanded and indented.
  if (mobile) {
    return (
      <>
        <li className="menu__list-item">
          <Link className="menu__link" to={to}>
            {label}
          </Link>
        </li>
        {menuItems.map((item) => (
          <React.Fragment key={item.to}>
            <li className="menu__list-item">
              <Link
                className={'menu__link' + (item.items ? ' yd-svc__m-cat' : '')}
                to={item.to}>
                {item.label}
              </Link>
            </li>
            {(item.items || []).map((sub) => (
              <li className="menu__list-item" key={sub.to}>
                <Link className="menu__link yd-svc__m-sub" to={sub.to}>
                  {sub.label}
                </Link>
              </li>
            ))}
          </React.Fragment>
        ))}
      </>
    );
  }

  const headers = menuItems.filter((i) => i.header);
  const entries = menuItems.filter((i) => !i.header);

  return (
    <div className="navbar__item dropdown dropdown--hoverable yd-svc">
      <Link className="navbar__link" to={to}>
        {label}
      </Link>
      <div className="dropdown__menu yd-svc__menu">
        {headers.map((h) => (
          <Link className="yd-svc__all" to={h.to} key={h.to}>
            {h.label}
          </Link>
        ))}
        <ul className="yd-svc__cats">
          {entries.map((item) => (
            <Category item={item} key={item.to} />
          ))}
        </ul>
      </div>
    </div>
  );
}
