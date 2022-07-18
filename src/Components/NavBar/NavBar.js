import Button from '../../Commons/Button';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  let navigate = useNavigate();
  return (
    <div className='navbar'>
      <div className='metric'>
        <img src='metricks.png' alt='metricks' width='150' />
      </div>

      <div className='link-container'>
        <Link to='/' className='ab-blog'></Link>
        <Link to='/about' className='ab-blog'>
          About us
        </Link>

        <Link to='/blog' className='ab-blog'>
          Blog
        </Link>

        <Button
          className='contact-btn'
          title='Contact us'
          onClick={() => navigate('/contact-us')}
        />
      </div>
    </div>
  );
};

export default NavBar;
