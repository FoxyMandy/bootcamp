import React, { Component } from 'react'
import logo from '../../media/image-placeholder.svg'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="row">
          <div className="col-md-2">
            <img className="header-image" src={logo} />
            <span className="pull-right"> headline </span>
          </div>
          <div className="col-md-10">
            <div className="header-buttons">
              <button
                className="btn btn-primary"
                onClick={this.props.handleOpenModal}
              >
                create post
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
