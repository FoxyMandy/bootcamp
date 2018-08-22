import React, { Component } from 'react'

class LightBox extends Component {
  render() {
    return (
      <div
        id="lightbox"
        className="modal show"
        onClick={this.props.handleClickOutside}
      >
        {this.props.children}
      </div>
    )
  }
}

export default LightBox
