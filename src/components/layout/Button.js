import React from 'react';

import './Button.css'

const Button = (props) => {
    return (
        <div className='buttonDiv' >
            <h2 className='buttonTitle'>{props.title}</h2>
            <button onClick={props.click} className='button'>{props.text}</button>
        </div>
    )
}

export default Button
