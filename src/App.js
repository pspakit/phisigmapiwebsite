// css
import './App.css';
import '../node_modules/bulma/css/bulma.css';

// react-router-dom imports
import { Routes, Route } from 'react-router-dom';
import { Navigate } from "react-router-dom";

// IMPORTANT
import { app } from './utils/firebase'; // eslint-disable-line

// Component Imports
import Landing from './components/landingPage';
import About from './components/about';
import Recruitment from './components/recruitment';
import Gallery from './components/gallery';
import Siblings from './components/siblings';

function RequireAuth({ children }) {
  const auth1 = sessionStorage.getItem('Auth Token');
  return auth1 !== null ? children : <Navigate to='/' replace />;
}


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
        element={
          <RequireAuth>
            <Siblings />
          </RequireAuth>
        }
      />

    </Routes>
  )
}

export default App;
