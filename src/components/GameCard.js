//functionality of the cards within this component
//value can be linked to the state
//state can start as game.whatever
import React, { useState } from "react"


function GameCard({game, onDeleteGame, onUpdateGames}){
    const [selectedGame, setSelectedGame] = useState(true)
    const [gameName, setGameName] = useState(game.name)
    const [genre, setGenre] = useState(game.genre)
    const [developer, setDeveloper] = useState(game.developer.developer)
    const [price, setPrice] = useState(game.price)

    function handleDelete(e, game){
        fetch(`http://localhost:3001/games/${game.id}`,{
            method: "DELETE",
        })
        .then((r)=> r.json())
        .then(() => onDeleteGame(game))
    }

    function startEdit(game){
        setSelectedGame(game);
    }

    function closeEdit(){
        setSelectedGame(null)
    }

    function handleSave(e, game){
        e.preventDefault()
        console.log(game.id)

        const updatedGame = {
            name: gameName,
            genre: genre,
            developer: developer,
            price: price
        };

        fetch(`http://localhost:3001/games/${game.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedGame)
        })
        .then((r)=> r.json())
        .then((updatedGame) => onUpdateGames(updatedGame))

        setSelectedGame(!selectedGame)
    }

    

    return (
        <div id="game_cards">
                        <button onClick={(e) => handleDelete(e, game)}>x</button>
                        {selectedGame === game ? (
                            <button onClick={(e) => closeEdit()}>✓</button>
                        ) : (
                            <button onClick={(e) => startEdit(game)}>✎</button>
                        )}

                        {selectedGame === game ? (
                            <form onSubmit={(e) => handleSave(e, game)}>
                                <input className="edit_form" value={gameName} onChange={(e) => setGameName(e.target.value)} id="name"></input>
                                <input className="edit_form" value={genre} onChange={(e) => setGenre(e.target.value)} id="genre"></input>
                                <input className="edit_form" value={developer} onChange={(e) => setDeveloper(e.target.value)} id="developer"></input>
                                <input className="edit_form" value={price} onChange={(e) => setPrice(e.target.value)} id="price"></input>
                                <button id="confirm_button">Confirm</button>
                            </form>
                        ) : (
                    <>
                        <h1>{game.name}</h1>
                        <p>{game.genre}</p>
                        <p>Developer: {game.developer.developer}</p>
                        <p>Price: ${game.price}</p>
                    </>
                        )}
                    </div>
    )

}

export default GameCard 