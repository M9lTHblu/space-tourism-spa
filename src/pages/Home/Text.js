import styled from 'styled-components/macro';

export const Text = styled.p`
  font-family: var(--barlow);
  font-size: 15px;
  line-height: 25px;
  color: var(--primary);
  
  @media (min-width: var(--tablet)) {
   font-size: 16px;
    line-height: 28px;
  }
  @media (min-width: var(--laptop)) {
    font-size: 18px;
    line-height: 32px;
    
  }
`
