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
  
  // TODO: fix this
  /*
  onWheel = (e) => {
    if (e.deltaY > 0) document.querySelector('.interface').scrollLeft += 100;
    else document.querySelector('.interface').scrollLeft -= 100;
  }
  */ // there is an onWheel listener for components in react
  
  render () {
    return (
      <div className="App">

        <Background />

        <div className="interface">
          <Weather ref={this.child} />
          <button className="addButton" onClick={this.onClick}>+</button>
        </div>
      </div>
    );
  }
}

export default App;
