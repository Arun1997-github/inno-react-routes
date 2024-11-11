
import { Route , Routes} from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import Gallery from './component/Gallery';
import Placements from './component/Placements';

function App() {

  return (
    <>
      
      <Header />
    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />}>
          <Route path='gallery' element={<Gallery />} />
          <Route path='placements' element={<Placements />} />
        </Route>
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </>
  );
}

export default App
