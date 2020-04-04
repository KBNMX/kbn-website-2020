import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { charityTheme } from 'common/src/theme/charity';
import { ResetCSS } from 'common/src/assets/css/style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from '../containers/Charity/Navbar';
import DrawerSection from '../containers/Charity/DrawerSection';
import BannerSection from '../containers/Charity/BannerSection';
import HumanityBlock from '../containers/Charity/HumanityBlock';
import ClientBlock from '../containers/Charity/ClientBlock';
import BranchSection from '../containers/Charity/BranchSection';
import AboutUs from '../containers/Charity/AboutUs';
import TituloKebabs from '../containers/Charity/TituloKebabs';
import TituloInfo from '../containers/Charity/TituloInfo';
import InfoSection from '../containers/Charity/Info2';
import News from '../containers/Charity/News';
import FeatureSection from '../containers/Charity/FeatureSection';
import BlogSection from '../containers/Charity/BlogSection';
import Testimonial from '../containers/Charity/Testimonial';
import WorkSection from '../containers/Charity/WorkSection';
import Footer from '../containers/AppClassic/Footer';
import AwardsSection from '../containers/Charity/Awards';
import ContactSection from '../containers/Portfolio/Contact';
// import Footer from '../containers/Charity/Footer';
// import Project from '../containers/Interior/Project';
// import MilestoneBlock from '../containers/Charity/MilestoneBlock';
// import PromotionBlock from '../containers/Charity/PromotionBlock';
// import DonateSection from '../containers/Charity/DonateSection';
// import MapSection from '../containers/Charity/MapSection';
// import FundraiserSection from '../containers/Charity/FundraiserSection';
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper,
} from '../containers/Charity/charity.style';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        <SEO title="KëbabNation - Lo que somos" />
        <ResetCSS />
        <GlobalStyle />
        {/* Start charity wrapper section */}
        <CharityWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <Navbar />
          </Sticky>
          <DrawerProvider>
            <DrawerSection />
          </DrawerProvider>
          <ContentWrapper>
            {/* Historia */}
            <AboutUs />

            {/* 2020 */}
            <News />

            {/* Messenger */}
            <ContactSection />
          </ContentWrapper>
          <Footer />
        </CharityWrapper>
        {/* End of charity wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
