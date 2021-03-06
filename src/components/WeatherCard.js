import React, { Component } from 'react';
import DelCard from './DelCard'
import { getCountryName } from './utils/convertCountry'

class WeatherCard extends Component {

    /*
  timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    //var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    //var year = a.getFullYear();
    //var month = months[a.getMonth()];
    //var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    // modify these values to adjust to what you need
    var time = hour + ':' + min ;
    return time;
  }
  */

  /*
  getWeather = () => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + this.props.name + '&units=imperial&appid=58ee50dbbe686e7219635112c7593425'
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
            temperature: data.main.temp,
            feelsLike: data.main.feels_like,
            high: data.main.temp_max,
            low: data.main.temp_min,
            weather: data.weather[0].main,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            country: getCountryName(data.sys.country),
            sunrise: this.timeConverter(data.sys.sunrise),
            sunset: this.timeConverter(data.sys.sunset)
            //name, country, icon, temperature, description, feelsLike, high, low, sunrise, sunset
        })
    })
    .catch(error => {
        console.log(error)
    })
    
  }
  */
  /*
  componentDidMount() {
      this.getWeather()
  }
  */

  render() {

    return (
        //valid query
        // * OUTPUT DATA * 
        //name, country, icon, temperature, description, feelsLike, high, low, sunrise, sunset
        <div className="cardContent">
            <DelCard delCard={this.props.delCard.bind(this, this.props.id)} />
            <h1>{this.props.name}</h1>
            <h2>{this.props.country}</h2>
            <img src={require(`../icons/custom/${this.props.icon}.svg`)} alt="weather icon" />
            <h1 className="temph1">{Math.round(this.props.temperature)}&#176;</h1>
            <h2 style={{textTransform: 'capitalize'}}>{this.props.description}</h2>
            <h3>Feels like: {Math.round(this.props.feelsLike)}&#176;</h3>
            <h3><div className="split">High: {Math.round(this.props.high)}&#176;</div><div className="split">Low: {Math.round(this.props.low)}&#176;</div></h3>
            <h3>Sunrise: {this.props.sunrise}</h3>
            <h3>Sunset: {this.props.sunset}</h3>
        </div>
        
    )
  }
}

export default WeatherCard;
