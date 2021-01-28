import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import NavbarWrapper, { MenuWrapper, Button } from './navbar.style';

import logoImage from 'common/src/assets/image/charity/logo.svg';

import heartImage from 'common/src/assets/image/charity/heart-red.png';

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        botonopiniones {
          txtbotonmenu
          txtboton
        }
      }
    }
  `);

  const { txtbotonmenu, txtboton } = data.charityJson.botonopiniones;

  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <Link className="logo" to="/">
          <Image src={logoImage} alt="KëbabNation" />
        </Link>
        <MenuWrapper>

          <a
            className="smooth_scroll"
            href="https://menu.yupoints.com/local/kebabnation"
            target="_blank"
          >
            {txtbotonmenu}
        </a>
          <a
            href="https://www.facebook.com/pg/kebabnation/reviews/"
            target="_blank"
          >
            <Button>
              <span className="text">{txtboton}</span>
              <Image src={heartImage} alt="Facebook Reviews" />
            </Button>
          </a>
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
