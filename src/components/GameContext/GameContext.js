import React, { useState, createContext, useEffect } from 'react'
import lizard from '../images/icon-lizard.svg';
import paper from '../images/icon-paper.svg';
import rock from '../images/icon-rock.svg';
import scissors from '../images/icon-scissors.svg';
import spock from '../images/icon-spock.svg';

const GameContext = createContext()

export const GameContextprovider = ({ children }) => {

    const [select, setSelect] = useState("")
    const [sPage, setSPage] = useState(true)
    const [win, setWin] = useState()
    const [count, setCount] = useState(0)
    const [computerSelect, setComputerSelect] = useState()
    const [showImage, setShowImage] = useState(false);
    const [color, setColor] = useState("")

    const handleClick = (e) => {
        setShowImage(false)
        setSelect(e.target.id);
        setSPage(false);
    }

    useEffect(() => {
        if (computerSelect === "lizard") {
            setColor("#834FE3")
        } else if (computerSelect === "paper") {
            setColor("#4865F4")
        } else if (computerSelect === "rock") {
            setColor("#DC2E4E")
        } else if (computerSelect === "scissors") {
            setColor("#EC9E0E")
        } else {
            setColor("#40B9CE")
        }
        setTimeout(() => {
            setShowImage(true);
        }, 2000);
        if (select === "scissors" && computerSelect === "paper") {
            setWin("YOU WİN")
            setTimeout(() => {
                setCount(count + 1)
            }, 2000);
        } else if (select === "paper" && computerSelect === "rock") {
            setWin("YOU WİN")
            setTimeout(() => {
                setCount(count + 1)
            }, 2000);
        } else if (select === "rock" && computerSelect === "lizard") {
            setWin("YOU WİN")
            setTimeout(() => {
                setCount(count + 1)
            }, 2000);
        } else if (select === "lizard" && computerSelect === "spock") {
            setWin("YOU WİN")
            setTimeout(() => {
                setCount(count + 1)
            }, 2000);
        } else if (select === "spock" && computerSelect === "scissors") {
            setWin("YOU WİN")
            setTimeout(() => {
                setCount(count + 1)
            }, 2000);
        } else if (select === "scissors" && computerSelect === "lizard") {
            setWin("YOU WİN")
            setTimeout(() => {
                setCount(count + 1)
            }, 2000);
        } else if (select === "paper" && computerSelect === "spock") {
            setWin("YOU WİN")
            setTimeout(() => {
                setCount(count + 1)
            }, 2000);
        } else if (select === "rock" && computerSelect === "scissors") {
            setWin("YOU WİN")
            setTimeout(() => {
                setCount(count + 1)
            }, 2000);
        } else if (select === "lizard" && computerSelect === "paper") {
            setWin("YOU WİN")
            setTimeout(() => {
                setCount(count + 1)
            }, 2000);
        } else if (select === "spock" && computerSelect === "rock") {
            setWin("YOU WİN")
            setTimeout(() => {
                setCount(count + 1)
            }, 2000);
        } else {
            setWin("YOU LOSE")
            setCount(count)
        }
    }, [sPage])

    const playAgainClick = () => {
        setSPage(true)
        setComputerSelect(games[Math.floor(Math.random() * 5)].name)
    }
    const games = [
        { id: 1, name: "lizard", game: lizard, color: "#834FE3" },
        { id: 2, name: "paper", game: paper, color: "#4865F4" },
        { id: 3, name: "rock", game: rock, color: "#DC2E4E" },
        { id: 4, name: "scissors", game: scissors, color: "#EC9E0E" },
        { id: 5, name: "spock", game: spock, color: "#40B9CE" },
    ]

    useEffect(() => {
        setComputerSelect(games[Math.floor(Math.random() * 5)].name)
    }, [])

    const data = {
        showImage,
        color,
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