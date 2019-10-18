import React, { useContext } from 'react';

import navData from './navData';
import Context from '../../context';
import './Navigation.scss';
// TODO
// navigation scss skal laves til css modules
// import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
// import NavbarMobile from "./NavbarMobile/NavbarMobile";
const NavbarDesktop = React.lazy(() => import('./NavbarDesktop/NavbarDesktop'));
const NavbarMobile = React.lazy(() => import('./NavbarMobile/NavbarMobile'));

const Navigation = () => {
  const isDesktop = useContext(Context);

  return (
    <>
      {isDesktop ? <NavbarDesktop navData={navData} /> : <NavbarMobile navData={navData} />}
    </>
  );
};
export default Navigation