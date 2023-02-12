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

    const handleClick = (e) => {
        setSelect(e.target.id);
        setSPage(false);
        if (select === "scissors" && computerSelect === "paper") {
            setWin("başardın")
            setCount(count + 1)
        } else if (select === "paper" && computerSelect === "rock") {
            setWin("başardın")
            setCount(count + 1)
        } else if (select === "rock" && computerSelect === "lizard") {
            setWin("başardın")
            setCount(count + 1)
        } else if (select === "lizard" && computerSelect === "spock") {
            setWin("başardın")
            setCount(count + 1)
        } else if (select === "spock" && computerSelect === "scissors") {
            setWin("başardın")
            setCount(count + 1)
        } else if (select === "scissors" && computerSelect === "lizard") {
            setWin("başardın")
            setCount(count + 1)
        } else if (select === "paper" && computerSelect === "spock") {
            setWin("başardın")
            setCount(count + 1)
        } else if (select === "rock" && computerSelect === "scissors") {
            setWin("başardın")
            setCount(count + 1)
        } else if (select === "lizard" && computerSelect === "paper") {
            setWin("başardın")
            setCount(count + 1)
        } else if (select === "spock" && computerSelect === "rock") {
            setWin("başardın")
            setCount(count + 1)
        } else {
            setWin("başarısız")
            setCount(count)
        }
    }
    const playAgainClick = () => {
        setSPage(true)
        setComputerSelect(games[Math.floor(Math.random() * 5)].name)
    }
    const games = [
        { id: 1, name: "lizard", game: lizard },
        { id: 2, name: "paper", game: paper },
        { id: 3, name: "rock", game: rock },
        { id: 4, name: "scissors", game: scissors },
        { id: 5, name: "spock", game: spock },
    ]

    useEffect(() => {
        setComputerSelect(games[Math.floor(Math.random() * 5)].name)
    }, [])

    const data = {
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