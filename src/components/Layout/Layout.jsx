import {Outlet} from 'react-router-dom';
import {Header} from '../Header/Header';
import {MainContainer} from '../shared/MainContainer';

export const Layout = () => {
  return (
      <>
        <Header />
          <main>
        <MainContainer>
            <Outlet />
        </MainContainer>
          </main>
      </>
  );
};

