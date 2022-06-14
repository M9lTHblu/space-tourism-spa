import {Link} from 'react-router-dom';
import styled from 'styled-components/macro';

export const Planet = ({planet}) => {

  return (
      <PlanetContainer>
        <Container>
          <h1>{planet}</h1>
          <ul>
            <li><Link to='mars'>mars</Link></li>
            <li><Link to='titan'>titan</Link></li>
          </ul>
        </Container>
      </PlanetContainer>
  );
};

const PlanetContainer = styled.div` 
  color: blue;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 238px;
`;


