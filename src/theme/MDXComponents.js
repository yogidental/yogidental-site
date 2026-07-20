import MDXComponents from '@theme-original/MDXComponents';
import LogoCarousel from '@site/src/components/LogoCarousel';
import ServicesGrid from '@site/src/components/ServicesGrid';

// Make custom components available in all MDX/Markdown pages without imports.
export default {
  ...MDXComponents,
  LogoCarousel,
  ServicesGrid,
};
