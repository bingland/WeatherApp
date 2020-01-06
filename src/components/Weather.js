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

  addCard = (location, theid) => {
    //replace the entry card with add card
    // ! FIX DUPLICATION BUG
    console.log(theid)
    let newArr = this.state.cards
    let newCard = {
      type: 'card',
      name: location,
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
    // TODO: take the information from the cards and dont call the API
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

    return this.state.cards.map((card) => {
      if (card.type === 'card') {
        return <div className="wCard weatherCard" onClick={this.activateCard}><WeatherCard name={card.name} key={card.id} id={card.id} delCard={this.delCard} /></div>
      } else if (card.type === 'entry') {
        return <div className="wCard entryCard" onClick={this.activateCard}><EntryCard key={card.id} id={card.id} addCard={this.addCard} delCard={this.delCard} /></div>
      } else {
        return <p>Card type error.</p>
      }
    })
  }
}

export default Weather;
