import { useState } from "react"
import GameCard from "./GameCard"
import DevCards from "./DevCards";

function Display({games, onDeleteGame, onDeleteDev, onUpdateGames, devs}){
    const [displayFilter, setDisplayFilter] = useState("Games")
    

   return (
    <div>
        <select onChange={(e) => setDisplayFilter(e.target.value)}>
            <option>Games</option>
            <option>Devs</option>
        </select>

        {displayFilter === "Games" ? (
            <div>
                {games.map((game, i) => {
                return (
                    <GameCard
                        game={game} key={i} onDeleteGame={onDeleteGame} onUpdateGames={onUpdateGames}/>
                );
                })}
            </div>
            ) : (
            <div>
                {devs.map((dev, i) => {
                    return(
                    <DevCards 
                        dev={dev} key={i} onDeleteDev={onDeleteDev}/>
                    )
                })}
               
            </div>
            )
        }

    </div>   
        
    )
}



export default Display