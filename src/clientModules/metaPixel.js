import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// The Meta Pixel base script (in docusaurus.config.js headTags) only fires
// its initial PageView once, when the script first loads. Docusaurus routes
// client-side without a full page reload, so later page views need this
// separate call — same pattern as the existing gtag client module.
export function onRouteDidUpdate({previousLocation, location}) {
  if (
    ExecutionEnvironment.canUseDOM &&
    previousLocation &&
    (location.pathname !== previousLocation.pathname ||
      location.search !== previousLocation.search)
  ) {
    window.fbq?.('track', 'PageView');
  }
}
