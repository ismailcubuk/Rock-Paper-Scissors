import React, { useContext, useState } from 'react'
import './GameMatch.css';
import GameContext from '../GameContext/GameContext';
function GameMatch() {
    const { playAgainClick, select, win, computerSelect, showImage, houseColor, myColor } = useContext(GameContext)

    return (
        <div className='gamematch-border'>
            <div className='picks'>
                <h4>YOU PICKED</h4>
                <div style={{ border: `20px solid ${myColor}` }}>
                    <img src={require(`../images/icon-${select}.svg`)} alt="" />
                </div>
            </div>
            <div className='match'>
                {showImage ? <div className='win-lose'>{win}</div> : null}
                {showImage ? <button className='play-again' onClick={playAgainClick}>PLAY AGAIN</button> : null}
            </div>
            <div className='picks'>
                <h4>THE HOUSE PICKED</h4>
                {showImage ? <div style={{ border: `20px solid ${houseColor}` }}>
                    (<img src={require(`../images/icon-${computerSelect}.svg`)} alt="" />)
                </div> : null}
            </div>
        </div>
    )
}

export default GameMatch