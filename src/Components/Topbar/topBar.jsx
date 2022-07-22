import React from 'react';
import './topBar.css'



function TopBar() {


  return (
    <div className='top-bar pt-1 pb-1 text-light'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex pt-2 pb-2'>
            <div className='d-flex align-item-center mr-3'>
              <i className='fas fa-phone-alt mr-2' />
              <small>+971 2 443 3113</small>
            </div>
            <div className='d-flex align-item-center mr-3'>
              <i className='fas fa-envelope mr-2' />
              <small>contact@email.com</small>
            </div>
          </div>
          <div className='d-flex pt-2 pb-2'>
            <div className='social-media d-flex align-item-center'>
              <a href='!#' className='text-light'>
                <i className='fab fa-facebook-f mr-4' />
              </a>
              <a href='!#' className='text-light'>
                <i className='fab fa-twitter mr-4' />
              </a>
              <a href='!#' className='text-light'>
                <i className='fab fa-instagram mr-4' />
              </a>
              <a href='!#' className='text-light'>
                <i className='fab fa-linkedin' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;