import {Route, Routes} from 'react-router-dom';
import {Layout} from './components/Layout/Layout';
import {Crew} from './pages/Crew/Crew';
import {Destination} from './pages/Destination/Destination';
import {Planet} from './pages/Destination/Planet';

import {Home} from './pages/Home/Home';
import {Technology} from './pages/Technology/Technology';

const App = () => {

  return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="destination" element={<Destination />}>
            <Route path=":planet" element={<Planet />} />
            {/*<Route path='mars' element={<Mars/>}/>*/}
            {/*<Route path='europa' element={<Europa/>}/>*/}
            {/*<Route path='titan' element={<Titan/>}/>*/}
            </Route>
            <Route path="crew" element={<Crew />} />
            <Route path="technology" element={<Technology />} />
          </Route>
        </Routes>
      </>
  );
};

export default App;
