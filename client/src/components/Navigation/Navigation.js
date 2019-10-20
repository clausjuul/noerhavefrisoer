import React, { useContext } from 'react';

import Context from 'context';
import navData from 'data/navData';
import './Navigation.scss';
const NavbarDesktop = React.lazy(() => import('./NavbarDesktop/NavbarDesktop'));
const NavbarMobile = React.lazy(() => import('./NavbarMobile/NavbarMobile'));

// TODO: navigation scss skal laves til css modules

const Navigation = () => {
  const isDesktop = useContext(Context);

  return (
    <>
      {isDesktop ? <NavbarDesktop navData={navData} /> : <NavbarMobile navData={navData} />}
    </>
  );
};
export default Navigation