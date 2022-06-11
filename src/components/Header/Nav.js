import styled from 'styled-components/macro';

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 100;
  width: 254px;
  padding: 122px 0 0 32px;
  background: rgba(0, 0, 0, .9);
  
  
  @supports (backdrop-filter: blur(81.5485px)) {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
  }

  @media (min-width: 768px) {
    top: 0;
    right: 0;
    z-index: 100;
    width: 450px;
    height: 96px;
    padding: 0 48px;
    display: flex;
    align-items: center;
  }

  @media (min-width: 1440px) {
    top: 40px;
    width: 57.64%;
    padding: 0 167px 0 123px;
  }
`;
