import styled from 'styled-components';

export const ActiveStatus = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  flex-shrink: 0;
  margin-right: 20px;
  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #00ff24;
    border: 3px solid #fff;
    right: -2px;
    bottom: -2px;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1440px) {
    padding-right: 20px;
  }
  @media only screen and (max-width: 1360px) {
    padding-right: calc(75px + 20px);
  }
  @media only screen and (max-width: 1260px) {
    padding-right: calc(75px + 30px);
  }
  @media only screen and (max-width: 991px) {
    display: none;
  }

  a {
    font-size: 16px;
    font-weight: 600;
    margin-right: 46px;
    color: #fff;
    transition: all 0.25s ease;
    @media only screen and (max-width: 1440px) {
      margin-right: 40px;
    }
    @media only screen and (max-width: 1360px) {
      margin-right: 30px;
    }

    &:hover {
      color: #fcf22b;
    }
  }
`;

export const Button = styled.button`
  border: 0;
  padding: 0;
  min-width: 200px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: #060f1e;
  background-color: #fdc30d;
  transition: all 0.3s ease;
  @media only screen and (max-width: 1440px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 1360px) {
    font-size: 14px;
  }

  &:hover {
    background-color: #f57e22;
  }

  img {
    margin-left: 11px;
    @media only screen and (max-width: 1440px) {
      margin-left: 10px;
    }
  }

  &:hover,
  &:focus {
    content: 0;
    box-shadow: none;
  }
`;
