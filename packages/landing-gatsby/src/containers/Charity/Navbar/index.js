import React from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import NavbarWrapper, { MenuWrapper, Button } from './navbar.style';

import logoImage from 'common/src/assets/image/charity/logo.svg';

import heartImage from 'common/src/assets/image/charity/heart-red.png';

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <Link className="logo" to="/">
          <Image src={logoImage} alt="KëbabNation" />
        </Link>
        <MenuWrapper>
          <Link to="/nosotros">SOBRE NOSOTROS</Link>

          {/* <AnchorLink
            className="smooth_scroll"
            href="#nuestroskebabs"
            offset={81}
          >
            SOBRE NOSOTROS
          </AnchorLink> */}
          <a href="#nuestroskebabs">
            <Button>
              <span className="text">IR AL MENU</span>
              <Image src={heartImage} alt="Menu" />
            </Button>
          </a>
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
