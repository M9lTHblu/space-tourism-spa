import {Link} from 'react-router-dom';
import {MainContainer} from '../Shared';

export const Header = () => {
  return (
      <MainContainer>
        <nav style={{display: 'flex', gap: '2rem'}}>
          <Link to="destination">destination</Link>
          <Link to="crew">crew</Link>
          <Link to="technology">technology</Link>
        </nav>
      </MainContainer>
  );
};
