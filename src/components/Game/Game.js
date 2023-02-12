import './Game.css';
import React, { useContext } from 'react'
import pentagon from '../images/bg-pentagon.svg';
import lizard from '../images/icon-lizard.svg';
import paper from '../images/icon-paper.svg';
import rock from '../images/icon-rock.svg';
import scissors from '../images/icon-scissors.svg';
import spock from '../images/icon-spock.svg';
import GameContext from '../GameContext/GameContext';

function Game() {
    const { handleClick } = useContext(GameContext)

    return (
        <div className='game-border'>
            <img src={pentagon} className='pentagon' alt="" />
            <button className='lizard-border' onClick={handleClick}>
                <img src={lizard} className='game-images' id="lizard" alt="" />
            </button>
            <div className='paper-border' onClick={handleClick}>
                <img src={paper} className='game-images' alt="" id="paper" />
            </div>
            <div className='rock-border' onClick={handleClick}>
                <img src={rock} className='game-images' alt="" id="rock" />
            </div>
            <div className='scissors-border' onClick={handleClick}>
                <img src={scissors} className='game-images' alt="" id="scissors" />
            </div>
            <div className='spock-border' onClick={handleClick}>
                <img src={spock} className='game-images' alt="" id="spock" />
            </div>
        </div>
    )
}

export default Game