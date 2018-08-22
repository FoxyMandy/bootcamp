import React, { Component } from "react";
import Posts from "../Posts";
import UserList from "../UserList";
import Header from "../Header";
import PostModal from "../PostModal";
import LightBox from "../LightBox";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };

    props.validateToken();
  }

  componentDidUpdate = () => {
    const { loginReducer } = this.props;

    if (!loginReducer.isLogged) {
      this.props.history.push("/login");
    }
  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleClickOutside = event => {
    if (event.target.id === "lightbox") {
      this.setState({ isModalOpen: false });
    }
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div className="container">
        <Header handleOpenModal={this.handleOpenModal} />
        <div className="row mt-5 mx-auto">
          <div className="col-8">
            <Posts />
          </div>
          <div className="col-4">
            <UserList />
          </div>
        </div>
        {console.log(this)}
        {isModalOpen ? (
          <LightBox handleClickOutside={this.handleClickOutside}>
            <PostModal handleCloseModal={this.handleCloseModal} />
          </LightBox>
        ) : null}
      </div>
    );
  }
}

export default Home;
