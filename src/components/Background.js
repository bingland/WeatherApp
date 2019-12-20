import React from 'react';

class Background extends React.Component {
  componentDidMount() {
    // const canvas = this.refs.canvas
    // const ctx = canvas.getContext("2d")
  }

  render() {
    return(
      <div className="background">
        <video width="100%" autoPlay loop muted>
          <source src={require('../video/rain.mp4')} type="video/mp4" />
        </video>
      </div>
    )
  }
}


export default Background