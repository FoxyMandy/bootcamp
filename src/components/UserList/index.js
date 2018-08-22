import React, { Component } from "react";
import UserCard from "../UserCard";
import "./index.css"

class UserList extends Component {
  render() {
    return (
      <div className="user-list-wrapper">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    );
  }
}

export default UserList;
