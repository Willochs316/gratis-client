import React from 'react';
import './About.css';
import Paragraph from '../../../Commons/Paragraph';
import MetricIcon from '../../../Commons/Icon';
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <div className='main-container'>
        <div className='about-container'>
          <div className='about_box-1'></div>

          <div className='about_box-2'>
            <div className='about_box-3'>
              <Paragraph
                className='ab-text'
                title='Our tools are easy to set up and use with a user'
              />
              <Paragraph
                className='ab-text'
                title='friendly dashboard that enables you to set up,'
              />
              <Paragraph
                className='ab-text'
                title=' launch, automate and manage multi-affiliate'
              />
              <Paragraph className='ab-text' title='campaigns in 5 minutes.' />
            </div>
          </div>

          <div className='about_box-4'>
            <div className='about'>
              <hr className='line'></hr>
              <Paragraph className='aboutUs' content='About us' />
            </div>

            <div className='about-info'>
              <Paragraph className='about-text' title='Built for SaaS' />
              <Paragraph className='about-text' title='and E-commerce' />
            </div>
          </div>
        </div>

        <div className='metric-content'>
          <Paragraph
            className='metric-1'
            title='Metricks was developed because just like'
          />
          <Paragraph
            className='metric-1'
            title='you, we needed a product that could give'
          />
          <p className='metric-1'>
            us <b>good value.</b>
          </p>
        </div>

        <div className='metric-article'>
          <div className='metric-01'>
            <div className='met-1'>
              <div className='met-02'>
                <Paragraph className='text-01' title='01' />
                <hr className='line-02'></hr>
              </div>

              <div className='content-h1'>
                <Paragraph className='text-02' content='why us' />
              </div>
            </div>

            <div className='met-01'>
              <Paragraph
                className='met-text'
                title='We pride ourselves in our ability to innovate and'
              />
              <Paragraph
                className='met-text'
                title='create world-class tools that provide reliable and'
              />
              <Paragraph
                className='met-text'
                title='efficient touchpoints between advertisers and'
              />
              <Paragraph className='met-text' title='affiliates.' />
            </div>

            <div className='met-02'></div>
          </div>

          <div className='metric-01'>
            <div className='met-1'>
              <div className='met-02'>
                <Paragraph className='text-01' title='02' />
                <hr className='line-02'></hr>
              </div>

              <div className='content-h1'>
                <Paragraph className='text-02' title='Growing with you' />
              </div>
            </div>

            <div className='met-01'>
              <Paragraph
                className='met-text'
                title='Leveraging the best technology, we have developed an all-in-'
              />
              <Paragraph
                className='met-text'
                title='one affiliate marketing tracking software, a genius tool to help'
              />
              <Paragraph
                className='met-text'
                title='you track, automate and optimize your influencer campaigns,'
              />
              <Paragraph className='met-text' title='all from one dashboar.' />
            </div>

            <div className='met-01'>
              <Paragraph
                className='met-text'
                title='Our team of experts are constantly brainstorming, testing and'
              />
              <Paragraph
                className='met-text'
                title='developing new solutions with only one thing in mind - your'
              />
              <Paragraph
                className='met-text'
                title='business growth. Your success is our success and by giving you'
              />
              <Paragraph
                className='met-text'
                title='the tools you need to scale, we grow as well.'
              />
            </div>
          </div>
        </div>

        <div className='contact-container'>
          <div className='metro'>
            <Paragraph className='metro-text' content='Got a Question?' />
          </div>

          <div className='metro-01'>
            <Paragraph
              className='metro-txt'
              title='See how Metricks can help your business grow with best Affiliate Marketing Tracking'
            />
            <Paragraph className='metro-txt' title='Software.' />
          </div>

          <div className='metro-02'>
            <Paragraph title='Contact Us' />
            <MetricIcon icons={FaArrowRight} className='faArrrow' />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
