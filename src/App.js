import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Blog from './Components/Pages/Blog/Blog';
import Contact from './Components/Pages/Contact/Contact-us';
import Button from './Commons/Button';
import Svgs from './Assets/svgs';
import './style.css';
import Paragraph from './Commons/Paragraph';

const App = () => {
  return (
    <div className='metric-container'>
      <div className='conatiner'>
        <Router>
          <div className='navbar'>
            <div className='metric'>
              <img src='metricks.png' alt='metricks' width='169px' />
            </div>
            <div className='link-container'>
              <Link to='/about' className='ab-blog'>
                About us
              </Link>
              <Link to='/blog' className='ab-blog'>
                Blog
              </Link>
              <Button title='Contact us' className='contact-btn' />
            </div>
          </div>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>

        <div className='footer-container'>
          <div className='svg-container'>
            <Svgs.YouTubeUploadIcon />
            <Svgs.FaceBookUploadIcon />
            <Svgs.LinkedInUploadIcon />
            <Svgs.InstagramUploadIcon />
            <Svgs.TwitterUploadIcon />
          </div>

          <div className='privacy-container'>
            <div>
              <Paragraph title='Terms of services' />
            </div>
            <div>
              <Paragraph title='Privacy policy' />
            </div>
          </div>

          <div className='copyright-container'>
            <Paragraph title='Copyright 2021 @ Peddle Technologies. All Rights Reserved.' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
