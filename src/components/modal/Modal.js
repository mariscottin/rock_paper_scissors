import React from 'react';
import Backdrop from '../backdrop/Backdrop';
import RulesImg from '../../assets/img/image-rules.svg';
import CloseBtn from '../../assets/img/icon-close.svg';
import './Modal.css';

const Modal = (props) => {
    return(
        <>
        <Backdrop onClick={props.toggleModal} show={props.show}/>
        <div className="modal__container" style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity : props.show ? 1 : 0}}>
            <div className="modal__title">
                <h4>RULES</h4>
                <img src={CloseBtn} alt="Close Button" onClick={()=> props.toggleModal()} />
            </div>
            <div className="modal__body">
                <img src={RulesImg} alt="Game Rules" />
            </div>
        </div>
        </>
    )
}

export default Modal;