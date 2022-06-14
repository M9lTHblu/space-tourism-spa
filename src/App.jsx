import {Route, Routes} from 'react-router-dom';
import {Layout} from './components/Layout/Layout';
import {Crew} from './pages/Crew/Crew';
import {Destination} from './pages/Destination/Destination';

import {Home} from './pages/Home/Home';
import {Technology} from './pages/Technology/Technology';

const App = () => {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destination/*" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Route>
      </Routes>
  );
};

export default App;
