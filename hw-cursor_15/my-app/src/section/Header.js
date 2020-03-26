import React from 'react';

function Header(props) {
    return (
        <div className='header'>
            <img src={props.info.author.photo} className='img_logo' />
            <div className='info'>
                <div className='name'>
                    <div className='white'>{props.info.author.name}</div>
                    <div className='white__ ml5'>{props.info.author.nickname}</div>
                    <div className='white__ ml5'>{props.info.date}</div>
                </div>
                <span className='white'>{props.info.content}</span>
            </div>
            <div className='down white__'>></div>
        </div>
    );
}

export default Header;