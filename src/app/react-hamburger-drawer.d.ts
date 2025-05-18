declare module 'react-hamburger-drawer' {
  import React from 'react';

  interface HamburgerDrawerProps {
    open: boolean;
    toggleDrawer: () => void;
    width?: string; // Optional drawer width (e.g., '300px')
    background?: string; // Optional drawer background color
    drawerContent?: React.ReactNode; // Optional content to render inside the drawer
  }

  const HamburgerDrawer: React.FC<HamburgerDrawerProps>;
  export default HamburgerDrawer;
}