import styled from 'styled-components/macro';

export const MainContainer = styled.div`
  max-width: 320px;
  height: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 688px;
  }

  @media (min-width: 1440px) {
    max-width: 1110px;
  }

`;

