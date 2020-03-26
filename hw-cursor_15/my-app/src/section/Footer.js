import React from 'react';

function Footer() {
    return (
        <div className='footer'>
          <div className='cont'>
            <i className='far fa-comment'></i>
            <div className='number white__'>482</div>
          </div>
          <div className='cont'>
            <i className='fas fa-retweet'></i>
            <span className='number white__'>146</span>
          </div>
          <div className='cont'>
            <i className='far fa-heart'></i>
            <span className='number white__'>887</span>
          </div>
          <div className='cont'>
            <i class="fas fa-upload"></i>
          </div>
        </div>
    );
}

export default Footer;