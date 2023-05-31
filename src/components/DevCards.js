import React from "react";

function DevCards({dev, onDeleteDev}){
    const gamesMade = dev.games

    function handleDelete(e, dev){
        fetch(`http://localhost:3001/developers/${dev.id}`,{
            method: "DELETE",
        })
        .then((r)=> r.json())
        .then(() => onDeleteDev(dev))
    }


    return(
        <div id="dev_cards">
            {/* <button onClick={(e) => handleDelete(e, dev)}>x</button> */}
            <h1>{dev.developer}</h1>
            <ul>
                {gamesMade.map((game, i) =>(
                    <li key={i}>{game.name}: {game.genre}</li>
                ))}
            </ul>
        </div>
    )
}

export default DevCards