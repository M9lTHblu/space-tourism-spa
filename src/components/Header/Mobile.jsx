import {AnimatePresence, motion} from 'framer-motion';
import {useEffect, useState} from 'react';
import {Menu} from './Menu';
import {MenuBtn} from './MenuBtn';
import {Nav} from './Nav';

export const Mobile = ({fuse}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (fuse) {
      setOpen(false);
    }
  }, [fuse]);

  return (
      <>
        <AnimatePresence>
          {open &&
              <Nav as={motion.nav}
                   key="menu"
                   initial={{opacity: 0, x: 254}}
                   animate={{opacity: 1, x: 0}}
                   exit={{opacity: 0, x: 254}}
                   transition={{duration: 0.2}}
              >
                <Menu />
              </Nav>}
        </AnimatePresence>
        <MenuBtn {...{open, setOpen}} />
      </>
  );
};
