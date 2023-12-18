import React, { Children, useState } from "react";
import './Modal.scss'
import closeIcon from "../../assets/close.png"
const Modal = (props) => {
    const { Header, Body, children, close } = props
    const handleClose = () => {
        close()
    }
    return (
        <div className="modal-container">
            <div className="modal-ineer">
                {children ? children :
                    <>
                        <div className="header">
                            <div className="modal-header">
                                {Header && <Header />}
                            </div>
                            <div>
                                <img className="pointer" src={closeIcon} alt="close" onClick={handleClose} />
                            </div>
                        </div>
                        <div className="modal-body">
                            {Body && <Body />}
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Modal;