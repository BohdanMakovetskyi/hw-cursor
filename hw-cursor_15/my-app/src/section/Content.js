import React from 'react';

function Content(props) {
    return (
        <div className='content'>
          <img src={props.image} className='img' />
        </div>
    );
}

export default Content;