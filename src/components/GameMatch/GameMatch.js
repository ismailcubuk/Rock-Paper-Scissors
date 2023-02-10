import React from 'react'
import './GameMatch.css';
import lizard from '../images/icon-lizard.svg';
import paper from '../images/icon-paper.svg';
import rock from '../images/icon-rock.svg';
import scissors from '../images/icon-scissors.svg';
import spock from '../images/icon-spock.svg';
function GameMatch() {
    return (
        <div className='gamematch-border'>
            <div className='picks'>
                <h4>YOU PICKED</h4>
                <div>
                    <img src={lizard} alt="" />
                </div>
            </div>
            <div className='picks'>
                <h4>THE HOUSE PICKED</h4>
                <div>
                    <img src={paper} alt="" />
                </div>
            </div>
        </div>
    )
}

export default GameMatch