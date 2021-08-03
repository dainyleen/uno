import React, { Component } from 'react'

import Header from './Header'
import Player from './Player'

class App extends Component {
  state = {
    players: [
      {
        name: "Mirris",
        score: 0,
        id: 1
      },
      {
        name: "Marion",
        score: 0,
        id: 2
      },
      {
        name: "Makapi",
        score: 0,
        id: 3
      },
      {
        name: "Mario",
        score: 0,
        id: 4
      }
    ]
  }

  handleScoreChange = (index, num) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += num
    }))
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      }
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}           
          />
        )}
      </div>
    )
  }
}

export default App
