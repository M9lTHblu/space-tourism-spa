import {Link, Route, Routes} from 'react-router-dom';
import styled from 'styled-components/macro';
import bgLaptop
  from '../../assets/destination/background-destination-desktop.jpg';
import bgMobile
  from '../../assets/destination/background-destination-mobile.jpg';
import bgTablet
  from '../../assets/destination/background-destination-tablet.jpg';

export const Destination = ({planet}) => {
  return (
      <div style={{backgroundColor: 'black', height: '100vh'}}>
        <h1>{planet}</h1>
        <ul>
          <li><Link to={planet}>moon</Link></li>
        </ul>
        <Routes>
          <Route path='mars' element={<Destination planet='mars'/>}/>
          <Route path='titan' element={<Destination planet='titan'/>}/>
        </Routes>
      </div>
  );
};

const DestinationContainer = styled.section`
  max-width: 330px;
  margin: 0 auto;
  background-color: black;
  // ::before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   z-index: -1;
  //   width: 100%;
  //   background-image: url(${bgMobile});
  //   background-repeat: no-repeat;
  //   background-position: center;
  //   background-size: cover;
  //
  //   @media (min-width: 768px) {
  //     background-image: url(${bgTablet});
  //   }
  //
  //   @media (min-width: 1440px) {
  //     background-image: url(${bgLaptop});
  //   }
  // //}
`;

const Subtitle = styled.div`
  font-family: var(--condensed);
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  text-align: center;
  color: var(--light);

  & :first-child {
    margin-right: 18px;
    opacity: 0.25;
  }
`;
