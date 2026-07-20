import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import ServicesMenu from '@site/src/components/ServicesMenu';

// Register the nested Services flyout as a custom navbar item type.
export default {
  ...ComponentTypes,
  'custom-servicesMenu': ServicesMenu,
};
