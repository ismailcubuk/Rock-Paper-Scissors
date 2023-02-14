import './GameRules.css';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rules from '../images/image-rules-bonus.svg'
function GameRules() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className='game-rules' onClick={handleShow}>
                RULES
            </div>
            <Modal centered show={show} onHide={handleClose}>
                <Modal.Body >
                    <div className='rule-header'>
                        GAME RULES
                    </div>
                    <img src={Rules} alt="" />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default GameRules