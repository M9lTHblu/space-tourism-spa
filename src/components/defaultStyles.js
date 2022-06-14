import {Link} from 'react-router-dom';
import styled from 'styled-components/macro';

export const DNav = styled.nav`
  font-family: ${({theme}) => theme.font.family.condensed};
  color: ${({theme}) => theme.colors.light};
  background: rgba(0, 0, 0, .9);

  @supports (backdrop-filter: blur(81.5485px)) {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
  }
`;

export const DLinkList = styled.ul`
  list-style: none;
  display: flex;
`;

export const DLinkListItem = styled.li` 
  
`;

export const DNavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
`;

export const DButton = styled.button``;
