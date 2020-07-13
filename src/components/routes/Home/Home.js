import React from 'react'
import {Link} from 'react-router-dom'

import './Home.css'
import img from '../../../assets/trollface.png'

const Home = () => {
    return (
        <div className='home-wrapper' >
            <h1>Homemade MEME GENERATOR</h1>
            <h3>by. Przemysław Greber</h3>
            <br/>
            <h3>Click to Begin</h3>
            <Link to='/main'><img style={{height: '100px', }} src={img} alt=""/></Link>
        </div>
    )
}

export default Home
