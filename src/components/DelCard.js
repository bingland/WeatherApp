import React, { Component } from 'react'

export default class DelCard extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.delCard}>Delete Me!</button>
            </div>
        )
    }
}
