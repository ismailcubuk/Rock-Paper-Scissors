import React, { useContext } from 'react'
import './GameMatch.css';
import GameContext from '../GameContext/GameContext';
function GameMatch() {
    const { playAgainClick, showMyCard, select, win, computerSelect, showImage, houseColor, myColor, disableButton } = useContext(GameContext)

    return (
        <div className='gamematch-border'>
            <div className='picks'>
                <h4>YOU PICKED</h4>
                {showMyCard ? <div style={{ border: `20px solid ${myColor}` }}>
                    <img src={require(`../images/icon-${select}.svg`)} alt="" />
                </div> : null}
            </div>
            <div className='match'>
                {showImage ? <div className='win-lose'>{win}</div> : null}
                {showImage ? <button className='play-again' disabled={disableButton} onClick={playAgainClick}>PLAY AGAIN</button> : null}
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