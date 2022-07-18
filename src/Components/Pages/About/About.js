import React from 'react';
import './About.css';
import Paragraph from '../../../Commons/Paragraph';
import MetricIcon from '../../../Commons/Icon';
import { FaArrowRight } from 'react-icons/fa';
import NavBar from '../../NavBar/NavBar';
import about_us from '../../../Assets/png/about_us.png';
import about_us_dots from '../../../Assets/png/about_us_dots.png';
import about_us_blog from '../../../Assets/png/about_us.png';
import Svgs from '../../../Assets/svgs';

const About = () => {
  return (
    <div className='about-main-container'>
      <NavBar />

      <div className='main-about-conatiner'>
        <div className='main-about-image'>
          <img src={about_us} alt='about_us' className='about_us' />
        </div>

        <div className='main-about-detail-container'>
          <div className='main-about-info'>
            <hr className='main-about-line'></hr>
            <Paragraph className='main-aboutUs' title='About us' />
          </div>

          <div className='main-about-content-info'>
            <Paragraph className='saas-commerce' title='Built for Saas' />
            <Paragraph className='saas-commerce' title='and E-commerce' />
          </div>

          <div className='main-about-foot-content'>
            <Paragraph
              className='main-foot-title'
              title='Our tools are easy to set up and use with a user'
            />
            <Paragraph
              className='main-foot-title'
              title='friendly dashboard that enables you to set up,'
            />
            <Paragraph
              className='main-foot-title'
              title='launch, automate and manage multi-affiliate'
            />
            <Paragraph
              className='main-foot-title'
              title='campaigns in 5 minutes.'
            />
          </div>
        </div>
      </div>

      <div className='main-about-description'>
        <Paragraph
          className='description'
          title='Metricks was developed because just like'
        />
        <Paragraph
          className='description'
          title='you, we needed a product that could give'
        />

        <p className='description'>
          us <span className='description1'>good value.</span>
        </p>
      </div>

      <div className='main-about-box'>
        <div className='main-about-pride-box1'>
          <div className='mission'>
            <div className='line-container'>
              <Paragraph title='01' />
              <hr className='main-about-line'></hr>
            </div>

            <div className='main-about-line-text'>
              {' '}
              <Paragraph title='why us?' className='about-line-text' />
            </div>
          </div>

          <div className='mission-statement-container'>
            <Paragraph
              className='mission-text'
              title='We pride ourselves in our ability to innovate and'
            />
            <Paragraph
              className='mission-text'
              title='create world-class tools that provide reliable and'
            />
            <Paragraph
              className='mission-text'
              title='efficient touchpoints between advertisers and'
            />
            <Paragraph className='mission-text' title='affiliates.' />
          </div>

          <div className='dots-container'>
            <img src={about_us_dots} alt='' className='about_us_dots' />
          </div>
        </div>

        <div className='main-about-pride-box2'>
          <div className='mission'>
            <div className='line-container'>
              <Paragraph title='02' />
              <hr className='main-about-line'></hr>
            </div>

            <div className='main-about-line-text2'>
              {' '}
              <Paragraph
                title='Growing with you?'
                className='about-line-text'
              />
            </div>
          </div>

          <div className='mission-statement-container'>
            <Paragraph
              className='mission-text'
              title='Leveraging the best technology, we have developed an all-in-'
            />
            <Paragraph
              className='mission-text'
              title='one affiliate marketing tracking software, a genius tool to help'
            />
            <Paragraph
              className='mission-text'
              title='you track, automate and optimize your influencer campaigns,'
            />
            <Paragraph
              className='mission-text'
              title='all from one dashboard.'
            />
          </div>

          <div className='dots-text-container'>
            <Paragraph
              className='mission-text'
              title='Our team of experts are constantly brainstorming, testing and'
            />
            <Paragraph
              className='mission-text'
              title='developing new solutions with only one thing in mind - your'
            />
            <Paragraph
              className='mission-text'
              title='business growth. Your success is our success and by giving you'
            />
            <Paragraph
              className='mission-text'
              title='the tools you need to scale, we grow as well.'
            />
          </div>
        </div>
      </div>

      <div className='main-about-footer'>
        <div className='main-about-container1'>
          <Paragraph
            className='main-about-foot-text1'
            content='Got a Question?'
          />
          <Paragraph
            className='main-about-foot-text'
            title='See how Metricks can help your business grow with best affiliate marketing tracking'
          />
          <Paragraph className='main-about-foot-text' title='Software.' />

          <div className='contactus-box'>
            <Paragraph className='main-about-foot' title='Contact us' />
            <MetricIcon
              className='main-about-foot-text2'
              icons={FaArrowRight}
            />
          </div>
        </div>

        <div className='main-about-container2'>
          <img
            src={about_us_blog}
            alt=''
            width='100'
            className='about_us_blog'
          />
        </div>
      </div>

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
  );
};

export default About;
