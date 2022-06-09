import styled from 'styled-components/macro';

export const MainContainer = styled.div`
  max-width: 315px;
  margin: 0 auto;

  @media (min-width: var(--tablet)) {
    max-width: 688px;
  }

  @media (min-width: var(--laptop)) {
    max-width: 1110px;
  }

`;

