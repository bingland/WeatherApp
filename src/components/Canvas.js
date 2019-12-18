import React from 'react';

class Canvas extends React.Component {
  componentDidMount() {
    // const canvas = this.refs.canvas
    // const ctx = canvas.getContext("2d")
  }

  render() {
    return(
      <div>
        <canvas ref="canvas" width={window.innerWidth} height={window.innerHeight} style={canvasStyle} />
      </div>
    )
  }
}

const canvasStyle = {
  border: "1px solid black",
  display: 'none',
  padding: '0',
  margin: '0'
}


export default Canvas