import React from 'react';
import './App.css';
import Canvas from './components/Canvas'
import Weather from './components/Weather'

function App() {

    fetch("https://api.openweathermap.org/data/2.5/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&q=London%252Cuk&APPID=58ee50dbbe686e7219635112c7593425", {
    "method": "GET"
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });

  return (
    <div className="App">
      <Canvas />
      <Weather />
    </div>
  );
}

export default App;
