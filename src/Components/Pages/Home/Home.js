import React from 'react';
import Button from '../../../Commons/Button';
import Input from '../../../Commons/Input';
import TextField from '@mui/material/TextField';
import './Home.css';

const Home = () => {
  return (
    <div className='main-content'>
      <div className='header'>
        <div className='head-content'>
          <h5 className='head-text'>Something Awesome is</h5>
        </div>
        <div className='head-content'>
          <h5 className='head-text'>coming soon</h5>
        </div>
      </div>

      <div className='article'>
        <div className='article-content'>
          <p className='p-text'>
            Your all-in-one affiliate marketing tracking software
            <b> track, automate</b> and
          </p>
        </div>
        
        <div className='article-content'>
          <p className='p-text'>
            <b>optimize</b> your campaigns.
          </p>
        </div>
      </div>

      <div className='my-box'>
        <div className='box-1'>
          <div className='count'>7</div>
          <div className='count-time'>Days</div>
        </div>
        <div className='box-1'>
          <div className='count'>24</div>
          <div className='count-time'>Hours</div>
        </div>
        <div className='box-1'>
          <div className='count'>54</div>
          <div className='count-time'>Minutes</div>
        </div>
        <div className='box-2'>
          <div className='count'>11</div>
          <div className='count-time'>Second</div>
        </div>
      </div>

      <div className='form-inline'>
        <form className='textfield-content'>
          <TextField
            id='standard-basic'
            className='textfield'
            Input={{ className: 'textfield-label' }}
            InputLabelProps={{ className: 'textfield__label' }}
            label='First Name..'
            variant='standard'
          />
        </form>
        <form className='textfield-content'>
          <TextField
            id='standard-basic'
            className='textfield'
            InputLabelProps={{ className: 'textfield__label' }}
            label='Last Name..'
            variant='standard'
          />
        </form>
      </div>

      <div className='search-input'>
        <Input
          type='email'
          name='email'
          className='em-input'
          placeholder='Enter your email address...'
        />
        <Button className='em-button' title='Join our waiting list' />
      </div>
    </div>
  );
};

export default Home;
