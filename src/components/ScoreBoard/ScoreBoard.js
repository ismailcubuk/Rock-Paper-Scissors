import './ScoreBoard.css';
import React from 'react'
import logobonus from '../images/logo-bonus.svg';

function ScoreBoard() {
    return (
        <div className='score-board'>
            <div className='rock-paper'>
                <img src={logobonus} alt="" />
            </div>
            <div className='score'>
                <p>SCORE</p>
                <h1>12</h1>
            </div>
        </div>
    )
}

export default ScoreBoard