import React, { useContext, useState } from 'react'
import './GameMatch.css';
import GameContext from '../GameContext/GameContext';
function GameMatch() {
    const { playAgainClick, select, win, computerSelect } = useContext(GameContext)

    return (
        <div className='gamematch-border'>
            <div className='picks'>
                <h4>YOU PICKED</h4>
                <div>
                    <img src={require(`../images/icon-${select}.svg`)} alt="" />
                </div>
            </div>
            <div className='match'>
                {win}
                <button onClick={playAgainClick}>PLAY AGAIN</button>
            </div>
            <div className='picks'>
                <h4>THE HOUSE PICKED</h4>
                <div>
                    <img src={require(`../images/icon-${computerSelect}.svg`)} alt="" />
                    {/* <img src={paper} alt="" /> */}
                </div>
            </div>
        </div>
    )
}

export default GameMatch