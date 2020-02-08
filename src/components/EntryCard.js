import React, { Component } from 'react'
import DelCard from './DelCard'
import { getCountryName } from './utils/convertCountry'


export default class EntryCard extends Component {

    state = {
        value: ""
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

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

    checkCity = (e) => {
        e.preventDefault()
        console.log('checking city....')

        const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + this.state.value + '&units=imperial&appid=58ee50dbbe686e7219635112c7593425'
        fetch(url)
        //check for 
        .then((res) => {
            if (res.ok) {
                console.log('valid! response is okkkkkk')
                return res.json()
                
            } else {
                throw "invalid response"
                // TODO: Tell the user that their query is invalid
                return res.json()
            }
        })
        .then((data) => {
            console.log(data)
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
            //name, country, icon, temperature, description, feelsLike, high, low, sunrise, sunset, id
            this.props.addCard(this.state.name, this.state.country, this.state.icon, this.state.temperature, this.state.description, this.state.feelsLike, this.state.high, this.state.low, this.state.sunrise, this.state.sunset, this.props.id)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        return (
            <div className="cardContent">
                <DelCard delCard={this.props.delCard.bind(this, this.props.id)} />
                <form onSubmit={this.checkCity}>
                    <h3>Add a location:</h3>
                    <input type="text" placeholder="Search for a city!" value={this.state.value} onChange={this.handleChange} /><br /> 
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}
