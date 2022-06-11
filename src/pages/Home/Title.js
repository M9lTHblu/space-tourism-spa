import styled from 'styled-components/macro';

export const Title = styled.h1`
  margin: 16px 0;
  font-family: var(--bellefair);
  font-size: 80px;
  line-height: 100px;
  color: white;
  text-transform: uppercase;
  
  @media (min-width: 768px) {
    margin: 24px 0;
    font-size: 150px;
    line-height: 150px;
  }
  
  @media (min-width: 1440px) {
    line-height: 172px;
  }
`
