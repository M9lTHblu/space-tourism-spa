import {css} from 'styled-components';
import styled from 'styled-components/macro';
import logo from '../../assets/shared/logo.svg';

import {useViewportSizeContext} from '../../Contenxt/ViewportContenxt';
import {HeaderLogo} from './HeaderLogo';
import {HeaderNav} from './HeaderNav';
import {HeaderNavMenu} from './HeaderNavMenu';

export const Header = () => {
  const viewSize = useViewportSizeContext()

  return (
      <Container $viewSize={viewSize}>
        <HeaderLogo src={logo}/>
        <HeaderNav $viewSize={viewSize}>
          <HeaderNavMenu $viewSize={viewSize}/>
        </HeaderNav>
      </Container>
  );
};

const line = css`
  &::before {
    content: '';
    position: absolute;
    left: 167px;
    top: 88px;
    z-index: 200;
    width: 473px;
    height: 1px;

    background: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.25;
  }
`;

const mobileHeader = css`
  top: 24px;
  padding: 24px 24px 0;
`;

const tabletHeader = css``;

const desktopHeader = css`
  padding: 40px 0 0 55px;
  max-width: 1440px;
  margin-bottom: 215px;
`;



const Container = styled.header`
  margin:0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  ${({$viewSize}) => {
    switch ($viewSize) {
      case 'mobile':
        return mobileHeader;
      case 'tablet':
        return tabletHeader;
      default:
        return desktopHeader;
    }
  }}
`
