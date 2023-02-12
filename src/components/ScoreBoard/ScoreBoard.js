import './ScoreBoard.css';
import React, { useContext } from 'react'
import logobonus from '../images/logo-bonus.svg';
import GameContext from '../GameContext/GameContext';

function ScoreBoard() {
    const { count } = useContext(GameContext)
    return (
        <div className='score-board'>
            <div className='rock-paper'>
                <img src={logobonus} alt="" />
            </div>
            <div className='score'>
                <p>SCORE</p>
                <h1>{count}</h1>
            </div>
        </div>
    )
}

export default ScoreBoard