// css
import './App.css';

// react-router-dom imports
import { Routes, Route} from 'react-router-dom';

// Component Imports
import Landing from './components/landingPage';
import About from './components/about';



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


    </Routes>
  )
}

export default App;
