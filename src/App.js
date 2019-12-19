import React, { Component } from 'react';
import './App.css';
import './reset.css'
import Background from './components/Background'
import Weather from './components/Weather'

class App extends Component {

  constructor(props) {
    super(props)
    this.child = React.createRef()
  }

  state = {
    cards: {}
  }

  onClick = () => {
    this.child.current.addEntryCard()
  }
  
  render () {
    return (
      <div className="App">

        <Background />

        <div className="interface">
          <Weather ref={this.child}/>
          <button className="addButton" onClick={this.onClick}>+</button>
        </div>
      </div>
    );
  }
}

export default App;
