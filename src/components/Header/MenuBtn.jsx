import {motion} from 'framer-motion';
import styled from 'styled-components/macro';

export const MenuBtn = ({open, setOpen}) => {
  const getValue = (a, b) => open ? a : b;
  return (
      <Container open={open} onClick={() => setOpen(!open)}>
        <Line animate={{rotate: getValue(45, 0), y: getValue(9, 0)}} />
        <Line animate={{x: getValue(-24, 0), opacity: getValue(0, 1)}}
              transition={{duration: 0.3}}
        />
        <Line animate={{rotate: getValue(-45, 0), y: getValue(-9, 0)}} />
      </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 24px;
  height: 21px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Line = styled(motion.div)`
  width: 24px;
  height: 3px;
  background-color: ${({theme}) => theme.colors.primary};
`;
