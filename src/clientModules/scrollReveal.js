import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

/**
 * Site-wide scroll-reveal — fades/slides sections into view as the user
 * scrolls, matching the entrance animations on the source Elementor site.
 * Wired to the existing shared layout classes (.yd-split, .yd-grid, card
 * grids, …) so every page gets the effect automatically with no per-page
 * markup. Content is never hidden until this script confirms it will
 * reveal it, so nothing breaks if JS fails to load.
 */

const RULES = [
  // Two-column sections: text slides in from the left, media from the right.
  {selector: '.yd-split > :nth-child(1)', variant: 'left'},
  {selector: '.yd-split > :nth-child(2)', variant: 'right'},
  // Generic grids (stats, feature cards, quotes, steps, value cards…).
  {selector: '.yd-grid > *', variant: 'up'},
  {selector: '.yd-services-grid > .yd-service-card', variant: 'up'},
  {selector: '.yd-blog-grid > .yd-blog-card', variant: 'up'},
  {selector: '.yd-values > .yd-value', variant: 'up'},
  {selector: '.yd-insurance-logos > p', variant: 'scale'},
  {selector: '.yd-review-videos > .yd-review-video', variant: 'up'},
  {selector: '.yd-faq__item', variant: 'up'},
  {selector: '.yd-page-banner__inner', variant: 'up'},
  {selector: '.yd-section-head', variant: 'up'},
  {selector: '.yd-book-card', variant: 'up'},
  // Standalone full-width photos (skip ones already handled by .yd-split).
  {selector: '.yd-media', variant: 'scale', skipIfInside: '.yd-split'},
];

let observer;

// A single observer, reused for the life of the page. Recreating (and
// disconnecting the old one) on every setup() call — including the extra
// call Docusaurus's router triggers right after the initial page load —
// used to cancel any reveal that hadn't fired yet, permanently stranding
// those elements at opacity:0.
function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {threshold: 0.15, rootMargin: '0px 0px -8% 0px'},
    );
  }
  return observer;
}

function stagger(el, indexInParent) {
  el.style.transitionDelay = `${Math.min(indexInParent * 70, 420)}ms`;
}

function setup() {
  if (!ExecutionEnvironment.canUseDOM) {
    return;
  }

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (prefersReducedMotion) {
    return;
  }

  const obs = getObserver();
  const groupCounts = new WeakMap();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  RULES.forEach(({selector, variant, skipIfInside}) => {
    document.querySelectorAll(selector).forEach((el) => {
      if (el.dataset.revealed) {
        return;
      }
      if (skipIfInside && el.closest(skipIfInside)) {
        return;
      }
      el.dataset.revealed = 'true';

      // Elements already on-screen at setup time are shown as-is — no
      // hide-then-reveal flash. Only elements below the fold get the
      // animated entrance when the user scrolls to them.
      const rect = el.getBoundingClientRect();
      const alreadyInView = rect.top < viewportHeight * 0.92 && rect.bottom > 0;
      if (alreadyInView) {
        return;
      }

      el.classList.add('yd-reveal', `yd-reveal--${variant}`);

      const parent = el.parentElement;
      const count = groupCounts.get(parent) || 0;
      stagger(el, count);
      groupCounts.set(parent, count + 1);

      obs.observe(el);

      // Safety net: guarantee content is never stuck invisible even if the
      // observer misses it for some reason (odd viewport/layout edge case).
      window.setTimeout(() => el.classList.add('is-visible'), 4000);
    });
  });
}

if (ExecutionEnvironment.canUseDOM) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup, {once: true});
  } else {
    setup();
  }
}

// Docusaurus SPA navigation swaps the page content without a full reload;
// re-scan shortly after so the new page's sections get the same treatment.
// Note: this also fires once on the very first page load (previousLocation
// is null then) — skip that call since the trigger below already covers it.
export function onRouteUpdate({previousLocation} = {}) {
  if (ExecutionEnvironment.canUseDOM && previousLocation) {
    window.setTimeout(setup, 80);
  }
}
