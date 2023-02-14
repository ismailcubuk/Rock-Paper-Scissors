import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameContext from '../GameContext/GameContext';
function MatchModal() {
    const { setShow, setSPage, setCount, show, final, setDisableButton } = useContext(GameContext)

    const handleShow = () => setShow(true);
    const handleNewGame = () => {
        setSPage(true)
        setShow(false)
        setCount(0)
        setDisableButton(false)
    }
    return (
        <div>
            <Modal centered className='qwe' show={show}>
                <Modal.Body className='modal-body'>
                    <div className='modal-inside' >YOU {final} GAME!</div>
                    <Button variant="primary" size="lg" onClick={handleNewGame}>
                        New Game
                    </Button>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default MatchModal