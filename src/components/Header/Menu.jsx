import {AnimatePresence, motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import styled from 'styled-components/macro';

export const Menu = ({open}) => {
  return (
      <AnimatePresence>
        {open && (
            <Container
                key="menu"
                initial={{opacity: 0, x: 255}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: 255}}
                transition={{duration: 0.3}}
            >
              <Item><Num>00</Num><StyledLink to="home">home</StyledLink></Item>
              <Item><Num>01</Num><StyledLink
                  to="destination">destination</StyledLink></Item>
              <Item><Num>02</Num><StyledLink to="crew">crew</StyledLink></Item>
              <Item><Num>03</Num><StyledLink
                  to="technology">technology</StyledLink></Item>
            </Container>
        )}
      </AnimatePresence>
  );
};

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  width: 254px;
  padding: 122px 0 0 32px;
  color: var(--light);
  background: rgba(0, 0, 0, .9);

  @supports (backdrop-filter: blur(81.5485px)) {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 11px;
`;

const Num = styled.span`
  font-weight: 700;
`;

const StyledLink = styled(Link)`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  color: var(--light);
  text-decoration: none;
  text-transform: uppercase;
`;
