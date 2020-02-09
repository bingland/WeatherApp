import React, { Component } from 'react'
import WeatherCard from './WeatherCard'
import EntryCard from './EntryCard'

class Weather extends Component {

  state = {
    cards: [
      {
        type: 'entry',
        id: 1
      }
    ]
  }

            //name, country, icon, temperature, description, feelsLike, high, low, sunrise, sunset, id
  addCard = (name, country, icon, temperature, description, feelsLike, high, low, sunrise, sunset, theid) => {
    //replace the entry card with add card
    console.log(`${name} ${country} ${icon} ${temperature} ${description} ${feelsLike} ${high} ${low} ${sunrise} ${sunset} ${theid} `)
    let newArr = this.state.cards
    let newCard = {
      type: 'card',
      name: name,
      country: country,
      icon: icon,
      temperature: temperature,
      description: description,
      feelsLike: feelsLike,
      high: high,
      low: low,
      sunrise: sunrise,
      sunset: sunset,
      id: theid
    }
    newArr.splice((theid-1), 1, newCard)
    this.setState({
      cards: newArr
    })
  }

  addEntryCard = () => {
    // TODO: consider if you want the user to only be able to add one or multipe entry cards
    let newCard = {
      type: 'entry',
      id: this.state.cards.length + 1
    }
    console.log('newcard id is ' + newCard.id)
    let curCards = this.state.cards
    this.setState({
      cards: [...curCards, newCard]
    })
  } 

  delCard = (id) => {
    console.log('deleting card' + id)
    this.setState({
      cards: [...this.state.cards.filter(card => card.id !== id)]
    }, this.adjustIds)
  }

  adjustIds = () => {
    // * adjust all of the id's since cards got deleted
    this.setState({
      cards: this.state.cards.map((card, index) => {
        if (card.id !== index + 1) {
          card.id = index + 1
        }
        return card
      })
    })
  }

  activateCard = (e) => {
    if(e.target.classList.contains('wCard') && !e.target.classList.contains('activatedCard')) {
      e.target.classList.add('activatedCard')
    } else if (e.target.classList.contains('wCard') && e.target.classList.contains('activatedCard')) {
      e.target.classList.remove('activatedCard')
    }
    
  }

  render() {
    //name, country, icon, temperature, description, feelsLike, high, low, sunrise, sunset, id
    return this.state.cards.map((card) => {
      if (card.type === 'card') {
        return <div className="wCard weatherCard" onClick={this.activateCard}><WeatherCard name={card.name} country={card.country} icon={card.icon} temperature={card.temperature} description={card.description} feelsLike={card.feelsLike} high={card.high} low={card.low} sunrise={card.sunrise} sunset={card.sunset} key={card.id} id={card.id} delCard={this.delCard} /></div>
      } else if (card.type === 'entry') {
        return <div className="wCard entryCard" onClick={this.activateCard}><EntryCard key={card.id} id={card.id} addCard={this.addCard} delCard={this.delCard} /></div>
      } else {
        return <p>Card type error.</p>
      }
    })
  }
}

export default Weather;
