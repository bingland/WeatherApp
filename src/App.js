import React, { Component } from 'react';
import './App.css';
import './reset.css'
import Canvas from './components/Canvas'
import Weather from './components/Weather'

class App extends Component {

  state = {
    cards: {}
  }
  

  // !!!! You may possibly want to change the syntax of this fetch using async / await, and also assign it to info directly.
  // fetch("https://api.openweathermap.org/data/2.5/weather?id=6167865&appid=58ee50dbbe686e7219635112c7593425")
  // .then(response => {
  //   response.json().then(data => {
  //     info = data;
  //     console.log(data)
  //   })
  // })
  // .catch(err => {
  //   console.log(err);
  // });
  render () {
    return (
      <div className="App">
        
        <Canvas />

        <div className="interface">
          <Weather/>
        </div>
      </div>
    );
  }
}

export default App;
