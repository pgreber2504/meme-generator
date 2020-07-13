import React from 'react'
import './Modal.css';

const Modal = (props) => {
    // const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    return (
        <div >
            <section className="modal-main">
                {props.children}
                {/* <button onClick={handleClose}>close</button> */}
            </section>
        </div>
    )
}

export default Modal
