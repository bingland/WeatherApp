import React from 'react';
import './App.css';
import Canvas from './components/Canvas'
import Weather from './components/Weather'

function App() {

  var info = {};

  async function fetchData () {
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?id=6167865&appid=58ee50dbbe686e7219635112c7593425");
    const data = await res.json();
    info = data;
    console.log(info)
    updateInfo()
  }

  function updateInfo () {

  }

  fetchData();
  

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

  return (
    <div className="App">
      <Canvas />
      <Weather data={info}/>
    </div>
  );
}

export default App;
