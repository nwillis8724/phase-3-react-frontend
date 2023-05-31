import React, { useState } from "react"

function Home({onAddGame, onAddDev}){
    const [gameName, setGameName] = useState("")
    const [genre, setGenre] = useState("")
    const [developer, setDeveloper] = useState("")
    const [price, setPrice] = useState("")
    const [devName, setDevName] = useState("")

    function handleGameSubmit(e){
        e.preventDefault()

        const newGame = {
            name: gameName,
            genre: genre,
            developer: developer,
            price: price
        }

        fetch("http://localhost:3001/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newGame)
        })
        .then((r) => r.json())
        .then((newGame) => onAddGame(newGame))

        setGameName("")
        setGenre("")
        setDeveloper("")
        setPrice("")
    }

    function handleDevSubmit(e){
        e.preventDefault()

        const newDev = {
            developer: devName
        }
        console.log(newDev)

        fetch("http://localhost:3001/developers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newDev)
        })
        .then((r) => r.json())
        .then((newDev) => onAddDev(newDev))

        setDevName("")
    }



    return (
        <div>
          <h1>New Game</h1>
            <div className="upload_form">
                <form onSubmit={handleGameSubmit}>
                    <h2>Add a Game</h2>
                    <input  value={gameName} onChange={(e)=> setGameName(e.target.value)} placeholder="Game Name"></input>
                    <input  value={genre} onChange={(e)=> setGenre(e.target.value)} placeholder="Genre"></input>
                    <input  value={developer} onChange={(e)=> setDeveloper(e.target.value)} placeholder="Developer"></input>
                    <input  value={price} onChange={(e)=> setPrice(e.target.value)} placeholder="Price (Number Only)"></input>
                    <button id="submit_button">Submit</button>
                </form>
            </div>
            <div className="upload_form" id="dev_upload_form">
                <form onSubmit={handleDevSubmit}>
                    <h2>Add a Dev</h2>
                    <input  value={devName} onChange={(e)=> setDevName(e.target.value)} placeholder="Dev Name"></input>
                    <button id="submit_button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Home