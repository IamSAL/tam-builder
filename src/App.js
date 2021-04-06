import './App.css';
import { useState, useEffect } from 'react';
import { faCoffee, faCheckSquare, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Player from './Components/Player';
import Miniplayer from './Components/Miniplayer';
function App() {
  const [players, setplayers] = useState([])
  const [addedPlayers, setaddedPlayers] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/players').then(players => players.json())
      .then(players => {
        fetch('https://pixabay.com/api/?key=12617866-353df764ac1ec00c201df9a4c&image_type=photo&category=sports&q=player&per_page=150').then(data => data.json()).then((images) => {
          let imagesRand = images.hits.map(image => image.webformatURL)
          players.map((player, idx) => Object.assign(player, { image: imagesRand[idx] }))
          setplayers(players)
        }).catch(e => console.log(e.message))
      }
      )

    return () => {

    }
  }, [])

  const handleAdd = (e, player) => {
    setaddedPlayers(addedPlayers => [...addedPlayers, player])
    setplayers(players => players.filter(currentPlayer => currentPlayer != player))
  }
  const handleRemove = (e, player) => {
    setaddedPlayers(players => players.filter(currentPlayer => currentPlayer != player))
    setplayers(Players => [player, ...Players])
  }



  return (
    <div className="App">

      <div className="container ">
        <div className="main row">
          <div className="col-8">
            <div className="hero top">
              <h5>Available Players:{players.length}</h5>
            </div>
            <div className="players scroll">
              {
                players.map(player => {
                  return <Player player={player} kye={player.id} handleAdd={handleAdd}></Player>
                })
              }

            </div>
          </div>
          <div className="added-players col-4">
            <div className="hero">
              <h5>Added Players: {addedPlayers.length}</h5>
            </div>
            <div className="scroll">
              {
                addedPlayers.map(player => {
                  return <Miniplayer player={player} kye={player.id} handleRemove={handleRemove}></Miniplayer>
                })
              }
            </div>
            <div className="hero bottom">
              <h5>Cost: {addedPlayers.reduce((cost, player) => cost + player.salary, 0)} BDT</h5>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default App;
