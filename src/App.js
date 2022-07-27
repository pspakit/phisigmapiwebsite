// css
import './App.css';
import '../node_modules/bulma/css/bulma.css';

// react-router-dom imports
import { Routes, Route, useNavigate} from 'react-router-dom';

// IMPORTANT
import { app } from './utils/firebase';

// Component Imports
import Landing from './components/landingPage';
import About from './components/about';
import Recruitment from './components/recruitment';
import Gallery from './components/gallery';
import Siblings from './components/siblings';


function App() {

  return (

    // All the website routes and the components & path that go with them
    <Routes>
      <Route 
        exact path='/'
        element={<Landing/>}
      />

      <Route 
        exact path='/about'
        element={<About />}
      />

      <Route 
        exact path='/recruitment'
        element={<Recruitment />}
      />

      <Route 
        exact path='/gallery'
        element={<Gallery />}
      />

      <Route 
        exact path='/siblings'
        element={<Siblings />}
      />

    </Routes>
  )
}

export default App;
