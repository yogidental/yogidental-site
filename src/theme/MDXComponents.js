import MDXComponents from '@theme-original/MDXComponents';
import LogoCarousel from '@site/src/components/LogoCarousel';
import ServicesGrid from '@site/src/components/ServicesGrid';
import Testimonials from '@site/src/components/Testimonials';
import Reviews from '@site/src/components/Reviews';

// Make custom components available in all MDX/Markdown pages without imports.
export default {
  ...MDXComponents,
  LogoCarousel,
  ServicesGrid,
  Testimonials,
  Reviews,
};
