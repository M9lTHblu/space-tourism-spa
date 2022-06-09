import {NavLink, Outlet} from 'react-router-dom';
import styled from 'styled-components/macro';
import {MainContainer} from '../../components/Shared';



export const Destination = () => {
  return (
      <Container as='section'>
          <nav>
            <ul>
              <li><NavLink to="moon" >moon</NavLink></li>
              <li><NavLink to="mars" >mars</NavLink></li>
              <li><NavLink to="europa" >europa</NavLink></li>
              <li><NavLink to="titan" >titan</NavLink></li>
            </ul>
          </nav>
          <Outlet/>
      </Container>
  );
};

const Container = styled(MainContainer)` 
  display: flex;
  flex-direction: column-reverse;
`

