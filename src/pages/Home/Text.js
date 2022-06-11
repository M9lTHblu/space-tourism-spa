import styled from 'styled-components/macro';

export const Text = styled.p`
  font-family: var(--barlow);
  font-size: 15px;
  line-height: 25px;
  color: var(--primary);

  
  @media (min-width: 768px) {
   font-size: 16px;
    line-height: 28px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 32px;
    
  }
`
