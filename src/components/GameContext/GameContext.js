import React, { useState, createContext, useEffect } from 'react'
import lizard from '../images/icon-lizard.svg';
import paper from '../images/icon-paper.svg';
import rock from '../images/icon-rock.svg';
import scissors from '../images/icon-scissors.svg';
import spock from '../images/icon-spock.svg';
import loseGame from '../sounds/lose.mp3'
import winGame from '../sounds/win.mp3';
import pickGame from '../sounds/pick.mp3';
import drawGame from '../sounds/draw.mp3';
import trueGame from '../sounds/true.mp3';


const GameContext = createContext()

export const GameContextprovider = ({ children }) => {

    const [select, setSelect] = useState("")
    const [sPage, setSPage] = useState(true)
    const [win, setWin] = useState()
    const [count, setCount] = useState(0)
    const [computerSelect, setComputerSelect] = useState("")
    const [showImage, setShowImage] = useState(false);
    const [showMyCard, setShowMyCard] = useState(false)
    const [houseColor, setHouseColor] = useState("")
    const [myColor, setmyColor] = useState("")


    const playWinAudio = () => {
        new Audio(winGame).play();
    }
    const playLoseAudio = () => {
        new Audio(loseGame).play();
    }
    const playPickAudio = () => {
        new Audio(pickGame).play();
    }
    const playTrueAudio = () => {
        new Audio(trueGame).play();
    }
    // const playDrawAudio = () => {
    //     new Audio(drawGame).play();
    // }


    const handleClick = (e) => {
        setShowMyCard(false)
        setShowImage(false)
        setSelect(e.target.id);
        setSPage(false);
        setComputerSelect(games[Math.floor(Math.random() * 5)].name)
        setTimeout(() => {
            setShowMyCard(true)
        }, 500);
        setTimeout(() => {
            setShowImage(true);
        }, 2000);
        playPickAudio()
    }
    useEffect(() => {
        if (select === "lizard") {
            setmyColor("#834FE3")
        } else if (select === "paper") {
            setmyColor("#4865F4")
        } else if (select === "rock") {
            setmyColor("#DC2E4E")
        } else if (select === "scissors") {
            setmyColor("#EC9E0E")
        } else {
            setmyColor("#40B9CE")
        }
    }, [select])


    useEffect(() => {

        if (computerSelect === "lizard") {
            setHouseColor("#834FE3")
        } else if (computerSelect === "paper") {
            setHouseColor("#4865F4")
        } else if (computerSelect === "rock") {
            setHouseColor("#DC2E4E")
        } else if (computerSelect === "scissors") {
            setHouseColor("#EC9E0E")
        } else {
            setHouseColor("#40B9CE")
        }

        if (select === "scissors" && computerSelect === "paper") {
            setWin("YOU WİN")
            setTimeout(() => {
                setCount(count + 1)
                playTrueAudio()
            }, 2000);
        } else if (select === "paper" && computerSelect === "rock") {
            setWin("YOU WİN")
            setTimeout(() => {
                setCount(count + 1)
                playTrueAudio()
            }, 2000);
        } else if (select === "rock" && computerSelect === "lizard") {
            setWin("YOU WİN")
            setTimeout(() => {
                setCount(count + 1)
                playTrueAudio()
            }, 2000);
        } else if (select === "lizard" && computerSelect === "spock") {
            setWin("YOU WİN")
            setTimeout(() => {
                setCount(count + 1)
                playTrueAudio()
            }, 2000);
        } else if (select === "spock" && computerSelect === "scissors") {
            setWin("YOU WİN")
            setTimeout(() => {
                setCount(count + 1)
                playTrueAudio()
            }, 2000);
        } else if (select === "scissors" && computerSelect === "lizard") {
            setWin("YOU WİN")
            setTimeout(() => {
                setCount(count + 1)
                playTrueAudio()
            }, 2000);
        } else if (select === "paper" && computerSelect === "spock") {
            setWin("YOU WİN")
            setTimeout(() => {
                setCount(count + 1)
                playTrueAudio()
            }, 2000);
        } else if (select === "rock" && computerSelect === "scissors") {
            setWin("YOU WİN")
            setTimeout(() => {
                setCount(count + 1)
                playTrueAudio()
            }, 2000);
        } else if (select === "lizard" && computerSelect === "paper") {
            setWin("YOU WİN")
            setTimeout(() => {
                setCount(count + 1)
                playTrueAudio()
            }, 2000);
        } else if (select === "spock" && computerSelect === "rock") {
            setWin("YOU WİN")
            setTimeout(() => {
                setCount(count + 1)
                playTrueAudio()
            }, 2000);
        } else if (select === computerSelect) {
            setWin("DRAW")
        } else if (select !== "") {
            setWin("YOU LOSE")
            setTimeout(() => {
                setCount(count - 1)
                playLoseAudio()
            }, 2000);
        }
    }, [computerSelect, select])

    const playAgainClick = () => {
        setSelect("")
        setSPage(true)
    }

    const games = [
        { id: 1, name: "lizard", game: lizard, color: "#834FE3" },
        { id: 2, name: "paper", game: paper, color: "#4865F4" },
        { id: 3, name: "rock", game: rock, color: "#DC2E4E" },
        { id: 4, name: "scissors", game: scissors, color: "#EC9E0E" },
        { id: 5, name: "spock", game: spock, color: "#40B9CE" },
    ]

    const data = {
        showMyCard,
        myColor,
        showImage,
        houseColor,
        count,
        computerSelect,
        sPage,
        select,
        handleClick,
        playAgainClick,
        win,
    }
    return (
        <GameContext.Provider value={data}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContext