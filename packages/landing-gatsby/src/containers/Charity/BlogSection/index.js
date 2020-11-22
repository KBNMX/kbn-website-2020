import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/src/components/UI/Container';
import Heading from 'reusecore/src/elements/Heading';
import BlogPost from 'common/src/components/BlogPost';
import SectionWrapper, {
  SectionHeader,
  TitleArea,
  LinkArea,
  Text,
  PostArea,
} from './blogSection.style';

const BlogSection = () => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        posts {
          id
          thumbUrl {
            publicURL
          }
          title
          horarios
          telefono
          excerpt
          btnUrl
          btnText
        }
        txtSucursales {
          txttitulo
          txtdesc
          whatsapp
        }
      }
    }
  `);

  const { txttitulo, txtdesc, whatsapp } = data.charityJson.txtSucursales;

  const textoa = (telefono) => {
    return { __html: telefono };
  };

  return (
    <SectionWrapper id="sucursales">
      <Container width="1260px">
        <SectionHeader>
          <TitleArea>
            <Heading content={txttitulo} />
            <Text>
              {txtdesc}
              {/* <a href="#1" className="link">
                Nuestra sucursal
              </a> */}
            </Text>
          </TitleArea>
          <LinkArea>
            <a
              href="https://wa.me/5215547865928?text=Hola,%20estoy%20interesado%20en%20conocer%20los%20horarios%20de%20atención"
              className="text__btn"
              target="_blank"
            >
              <span className="text">WhatsApp: +52 {whatsapp}</span>
              <span className="arrow" />
            </a>
          </LinkArea>
        </SectionHeader>
        <PostArea>
          {data.charityJson.posts.map((item) => (
            <BlogPost
              key={`blog__post-key${item.id}`}
              thumbUrl={item.thumbUrl.publicURL}
              title={item.title}
              excerpt={item.excerpt}
              horarios={item.horarios}
              telefono={item.telefono}
              link={
                <a
                  className="learn__more-btn"
                  href={item.btnUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <span className="hyphen"></span> */}
                  <span className="btn_text">{item.btnText}</span>
                </a>
              }
            />
          ))}
        </PostArea>
      </Container>
    </SectionWrapper>
  );
};

export default BlogSection;
