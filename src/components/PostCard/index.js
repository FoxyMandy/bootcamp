import React from 'react'
import './index.css'

const PostCard = ({ image, title, text }) => (
  <div className="col-12">
    <div className="card">
      <img className="card-img-top" src={image} />
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <span className="card-text">{text}</span>
      </div>
    </div>
  </div>
)

export default PostCard
