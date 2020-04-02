import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import BlogPost from 'common/src/components/BlogPost';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, {
  SectionHeader,
  FeatureWrapper,
} from './featureSection.style';

const TituloKebabs = () => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        tituloKebabs {
          title
          slogan
        }
      }
    }
  `);

  const { title, slogan } = data.charityJson.tituloKebabs;

  return (
    <SectionWrapper id="nuestroskebabs">
      <Container width="1260px">
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
      </Container>
    </SectionWrapper>
  );
};

export default TituloKebabs;
