import React from 'react';

class Canvas extends React.Component {
    componentDidMount() {
      const canvas = this.refs.canvas
      const ctx = canvas.getContext("2d")
    }

    render() {
        const canvasStyle = {
            border: "1px solid black"
        }
      return(
        <canvas ref="canvas" width={640} height={425} style={canvasStyle} />
      )
    }
  }
  export default Canvas