import React from 'react';
import Footer from './section/Footer';
import Content from './section/Content';
import Header from './section/Header';

import './Post.css';

function Post(props) {
  return (
    <div className='box'>
      <Header info = {props} />
      <Content image = {props.image} />
      <Footer />
    </div>
  );
}

export default Post;
