import {Outlet} from 'react-router-dom';
import {DataProvider} from '../../Contenxt/DataContext';
import {ViewportSizeProvider} from '../../Contenxt/ViewportContenxt';
import {Header} from '../Header/Header';

export const Layout = () => {
  return (
      <ViewportSizeProvider>
        <DataProvider>
          <Header />
          <main>
            <Outlet />
          </main>
        </DataProvider>
      </ViewportSizeProvider>
  );
};

