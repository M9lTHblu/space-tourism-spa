import styled from 'styled-components/macro';
import logo from '../../assets/shared/logo.svg';
import useMatchMedia from '../../hooks/useMatchMedia';
import {MainContainer} from '../shared/MainContainer';
import {Desktop} from './Desktop';
import {Mobile} from './Mobile';

export const Header = () => {
  const isMobile = useMatchMedia();

  return (
      <Container as='header'>
        <HeaderLogo src={logo}/>
        {isMobile ? <Mobile/> : <Desktop/>}
      </Container>
  );
};

const Container = styled(MainContainer)`
  padding-top: 24px;
  display: flex;
  justify-content: space-between;

  @media (min-width: var(--tablet)) {
    padding-top: 24px;
  }
  @media (min-width: var(--laptop)) {
    padding-top: 64px;
  }
`

const HeaderLogo = styled.img`
  width: 40px;
  height: 40px;
`
