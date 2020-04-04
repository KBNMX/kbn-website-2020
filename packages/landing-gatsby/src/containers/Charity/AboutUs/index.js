import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Heading from 'reusecore/src/elements/Heading';
import Text from 'reusecore/src/elements/Text';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SectionWrapper, {
  Container,
  ImageWrapper,
  TextWrapper,
} from './aboutUs.style';

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        aboutData {
          thumb_url {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          slogan
          title
          text
          text2
        }
      }
    }
  `);
  const { thumb_url, slogan, title, text, text2 } = data.charityJson.aboutData;

  const textoa = text => {
    return { __html: text };
  };

  const textob = text2 => {
    return { __html: text2 };
  };

  // const setTitle = title => {
  //   return { __html: title };
  // };

  return (
    <SectionWrapper id="aboutUs">
      <Container>
        <ImageWrapper>
          <Fade left>
            <Image
              fluid={
                (thumb_url !== null) | undefined
                  ? thumb_url.childImageSharp.fluid
                  : {}
              }
              alt={`KebabNation Kebabs y Falafels`}
              className="carousel_img"
            />
          </Fade>
        </ImageWrapper>
        <TextWrapper>
          <Fade right>
            <Heading as="h5" content={slogan} />
            <Heading content={title} />
            <Text dangerouslySetInnerHTML={textoa(text)} />
            <Text dangerouslySetInnerHTML={textoa(text2)} />

            {/* <AnchorLink href="#nuestrospanes" offset="81" className="learn__more-btn">
              <span className="hyphen" />
              <span className="btn_text">Conoce nuestros panes</span>
            </AnchorLink> */}
          </Fade>
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default AboutUs;
