import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import NavBar from "./components/NavBar"
import Display from "./components/Display";
import { useState, useEffect } from "react";

function App() {
  const [games, setGames] = useState([])
  const [devs, setDevs] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3001/games")
        .then((r) => r.json())
        .then((games) => setGames(games))
    }, [])

    useEffect(()=>{
      fetch("http://localhost:3001/developers")
          .then((r) => r.json())
          .then((devs) => setDevs(devs))
      }, [games])

  function onAddGame(newGame){
    setGames([...games, newGame])
  }

  function onAddDev(newDev){
    setDevs([...devs, newDev])
  }

  // useEffect(() => {
  //   console.log("games has been updated")
  // }, [games])

  function onDeleteGame(deletedGame) {
    setGames((prevGames) => prevGames.filter((game) => game.id !== deletedGame.id));
  }

  function onDeleteDev(deletedDev) {
    setDevs((prevDevs) => prevDevs.filter((dev) => dev.id !== deletedDev.id));
  }

  function onUpdateGames(updatedGame) {
    setGames((prevGames) => {
      const updatedGames = prevGames.map((game) =>
        game.id === updatedGame.id ? updatedGame : game
      );
      return updatedGames;
    });
  }
  
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home onAddGame={onAddGame} onAddDev={onAddDev}/>}/>
        <Route exact path="/display" element={<Display games={games} devs={devs} onDeleteGame={onDeleteGame} onDeleteDev={onDeleteDev} onUpdateGames={onUpdateGames}/>}/>
      </Routes>
    </div>
  );
}

export default App;