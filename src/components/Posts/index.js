import React, { Component } from "react";
import PostCard from "../PostCard";
import image from "../../media/image-placeholder.svg";

class Posts extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <PostCard text="some text" title="some title" image={image} />
          <PostCard text="textextextext" title="title" image={image} />
          <PostCard image={image} />
        </div>
      </div>
    );
  }
}

export default Posts;
