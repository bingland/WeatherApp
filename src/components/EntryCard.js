import React, { Component } from 'react'

export default class EntryCard extends Component {
    
    state = {
        value: "Type to change me!"
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    checkCity = (e) => {
        e.preventDefault()
        console.log('checking city....')

        const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + this.state.value + '&appid=58ee50dbbe686e7219635112c7593425'
        fetch(url)
        //check for 
        .then((res) => {
            if (res.ok) {
                console.log('valid! response is okkkkkk')

                //TODO: can't read property bind of undefined
                this.props.addCard(this.state.value)
                
            } else {
                throw "invalid response"
                // TODO: Tell the user that their query is invalid
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        return (
            <div className="wCard">
                <form onSubmit={this.checkCity}>
                    <h3>Add a location:</h3>
                    <input type="text" value={this.state.value} onChange={this.handleChange} /> 
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}
