import styled from 'styled-components/macro';
import bgLaptop from '../../assets/home/background-home-desktop.jpg';
import bgMobile from '../../assets/home/background-home-mobile.jpg';
import bgTablet from '../../assets/home/background-home-tablet.jpg';
import {Explore} from '../../components/Explore/Explore';

export const Home = () => {
  return (
      <HomeSection>
        <TextBlock>
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
        </TextBlock>
        <Explore />
      </HomeSection>
  );
};

const HomeSection = styled.section`
  max-width: 327px;
  margin: 0 auto;
  padding: 48px 0;
  
  @media (min-width: 768px) {
    max-width: 440px;
    padding: 106px 0 91px;
  }

  @media (min-width: 1440px) {
    max-width: 1110px;
    padding: 251px 0 0;
    display: flex;
    align-items: flex-end;
    gap: 386px;
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    background-image: url(${bgMobile});
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

const TextBlock = styled.div`
  margin-bottom: 81px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 767px) {
    margin-bottom: 156px;
    gap: 24px
  }

  @media (min-width: 1440px) {
    margin-bottom: 0;
    text-align: left;
  }
`;

const Subtitle = styled.span`
  font-family: var(--condensed);
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  color: var(--primary);

  @media (min-width: 768px) {
    font-size: 20px;
    letter-spacing: 3.25px;
  }

  @media (min-width: 1440px) {
    font-size: 28px;
    letter-spacing: 4.75px;
  }
`;

const Title = styled.h1`
  font-family: var(--bellefair);
  font-size: 80px;
  line-height: 100px;
  color: white;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 150px;
    line-height: 150px;
  }

  @media (min-width: 1440px) {
    line-height: 172px;
  }
`;

const Text = styled.p`
  font-family: var(--barlow);
  font-size: 15px;
  line-height: 25px;
  color: var(--primary);


  @media (min-width: 767px) {
    font-size: 16px;
    line-height: 28px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 32px;
  }
`;
