import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import metric_blog from '../../../Assets/png/metrick_blog.png';
import Button from '../../../Commons/Button';
import metrick_blog_1 from '../../../Assets/png/metrick_blog_1.png';
import './Blog.css';
import Paragraph from '../../../Commons/Paragraph';
import Input from '../../../Commons/Input';
import MetricIcon from '../../../Commons/Icon';
import { FaArrowRight, FaSearch } from 'react-icons/fa';
import blog_image from '../../../Assets/png/blog_image.png';
import recent_blog from '../../../Assets/png/recent_blog.png';
import Svgs from '../../../Assets/svgs';

const Blog = () => {
  let navigate = useNavigate();

  return (
    <div className='metricks-blog-container'>
      <div className='metricks-blog-navbar'>
        <div className='metric'>
          <img src={metric_blog} alt='metricks' width='100px' />
        </div>

        <div className='link-container'>
          <Link to='/' className='ab-blog'></Link>
          <Link to='/about' className='ab-blog'>
            About us
          </Link>

          <Link to='/blog' className='ab-blog2'>
            Blog
          </Link>

          <Button
            className='contact-btn'
            title='Contact us'
            onClick={() => navigate('/contact-us')}
          />
        </div>
      </div>

      <div className='metricks-blog-navbar2'>
        <div className='metrick-blog-item'>
          <img
            src={metrick_blog_1}
            alt='metrick_blog_1'
            className='metrick_blog_1'
          />
        </div>

        <div className='metrick-item-content'>
          <div className='metrick-item-header'>
            <hr className='line-blog'></hr>
            <Paragraph className='blog' content='blog' />
          </div>

          <div className='metrick-item-title'>
            <Paragraph className='article' content='Articles and News' />
          </div>
        </div>
      </div>

      <div className='metricks-blog-navbar3'>
        <div id='metrick-blog-latest-title'>
          <div className='title-header'>
            <Paragraph
              content='Latest From The Blog'
              className='title-header'
            />
          </div>

          <div className='latest-content-container'>
            {' '}
            <Paragraph
              className='latest-title-text'
              title='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy'
            />
          </div>
        </div>

        <div className='search-container'>
          <Input
            type='text'
            name='text'
            id='search-blogs'
            className='search-blogs'
            placeholder='Search here'
          />
          <MetricIcon icons={FaSearch} className='blog-btn' />
        </div>
      </div>

      <div className='blog-contents-container'>
        <div className='blog-gallery'>
          <div className='blog_image_container'>
            <img src={blog_image} alt='blog_image' className='blog_image' />
          </div>

          <div className='dated-posted'>
            <Paragraph
              className='date-posted-title'
              title='SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE'
            />
          </div>

          <div className='blog-title-container'>
            <div className='blog-title-header'>
              <Paragraph className='blog-text' content='12 Popup Use Cases' />
              <Paragraph
                className='blog-text'
                content='To Increase Conversions'
              />
            </div>

            <div className='blog-title-contents'>
              <Paragraph
                className='blog-title-text'
                title='Lorem ipsum dolor sit amet, consetetur sadipscing'
              />
              <Paragraph
                className='blog-title-text'
                title='elitr, sed diam nonumy eirmod tempor invidunt ut'
              />
              <Paragraph
                className='blog-title-text'
                title='labore et dolore magna aliquyam erat, sed diam'
              />
              <Paragraph
                className='more-text'
                title='voluptua. At vero eos et accusam et justo duo dolores et ea rebum'
              />
            </div>

            <div className='read-more-container'>
              <hr className='blog-line'></hr>
              <Link to='#' className='blog-link'>
                READ MORE
              </Link>
            </div>
          </div>
        </div>

        <div className='blog-gallery'>
          <div className='blog_image_container'>
            <img src={blog_image} alt='blog_image' className='blog_image' />
          </div>

          <div className='dated-posted'>
            <Paragraph
              className='date-posted-title'
              title='SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE'
            />
          </div>

          <div className='blog-title-container'>
            <div className='blog-title-header'>
              <Paragraph className='blog-text' content='12 Popup Use Cases' />
              <Paragraph
                className='blog-text'
                content='To Increase Conversions'
              />
            </div>

            <div className='blog-title-contents'>
              <Paragraph
                className='blog-title-text'
                title='Lorem ipsum dolor sit amet, consetetur sadipscing'
              />
              <Paragraph
                className='blog-title-text'
                title='elitr, sed diam nonumy eirmod tempor invidunt ut'
              />
              <Paragraph
                className='blog-title-text'
                title='labore et dolore magna aliquyam erat, sed diam'
              />
              <Paragraph
                className='more-text'
                title='voluptua. At vero eos et accusam et justo duo dolores et ea rebum'
              />
            </div>

            <div className='read-more-container'>
              <hr className='blog-line'></hr>
              <Link to='#' className='blog-link'>
                READ MORE
              </Link>
            </div>
          </div>
        </div>

        <div className='blog-gallery'>
          <div className='blog_image_container'>
            <img src={blog_image} alt='blog_image' className='blog_image' />
          </div>

          <div className='dated-posted'>
            <Paragraph
              className='date-posted-title'
              title='SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE'
            />
          </div>

          <div className='blog-title-container'>
            <div className='blog-title-header'>
              <Paragraph className='blog-text' content='12 Popup Use Cases' />
              <Paragraph
                className='blog-text'
                content='To Increase Conversions'
              />
            </div>

            <div className='blog-title-contents'>
              <Paragraph
                className='blog-title-text'
                title='Lorem ipsum dolor sit amet, consetetur sadipscing'
              />
              <Paragraph
                className='blog-title-text'
                title='elitr, sed diam nonumy eirmod tempor invidunt ut'
              />
              <Paragraph
                className='blog-title-text'
                title='labore et dolore magna aliquyam erat, sed diam'
              />
              <Paragraph
                className='more-text'
                title='voluptua. At vero eos et accusam et justo duo dolores et ea rebum'
              />
            </div>

            <div className='read-more-container'>
              <hr className='blog-line'></hr>
              <Link to='#' className='blog-link'>
                READ MORE
              </Link>
            </div>
          </div>
        </div>

        <div className='blog-gallery'>
          <div className='blog_image_container'>
            <img src={blog_image} alt='blog_image' className='blog_image' />
          </div>

          <div className='dated-posted'>
            <Paragraph
              className='date-posted-title'
              title='SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE'
            />
          </div>

          <div className='blog-title-container'>
            <div className='blog-title-header'>
              <Paragraph className='blog-text' content='12 Popup Use Cases' />
              <Paragraph
                className='blog-text'
                content='To Increase Conversions'
              />
            </div>

            <div className='blog-title-contents'>
              <Paragraph
                className='blog-title-text'
                title='Lorem ipsum dolor sit amet, consetetur sadipscing'
              />
              <Paragraph
                className='blog-title-text'
                title='elitr, sed diam nonumy eirmod tempor invidunt ut'
              />
              <Paragraph
                className='blog-title-text'
                title='labore et dolore magna aliquyam erat, sed diam'
              />
              <Paragraph
                className='more-text'
                title='voluptua. At vero eos et accusam et justo duo dolores et ea rebum'
              />
            </div>

            <div className='read-more-container'>
              <hr className='blog-line'></hr>
              <Link to='#' className='blog-link'>
                READ MORE
              </Link>
            </div>
          </div>
        </div>

        <div className='blog-gallery'>
          <div className='blog_image_container'>
            <img src={blog_image} alt='blog_image' className='blog_image' />
          </div>

          <div className='dated-posted'>
            <Paragraph
              className='date-posted-title'
              title='SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE'
            />
          </div>

          <div className='blog-title-container'>
            <div className='blog-title-header'>
              <Paragraph className='blog-text' content='12 Popup Use Cases' />
              <Paragraph
                className='blog-text'
                content='To Increase Conversions'
              />
            </div>

            <div className='blog-title-contents'>
              <Paragraph
                className='blog-title-text'
                title='Lorem ipsum dolor sit amet, consetetur sadipscing'
              />
              <Paragraph
                className='blog-title-text'
                title='elitr, sed diam nonumy eirmod tempor invidunt ut'
              />
              <Paragraph
                className='blog-title-text'
                title='labore et dolore magna aliquyam erat, sed diam'
              />
              <Paragraph
                className='more-text'
                title='voluptua. At vero eos et accusam et justo duo dolores et ea rebum'
              />
            </div>

            <div className='read-more-container'>
              <hr className='blog-line'></hr>
              <Link to='#' className='blog-link'>
                READ MORE
              </Link>
            </div>
          </div>
        </div>

        <div className='blog-gallery'>
          <div className='blog_image_container'>
            <img src={blog_image} alt='blog_image' className='blog_image' />
          </div>

          <div className='dated-posted'>
            <Paragraph
              className='date-posted-title'
              title='SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE'
            />
          </div>

          <div className='blog-title-container'>
            <div className='blog-title-header'>
              <Paragraph className='blog-text' content='12 Popup Use Cases' />
              <Paragraph
                className='blog-text'
                content='To Increase Conversions'
              />
            </div>

            <div className='blog-title-contents'>
              <Paragraph
                className='blog-title-text'
                title='Lorem ipsum dolor sit amet, consetetur sadipscing'
              />
              <Paragraph
                className='blog-title-text'
                title='elitr, sed diam nonumy eirmod tempor invidunt ut'
              />
              <Paragraph
                className='blog-title-text'
                title='labore et dolore magna aliquyam erat, sed diam'
              />
              <Paragraph
                className='more-text'
                title='voluptua. At vero eos et accusam et justo duo dolores et ea rebum'
              />
            </div>

            <div className='read-more-container'>
              <hr className='blog-line'></hr>
              <Link to='#' className='blog-link'>
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='recent-articles-container'>
        <Paragraph content='Recent Articles' className='recent-header' />
        <Paragraph
          className='recent-article-title'
          title='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        />
        <Paragraph
          className='recent-article-title'
          title='Nonumy eirmod tempor invidunt ut labore et dolore magna Aliquya'
        />
      </div>

      <div className='recent-blogs-container'>
        <div className='recent-articles-blogs'>
          <div className='dated-posted'>
            <Paragraph
              className='date-posted-title'
              title='SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE'
            />
          </div>

          <div className='blog-title-container'>
            <div className='blog-title-contents'>
              <Paragraph
                className='blog-title-text'
                title='Lorem ipsum dolor sit amet, consetetur sadipscing'
              />
              <Paragraph
                className='blog-title-text'
                title='elitr, sed diam nonumy eirmod tempor invidunt ut'
              />
              <Paragraph
                className='blog-title-text'
                title='labore et dolore magna aliquyam erat, sed diam'
              />
              <Paragraph
                className='more-text'
                title='voluptua. At vero eos et accusam et justo duo dolores et ea rebum'
              />
            </div>

            <div className='read-more-container'>
              <hr className='blog-line'></hr>
              <Link to='#' className='blog-link'>
                READ MORE
              </Link>
            </div>
          </div>
        </div>

        <div className='recent-articles-blogs'>
          <div className='dated-posted'>
            <Paragraph
              className='date-posted-title'
              title='SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE'
            />
          </div>

          <div className='blog-title-container'>
            <div className='blog-title-contents'>
              <Paragraph
                className='blog-title-text'
                title='Lorem ipsum dolor sit amet, consetetur sadipscing'
              />
              <Paragraph
                className='blog-title-text'
                title='elitr, sed diam nonumy eirmod tempor invidunt ut'
              />
              <Paragraph
                className='blog-title-text'
                title='labore et dolore magna aliquyam erat, sed diam'
              />
              <Paragraph
                className='more-text'
                title='voluptua. At vero eos et accusam et justo duo dolores et ea rebum'
              />
            </div>

            <div className='read-more-container'>
              <hr className='blog-line'></hr>
              <Link to='#' className='blog-link'>
                READ MORE
              </Link>
            </div>
          </div>
        </div>

        <div className='recent-articles-blogs'>
          <div className='dated-posted'>
            <Paragraph
              className='date-posted-title'
              title='SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE'
            />
          </div>

          <div className='blog-title-container'>
            <div className='blog-title-contents'>
              <Paragraph
                className='blog-title-text'
                title='Lorem ipsum dolor sit amet, consetetur sadipscing'
              />
              <Paragraph
                className='blog-title-text'
                title='elitr, sed diam nonumy eirmod tempor invidunt ut'
              />
              <Paragraph
                className='blog-title-text'
                title='labore et dolore magna aliquyam erat, sed diam'
              />
              <Paragraph
                className='more-text'
                title='voluptua. At vero eos et accusam et justo duo dolores et ea rebum'
              />
            </div>

            <div className='read-more-container'>
              <hr className='blog-line'></hr>
              <Link to='#' className='blog-link'>
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='load-container'>
        <Button title='load more' className='load-btn' />
      </div>

      <div className='more-container'>
        <div className='learn-more'>
          <Paragraph
            className='learn-more-header'
            content='what to know more about Metrics ?'
          />
          <Paragraph
            className='learn-more-title'
            title='Learn who we are and what drives us.'
          />

          <div className='contactUs-container'>
            <Paragraph className='learn-more-text' title='Contact us' />
            <MetricIcon icons={FaArrowRight} className='span-arrow' />
          </div>
        </div>

        <div className='recent-metrics-more'>
          <img src={recent_blog} alt='recent_blog' className='recent_blog' />
        </div>
      </div>

      <div className='footer-container2'>
        <div className='svg-container'>
          <Svgs.YouTubeUploadIcon className='youtube' />
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

export default Blog;
