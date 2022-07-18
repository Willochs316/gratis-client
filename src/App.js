import { Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Blog from './Components/Pages/Blog/Blog';
import Contact from './Components/Pages/Contact/ContactUs';
import './App.css';


const App = () => {
  return (
    <div className='metric-container'>
      <div className='conatiner'>
        <Routes>
          <Route path='/comingsoon' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact-us' element={<Contact />} />
        </Routes>

      </div>
    </div>
  );
};

export default App;
