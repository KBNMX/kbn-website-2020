import { createGlobalStyle } from 'styled-components';
import './flaticon.css';

export const ResetCSS = createGlobalStyle`
  ::selection {
    background: #333333;
    color: #ffffff;
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
    outline: none;
  }

  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  .reuseModalHolder {
    padding: 0 !important;
    &.demo_switcher_modal {
      border: 0 !important;
      background-color: rgba(16, 30, 77, 0.9) !important;
      .innerRndComponent {
        border-radius: 8px !important;
      }
    }
  }

  button.modalCloseBtn {
    position: fixed !important;
    z-index: 999991 !important;
    background-color: transparent !important;
    top: 10px !important;
    right: 10px !important;
    min-width: 34px !important;
    min-height: 34px !important;
    padding: 0 !important;
    span.btn-icon {
      font-size: 22px !important;
      transform: rotate(45deg) !important;
    }

    &.alt {
      border-radius: 50% !important;
      z-index: 999999 !important;
      padding: 0 !important;
      transition: all 0.3s ease !important;
      top: 25px !important;
      right: 30px !important;
      min-width: 40px !important;
      min-height: 40px !important;

      span.btn-icon {
        font-size: 20px !important;
      }

      &:hover {
        opacity: 0.88 !important;
      }
    }
  }

  .react-responsive-modal-modal {
      background: transparent !important;
      box-shadow: none !important;
      overflow: visible !important;

      .react-pdf__Document {
          .react-pdf__Page {
               .react-pdf__Page__canvas,
               .react-pdf__Page__textContent {
                   width: 100% !important;
                   height: auto !important;
                   background: transparent !important;
               }
          }
      }

      .react-responsive-modal-closeButton {
        width: 48px;
        height: 48px;
        padding: 10px !important;
        border-radius: 24px;
        background: rgba(255,255,255,0.4);
        position: fixed;
      }
  }

  @media screen and (max-width: 576px) {
      .react-responsive-modal-modal {
          margin: 0 !important;
          max-width: 100% !important;
      }
  }

    .loader-spinner {
      border: 16px solid #f3f3f3;
      border-radius: 50%;
      border-top: 16px solid #3498db;
      width: 120px;
      height: 120px;
      -webkit-animation: spinkbn 2s linear infinite; /* Safari */
      animation: spinkbn 2s linear infinite;
    }

    /* Safari */
    @-webkit-keyframes spinkbn {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spinkbn {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
`;
