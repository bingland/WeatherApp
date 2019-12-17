import React, { Component } from 'react';

class WeatherCard extends Component {
  
  state = {
    loaded: false,
    valid: true
  }

  getWeather = () => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + this.props.name + '&appid=58ee50dbbe686e7219635112c7593425'
    fetch(url)
    //check for 
    .then((res) => {
        if (res.ok) {
            console.log('valid! response is ok')
            this.setState({
                valid: true
            })
            return res.json()
        } else {
            this.setState({
                valid: false
            })
            console.log('response not valid')
            return res.json()
        }
    })
    .then((data) => {
      this.setState({
          // * SET MAIN VALUES *
          name: data.name,
          temp: data.main.temp,
          loaded: true
      })
      console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
    
  }

  componentDidMount() {
      this.getWeather()
  }

  render() {
    
    return (
        <div className="wCard">
            {this.state.loaded ? (
                //loaded
                this.state.valid ? (
                    //valid query
                    // * OUTPUT DATA * 
                    <h1>{this.state.name}</h1>,
                    <h2>{this.state.temp}</h2>
                ) : (
                    //invalid query
                    <div>Invalid Name!</div>
                )
            ) : (
                // unloaded 
                <div>loading...</div>
            )}
        </div>
    )
  }
}

export default WeatherCard;
