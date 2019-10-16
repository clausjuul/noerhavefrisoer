import React, { useContext } from "react";

import navData from './navData';
import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarMobile from './NavbarMobile/NavbarMobile';
import Context from '../../context';
import './Navigation.scss';

const Navigation = () => {
  const isMobile = useContext(Context);

  return (
    <>
      {isMobile ? <NavbarDesktop navData={navData} /> : <NavbarMobile navData={navData} />}
    </>
  );
};
export default Navigation