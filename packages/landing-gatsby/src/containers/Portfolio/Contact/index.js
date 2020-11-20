import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';

import { ButtonWrapper } from '../../Portfolio/portfolio.style';
import { ActiveStatus, MenuWrapper, Button } from './contact.style';
import Author from 'common/src/assets/image/portfolio/avatar.png';
import icoMessenger from 'common/src/assets/image/charity/ico-messenger.png';

const ContactSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  replyWrapper,
  replyTime,
  buttonStyle,
  buttonWrapper,
}) => {
  return (
    <Box {...sectionWrapper} as="section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="¿Qué va a llevar?" />
          <Text
            {...secDescription}
            content="Si tienes en mente un antojo o una recomendación o necesitas algún consejo sobre cuál Këbab calmará tu apetito, no dudes en ponerse en contacto con nosotros. Actualmente, estamos apoyando la situacion de nuestro país con servicio a domicilio."
          />
        </Box>
        <Box {...replyWrapper}>
          <ActiveStatus>
            <Image src={Author} alt="Avatar KebabNation" />
          </ActiveStatus>
          <Heading
            as="h4"
            content="Tiempo de respuesta: dentro de 2-5 minutos"
            {...replyTime}
          />
        </Box>
        <Box {...buttonWrapper}>
          <ButtonWrapper>
            <a
              href="https://www.messenger.com/t/edgarbarrios.design"
              target="_blank"
            >
              <Button>
                <span className="text">ABRIR CHAT</span>
                <Image src={icoMessenger} alt="Messenger Bot" />
              </Button>
            </a>
          </ButtonWrapper>
        </Box>
      </Container>
    </Box>
  );
};

ContactSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  replyWrapper: PropTypes.object,
  replyTime: PropTypes.object,
  buttonStyle: PropTypes.object,
  buttonWrapper: PropTypes.object,
};

ContactSection.defaultProps = {
  sectionWrapper: {
    pt: ['70px', '80px', '100px', '110px', '140px'],
    pb: ['70px', '80px', '100px', '110px', '140px'],
    bg: '#f9f9f9',
  },
  secTitleWrapper: {
    mb: '30px',
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '600',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
    textAlign: 'center',
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    textAlign: 'center',
    width: '600px',
    maxWidth: '100%',
    ml: 'auto',
    mr: 'auto',
    mb: '0',
  },
  replyWrapper: {
    flexBox: true,
    alignItems: 'center',
    justifyContent: 'center',
  },
  replyTime: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#302b4e',
    mb: 0,
  },
  buttonStyle: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '400',
    color: '#000',
    pl: '23px',
    pr: '23px',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '50px',
  },
};

export default ContactSection;
