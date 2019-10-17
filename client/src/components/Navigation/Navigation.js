import React, { useContext } from 'react';

import navData from './navData';
import Context from '../../context';
import './Navigation.scss';

const NavbarDesktop = React.lazy(() => import('./NavbarDesktop/NavbarDesktop'));
const NavbarMobile = React.lazy(() => import('./NavbarMobile/NavbarMobile'));

const Navigation = () => {
  const isMobile = useContext(Context);

  return (
    <>
      {isMobile ? <NavbarDesktop navData={navData} /> : <NavbarMobile navData={navData} />}
    </>
  );
};
export default Navigation