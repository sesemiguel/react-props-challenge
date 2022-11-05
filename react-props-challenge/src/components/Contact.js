import React from 'react';

export default function Contact (props){
    return (
        <div className='contact-card'>
            <img src={props.img} alt=''></img>
            <h3>{props.name}</h3>
            <p>{props.phone}</p>
        </div>
    )
}