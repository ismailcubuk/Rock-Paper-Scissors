import React, { useContext, useState } from 'react'
import './GameMatch.css';
import GameContext from '../GameContext/GameContext';
function GameMatch() {
    const { playAgainClick, select, win, computerSelect, showImage } = useContext(GameContext)

    return (
        <div className='gamematch-border'>
            <div className='picks'>
                <h4>YOU PICKED</h4>
                <div>
                    <img src={require(`../images/icon-${select}.svg`)} alt="" />
                </div>
            </div>
            {showImage ? <div className='match'>
                <div className='win-lose'>{win}</div>
                <button className='play-again' onClick={playAgainClick}>PLAY AGAIN</button>
            </div> : null}
            <div className='picks'>
                <h4>THE HOUSE PICKED</h4>
                <div>
                    {showImage ? (<img src={require(`../images/icon-${computerSelect}.svg`)} alt="" />) : null}
                </div>
            </div>
        </div>
    )
}

export default GameMatch