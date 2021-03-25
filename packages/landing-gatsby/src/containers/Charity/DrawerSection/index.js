import React, { useState, useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Drawer from 'reusecore/src/elements/Drawer';
import Image from 'reusecore/src/elements/Image';
import { DrawerContext } from 'common/src/contexts/DrawerContext';
import InnerWrapper, { SpreadButton } from './drawerSection.style';
import heartImage from 'common/src/assets/image/charity/heart-red.png';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Document, Page, pdfjs } from 'react-pdf';

import menuPDF from 'common/src/assets/files/menu-18-mar-2021.pdf';

const DrawerSection = () => {
  const [toggleState, setToggleState] = useState(false);
  const { state, dispatch } = useContext(DrawerContext);

  const [open, setOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleActiveClass = () => {
    setToggleState(!toggleState);
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleDrawerToggle = () => {
    dispatch({
      type: 'TOGGLE',
    });
    handleActiveClass();
  };

  const data = useStaticQuery(graphql`
    query {
      charityJson {
        menuItems {
          path
          label
          offset
        }
        botonopiniones {
          txtboton
        }
      }
    }
  `);

  const loadingPdf = () => {
    return (
      <div
        style={{
          height: '200px',
          width: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: '40px',
          position: 'relative',
        }}
      >
        <div class="loader-spinner"></div>
        <div
          style={{
            bottom: '0px',
            left: '50%',
            transform: 'translateX(-50%)',
            position: 'absolute',
            width: '100%',
            textAlign: 'center',
          }}
        >
          Cargando menú...
        </div>
      </div>
    );
  };

  const scrollItems = [];

  data.charityJson.menuItems.forEach(item => {
    scrollItems.push(item.path.slice(1));
  });

  const { txtboton } = data.charityJson.botonopiniones;

  return (
    <Drawer
      width="420px"
      placement="right"
      drawerHandler={
        <button
          className={`drawer_btn ${toggleState ? 'active' : ''}`}
          onClick={handleActiveClass}
          aria-label="drawer toggle button"
        >
          <ul className="grid">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
          <i className="flaticon-plus-symbol " />
        </button>
      }
      open={state.isOpen}
      toggleHandler={handleDrawerToggle}
    >
      <InnerWrapper>
        <Scrollspy
          className="scrollspy__menu"
          items={scrollItems}
          offset={-81}
          currentClassName="active"
        >
          {data.charityJson.menuItems.map((menu, index) => (
            <li key={`menu_key${index}`}>
              {menu.offset ? (
                <AnchorLink
                  href={menu.path}
                  offset={menu.offset}
                  onClick={handleDrawerToggle}
                >
                  {menu.label}
                </AnchorLink>
              ) : (
                <a href={menu.path} target="_blank">
                  {menu.label}
                </a>
              )}
            </li>
          ))}
          <li key={`menu_key${data.charityJson.menuItems.length}`}>
            <a
              style={{ cursor: 'pointer' }}
              className="noselect"
              onClick={onOpenModal}
            >
              Ver menú
            </a>
          </li>
        </Scrollspy>
        <a href="https://www.facebook.com/pg/kebabnation/reviews/">
          <SpreadButton>
            <span className="text">{txtboton}</span>
            <Image src={heartImage} alt="Facebook Reviews" />
          </SpreadButton>
        </a>
      </InnerWrapper>

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
          loading={loadingPdf}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </Modal>
    </Drawer>
  );
};

export default DrawerSection;
