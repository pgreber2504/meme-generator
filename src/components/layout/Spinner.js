import React from 'react';

import './Spinner.css'
import Backdrop from './Backdrop'

const Spinner = () => (
    <Backdrop>
        <div className="loader">Loading</div>
    </Backdrop>
)

export default Spinner
