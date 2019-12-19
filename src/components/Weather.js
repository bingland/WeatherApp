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

  addCard = (location) => {
    //replace the entry card with add card
    let newArr = this.state.cards.filter(card => card.type === 'card')
    let newCard = {
      type: 'card',
      name: location,
      id: this.state.cards.length
    }
    this.setState({
      cards: [...newArr, newCard]
    })
    console.log(this.state.cards)
  }

  addEntryCard = () => {
    // TODO: consider if you want the user to only be able to add one or multipe entry cards
    let newCard = {
      type: 'entry',
      id: this.state.cards.length + 1
    }
    let curCards = this.state.cards
    this.setState({
      cards: [...curCards, newCard]
    })
  } 

  delCard = (key) => {
    console.log('deleting card...')
    console.log(key)
  }

  render() {
    return this.state.cards.map((card) => {
      if (card.type === 'card') {
        console.log('adding card...?')
        return <WeatherCard name={card.name} key={card.id} delCard={this.delCard} />
      } else if (card.type === 'entry') {
        return <EntryCard key={card.id} addCard={this.addCard} delCard={this.delCard} />
      } else {
        return <p>Card type error.</p>
      }
    })
  }
}

export default Weather;
