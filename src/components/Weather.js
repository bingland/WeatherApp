import React, { Component } from 'react'
import WeatherCard from './WeatherCard'
import EntryCard from './EntryCard'

class Weather extends Component {
  
  state = {
    cards: [
      {
        type: 'card',
        name: 'Toronto',
        id: 1
      },
      {
        type: 'entry',
        id: 2
      }
    ]
  }

  locationExists = () => {
    console.log('function is being fired!!!!')
  }

  render() {
    return this.state.cards.map((card) => {
      if (card.type === 'card') {
        console.log('adding card...?')
        return <WeatherCard name={card.name} key={card.id} />
      } else if (card.type === 'entry') {
        return <EntryCard key={card.id} addCard={this.addCard} />
      } else {
        return <p>Card type error.</p>
      }
    })
  }
}

export default Weather;
