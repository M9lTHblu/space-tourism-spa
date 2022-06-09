import styled from 'styled-components/macro';
import bgLaptop from '../../assets/home/background-home-desktop.jpg';
import bgMobile from '../../assets/home/background-home-mobile.jpg';
import bgTablet from '../../assets/home/background-home-tablet.jpg';
import {Explore} from '../../components/Explore/Button';
import {Subtitle} from './Subtitle';
import {Text} from './Text';
import {Title} from './Title';

export const Home = () => {
  return (
      <HomeSection>
        <div>
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
        </div>
        <Explore />
      </HomeSection>
  );
};

export const HomeSection = styled.section`
  padding: 48px 0;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 81px;

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

    @media (min-width: var(--tablet)) {
      background-image: url(${bgTablet});
    }

    @media (min-width: var(--laptop)) {
      background-image: url(${bgLaptop});
    }
  }
`;
