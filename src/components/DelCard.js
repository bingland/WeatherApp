import React, { Component } from 'react'

export default class DelCard extends Component {
    render() {
        return (
            <div>
                <button className="delButton" onClick={this.props.delCard}>X</button>
            </div>
        )
    }
}
