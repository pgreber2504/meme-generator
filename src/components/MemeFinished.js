import React from 'react';

import './MemeFinished.css';

const MemeFinished = (props) => {
    return (
        <div className='finishedContainer'>
            <img src={props.finishedUrl} alt=""/>
            <a href={props.finishedPageUrl} className='button'>LINK TO WEBSITE</a>
        </div>
    )
}

export default MemeFinished
