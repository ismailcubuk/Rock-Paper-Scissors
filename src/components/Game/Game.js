import './Game.css';
import React from 'react'
import pentagon from '../images/bg-pentagon.svg';
import lizard from '../images/icon-lizard.svg';
import paper from '../images/icon-paper.svg';
import rock from '../images/icon-rock.svg';
import scissors from '../images/icon-scissors.svg';
import spock from '../images/icon-spock.svg';

function Game() {
    return (
        <div className='game-border'>
            <img src={pentagon} className='pentagon' alt="" />
            <div className='lizard-border'>
                <img src={lizard} className='game-images' alt="" />
            </div>
            <div className='paper-border'>
                <img src={paper} className='game-images' alt="" />
            </div>
            <div className='rock-border'>
                <img src={rock} className='game-images' alt="" />
            </div>
            <div className='scissors-border'>
                <img src={scissors} className='game-images' alt="" />
            </div>
            <div className='spock-border'>
                <img src={spock} className='game-images' alt="" />
            </div>
        </div>
    )
}

export default Game