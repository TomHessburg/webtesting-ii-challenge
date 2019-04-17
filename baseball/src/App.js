import React, { Component } from 'react';
import './App.css';

import Display from './components/Display.js';
import Dashboard from './components/Dashboard.js';

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
    fouls: 0,
    hits: 0
  }

  render() {
    return (
      <div className="App">
        <Display 
        balls={this.state.balls} 
        strikes={this.state.strikes}
        fouls={this.state.fouls}
        hits={this.state.hits}
        />

        <Dashboard
        addBall={this.addBall}
        addStrike={this.addStrike}
        addFoul={this.addFoul}
        addHit={this.addHit}
        />
      </div>
    );
  }

  addBall = () => {
    if(this.state.balls < 3 ){
      this.setState({
        balls: this.state.balls + 1
      })
    }else{
      this.setState({
        balls: 0,
        strikes: 0,
        fouls: 0
      })
    }
  }

  addStrike = () => {
    if(this.state.strikes < 2 ){
      this.setState({
        strikes: this.state.strikes + 1
      })
    }else{
      this.setState({
        balls: 0,
        strikes: 0,
        fouls: 0
      })
    }
  }

  addFoul = () => {
    if(this.state.fouls < 2 && this.state.strikes < 2){
      this.setState({
        fouls: this.state.fouls + 1,
        strikes: this.state.strikes + 1
      })
    }
  }

  addHit = () => {
    this.setState({
      balls: 0,
      strikes: 0,
      fouls: 0,
      hits: this.state.hits + 1
    })
  }


}

export default App;
