import {Outlet} from 'react-router-dom';
import {Header} from '../Header/Header';
import {MainContainer} from '../shared/MainContainer';

export const Layout = () => {
  return (
      <>
        <Header />
        <MainContainer>
          <main style={{overflow: 'hidden'}}>
            <Outlet />
          </main>
        </MainContainer>
      </>
  );
};
