import React, { Component } from 'react';
import WeatherCard from './WeatherCard';

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

  render() {
    return this.state.cards.map((card) => {
      if (card.type === 'card') {
        console.log('adding card...?')
        return <WeatherCard name={card.name} key={card.id} />
      } else if (card.type === 'entry') {
        return <p>This is an entry card!</p>
      } else {
        return <p>Card type error.</p>
      }
    })
  }
}

export default Weather;
