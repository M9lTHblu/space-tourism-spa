import {Link} from 'react-router-dom';
import styled from 'styled-components/macro';

export const Menu = () => {
  return (
      <List>
        <Item><Num>00</Num><StyledLink to="home">home</StyledLink></Item>
        <Item><Num>01</Num><StyledLink to="destination">destination</StyledLink></Item>
        <Item><Num>02</Num><StyledLink to="crew">crew</StyledLink></Item>
        <Item><Num>03</Num><StyledLink to="technology">technology</StyledLink></Item>
      </List>
  );
};


const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
  
`;

const Item = styled.li`
  font-family: var(--condensed);
  font-size: 16px;
  color: var(--light);
  line-height: 19px;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 11px;
  
`;

const Num = styled.span`
  font-weight: 700;
  
  @media (min-width: 768px) {
    display: none;
  }
  @media (min-width: 1440px) {
    display: inline;
  }
`;

const StyledLink = styled(Link)`
  color: var(--light);
  text-decoration: none;
`;
