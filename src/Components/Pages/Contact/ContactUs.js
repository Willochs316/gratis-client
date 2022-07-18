import React from 'react';
import './ContactUs.css';
import contact_us from '../../../Assets/png/contact_us.png';
import Paragraph from '../../../Commons/Paragraph';
import Input from '../../../Commons/Input';
import Button from '../../../Commons/Button';
import MetricIcon from '../../../Commons/Icon';
import { FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-content'>
        <img src={contact_us} className='contact_us' alt='contact us' />

        <div className='arrow-btn'>
          <MetricIcon icons={FaArrowRight} className='arrow-btn-right' />
        </div>
      </div>

      <div className='contact-form-container'>
        <div className='contact-form-header'>
          <Paragraph
            title='Hey, we are still in the works,'
            className='contact-text1'
          />
          <br />
          <Paragraph
            title='but you can send us a message!'
            className='contact-text1'
          />
        </div>

        <form id='contact-form'>
          <div className='form-group'>
            <label id='name-label' for='name'>
              First name
            </label>
            <Input
              type='text'
              name='name'
              id='name'
              className='form-control'
              placeholder='Enter your first name'
              required
            />
          </div>

          <div className='form-group'>
            <label id='name-label' for='name'>
              Last name
            </label>
            <Input
              type='text'
              name='name'
              id='name'
              className='form-control'
              placeholder='Enter Your Last name'
              required
            />
          </div>

          <div className='form-group'>
            <label id='name-label' for='name'>
              Enter address
            </label>
            <Input
              type='text'
              name='name'
              id='name'
              className='form-control'
              placeholder='Enter Your Email Address'
              required
            />
          </div>

          <div className='form-group2'>
            <p id='form-text'>Tell Us What You Need Help With:</p>
            <textarea
              id='comments'
              class='input-textarea'
              name='comment'
              placeholder='Enter A Topic, Like "Channel Problem.."'
            ></textarea>
          </div>

          <div className='form-group3'>
            <Button
              type='submit'
              id='submit'
              className='submit-button'
              title='Send Now'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
