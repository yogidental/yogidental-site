import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import ServicesMenu from '@site/src/components/ServicesMenu';
import ResourcesMenu from '@site/src/components/ResourcesMenu';

// Register the nested flyout menus as custom navbar item types.
export default {
  ...ComponentTypes,
  'custom-servicesMenu': ServicesMenu,
  'custom-resourcesMenu': ResourcesMenu,
};
