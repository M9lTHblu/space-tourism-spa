import styled from 'styled-components/macro';
import bgLaptop from '../../assets/home/background-home-desktop.jpg';
import bgMobile from '../../assets/home/background-home-mobile.jpg';
import bgTablet from '../../assets/home/background-home-tablet.jpg';
import {Explore} from '../../components/Explore/Explore';
import {Subtitle} from './Subtitle';
import {Text} from './Text';
import {Title} from './Title';

export const Home = () => {
  return (
      <HomeSection>
        <TextContainer>
          <Subtitle>
            so, you want to travel to
          </Subtitle>
          <Title>
            space
          </Title>
          <Text>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Text>
        </TextContainer>
        <Explore />
      </HomeSection>
  );
};

export const HomeSection = styled.section`
  height: 100vh;
  max-height: 667px;
  padding: 48px 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 768px) {

  }

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url(${bgMobile});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (min-width: 768px) {
      background-image: url(${bgTablet});
    }

    @media (min-width: 1440px) {
      background-image: url(${bgLaptop});
    }
  }
`;

const TextContainer = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    margin: 130px 0 156px;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`;
