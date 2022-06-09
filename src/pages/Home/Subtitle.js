import styled from 'styled-components/macro';

export const Subtitle = styled.span`
  font-family: var(--condensed);
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  color: var(--primary);

  @media (min-width: var(--tablet)) {
    font-size: 20px;
    letter-spacing: 4.75px;
  }
  
  @media (min-width: var(--laptop)) {
    font-size: 28px;
    letter-spacing: 4.75px;
  }
`;
