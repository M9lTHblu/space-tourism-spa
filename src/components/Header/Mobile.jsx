import {useState} from 'react';
import {Menu} from './Menu';
import {MenuBtn} from './MenuBtn';
import {Nav} from './Nav';

export const Mobile = () => {
  const [open, setOpen] = useState(false);

  return (
      <Nav>
        <MenuBtn {...{open, setOpen}} />
          <Menu open={open} />
      </Nav>
  );
};
