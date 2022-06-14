import {AnimatePresence, motion} from 'framer-motion';
import {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import {DNav} from '../defaultStyles';
import {MenuBtn} from './MenuBtn';

export const HeaderNav = ({$viewSize, children}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if ($viewSize === 'mobile') {
      setOpen(false);
    }
  }, [$viewSize]);

  const animationVariants = {
    closed: {x: 254, opacity: 0},
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        duration: 3,
      },
    },
  };

  return (
      <>
        {{
          mobile: (
              <AnimatePresence>
                {open &&
                    <MobileHeaderNav
                        as={motion.nav}
                        key="mobileNav"
                        animate={open ? 'open' : 'closed'}
                        varints={animationVariants}
                    >
                      {children}
                    </MobileHeaderNav>}
                <MenuBtn {...{open, setOpen}} />
              </AnimatePresence>
          ),
          tablet: <TabletHeaderNav>{children}</TabletHeaderNav>,
          laptop: <DesktopHeaderNav>{children}</DesktopHeaderNav>,
        }[$viewSize]}
      </>
  );
};

const DesktopHeaderNav = styled(DNav)`
  height: 96px;
  padding: 0 165px 0 123px;
`;

const TabletHeaderNav = styled(DesktopHeaderNav)`
  width: 450px;
  padding: 0 48px;
`;

const MobileHeaderNav = styled(DNav)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 254px;
  height: 100%;
  padding: 120px 0 0 30px;
`;
