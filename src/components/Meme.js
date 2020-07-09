import React from 'react'

import './Meme.css'

const Meme = (props) => {
    return (
        <div onClick={()=>props.selectTemp(props.memes.id)} id={props.memes.id} className='memeContainer'>
            <p className='memeTitle'>{props.memes.name}</p>
            <img style={{maxWidth:'90%'}} className='memeImg' src={props.memes.url}/>
        </div>
    )
}

export default Meme
