import styled from 'styled-components/macro';
import logo from '../../assets/shared/logo.svg';
import useMatchMedia from '../../hooks/useMatchMedia';
import {MainContainer} from '../shared/MainContainer';
import {Menu} from './Menu';
import {Mobile} from './Mobile';
import {Nav} from './Nav';

export const Header = () => {
  const isMobile = useMatchMedia(767);

  return (
      <HeaderContainer as='header'>
        <HeaderLogo src={logo} />
        {isMobile ? (
            <Mobile fuse={!isMobile} />
        ) : (
            <Nav>
              <Menu />
            </Nav>)}
      </HeaderContainer>
  );
};

const HeaderContainer = styled(MainContainer)`
  
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  
  @media (min-width: 1440px) {
    max-width: 1440px;
    padding-top: 64px;
    padding-left: 55px;
  }
`;

const HeaderLogo = styled.img`
  width: 40px;
  height: 40px;
  
  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;
