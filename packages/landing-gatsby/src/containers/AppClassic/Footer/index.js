import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Image from 'reusecore/src/elements/Image';
import Logo from 'reusecore/src/elements/UI/Logo';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import FooterArea, {
  WidgetArea,
  MenuArea,
  Menu,
  MenuItem,
  CopyrightText,
} from './footer.style';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        footer {
          logo {
            publicURL
          }
          menu {
            id
            link
            text
          }
          widgets {
            id
            icon {
              publicURL
            }
            title
            description
            link
          }
        }
      }
    }
  `);
  const { logo, menu, widgets } = data.charityJson.footer;

  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterArea>
      <Container>
        <WidgetArea>
          {widgets.map((item) => (
            <Box className="col" key={`footer-widget--key${item.id}`}>
              <Image src={item.icon.publicURL} alt={item.title} />
              <a href={item.link}>
                <Heading as="h3" content={item.title} />
              </a>
              <Text content={item.description} />
            </Box>
          ))}
        </WidgetArea>
        {/* End of footer widgets area */}
        <MenuArea>
          <Logo
            className="logo"
            href="#inicio1"
            logoSrc={logo.publicURL}
            title="KëbabNation"
          />
          <Menu>
            {menu.map((item) => (
              // <MenuItem key={`footer-link${item.id}`}>
              //   <a href={item.link}>{item.text}</a>
              // </MenuItem>
              <MenuItem key={`footer-link${item.id}`}>
                <AnchorLink
                  className="smooth_scroll"
                  href={item.link}
                  offset={81}
                >
                  {item.text}
                </AnchorLink>
              </MenuItem>
            ))}
          </Menu>
          <CopyrightText>
            Copyright {year} KëbabNation | Këbabs, Falafel y Tacos Árabes.
          </CopyrightText>
        </MenuArea>
        {/* End of footer menu area */}
      </Container>
    </FooterArea>
  );
};

export default Footer;
