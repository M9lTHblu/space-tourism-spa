import styled from 'styled-components/macro';

export const Explore = () => <Btn>explore</Btn>



const Btn = styled.button`
  min-width: 150px;
  height: 150px;
  margin: 0 auto;
  display: block;
  border: none;
  outline: none;
  border-radius: 100%;
  font-family: var(--bellefair);
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  background-color: var(--light);
  cursor: pointer;

  :hover {
  box-shadow: 0 0 0 50px rgba(255, 255, 255, 0.1);  
  }
  
  @media (min-width: 768px) {
    min-width: 242px;
    height: 242px;
    font-size: 32px;
    line-height: 37px;
    letter-spacing: 2px;
  }

  @media (min-width: 1440px) {
    min-width: 274px;
    height: 274px;
  }
`;
