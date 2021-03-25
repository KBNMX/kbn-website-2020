import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import NavbarWrapper, { MenuWrapper, Button } from './navbar.style';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Document, Page, pdfjs } from 'react-pdf';

import menuPDF from 'common/src/assets/files/menu-18-mar-2021.pdf';

import logoImage from 'common/src/assets/image/charity/logo.svg';

import heartImage from 'common/src/assets/image/charity/heart-red.png';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        botonopiniones {
          txtbotonmenu
          txtboton
          txtbotonorder
        }
      }
    }
  `);

  const [open, setOpen] = useState(true);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const {
    txtbotonmenu,
    txtboton,
    txtbotonorder,
  } = data.charityJson.botonopiniones;

  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

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
            {txtbotonorder}
          </a>

          {
            // <AnchorLink
            //   className="smooth_scroll"
            //   href="#nuestroskebabs"
            //   offset={81}
            // >
            //   {txtbotonmenu}
            // </AnchorLink>
          }
          <a className="smooth_scroll noselect" onClick={onOpenModal}>
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
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        styles={{
          root: { zIndex: '120000' },
          overlay: {
            background: 'rgba(36, 123, 160, 0.7)',
          },
        }}
      >
        <Document
          file={menuPDF}
          options={{ workerSrc: '/pdf.worker.js' }}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={bla => {
            console.log(bla);
          }}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </Modal>
    </NavbarWrapper>
  );
};

export default Navbar;
