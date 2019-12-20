import React, { Component } from 'react';
import DelCard from './DelCard'

class WeatherCard extends Component {
  
  state = {
    loaded: false,
    valid: true
  }

  timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min ;
    return time;
  }



  // ! FIX THIS!!!!!!!


  currentTime = (offset) => {
    // create Date object for current location
    var d = new Date();

    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    console.log(utc)

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));

    // return time as a string
    return nd.toLocaleString();
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
            data: data,
            loaded: true,
            name: data.name,
            time: this.currentTime(data.timezone),
            temperature: data.main.temp,
            feelsLike: data.main.feels_like,
            high: data.main.temp_max,
            low: data.main.temp_min,
            weather: data.weather[0].main,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            country: data.sys.country,
            sunrise: this.timeConverter(data.sys.sunrise),
            sunset: this.timeConverter(data.sys.sunset)
            //name, temperature, feelsLike, high, low, weather, description, icon, country, sunrise, sunset
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
        this.state.loaded ? (
            //loaded
            this.state.valid ? (
                //valid query
                // * OUTPUT DATA * 
                //name, temperature, feelsLike, high, low, weather, description, icon, country, sunrise, sunset
                <div className="cardContent">
                    <DelCard delCard={this.props.delCard.bind(this, this.props.id)} />
                    <h1>{this.state.name}</h1>
                    <h2>Country: {this.state.country}</h2>
                    <img src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt="weather icon" />
                    <h1>{this.state.temperature}</h1>
                    <h2>{this.state.description}</h2>
                    <h3>Feels like: {this.state.feelsLike}</h3>
                    <h3>High: {this.state.high}</h3>
                    <h3>Low: {this.state.low}</h3>
                    <h3>Sunrise: {this.state.sunrise}</h3>
                    <h3>Sunset: {this.state.sunset}</h3>
                </div>
            ) : (
                //invalid query
                <div>Invalid Name!</div>
            )
        ) : (
            // unloaded 
            <div>loading...</div>
        )
    )
  }
}

export default WeatherCard;
