import React from 'react';

import './MemeBuilder.css';
import Button from './layout/Button'

const MemeBuilder = (props) => {
    return (
        <div className='builderContainer'>
            <div className="builderImageInfo">
                <h2>{props.title}</h2>
                <img src={props.url} alt="" />
            </div>

            <div className="builderTextBoxes">
                <ul>
                    <li>
                        <label htmlFor="topText">First Text:</label>
                        <input autoComplete='off' onChange={(e) => props.topTextVal(e)} value={props.topText} type="text" name="" id="topText" />
                    </li>

                    <li>
                        <label htmlFor="bottomText">Second Text:</label>
                        <input autoComplete='off' onChange={(e) => props.bottomTextVal(e)} value={props.bottomText} type="text" id='bottomText' />
                    </li>
                    
                    <Button click={props.finishMeme} text='Generate Meme' />

                </ul>
            </div>

        </div>
    )
}

export default MemeBuilder
