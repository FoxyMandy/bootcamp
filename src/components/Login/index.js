import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleLogin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password).then(() => {
      if (this.props.loginReducer.isLogged) {
        this.props.history.push("/");
      }
    });
  };

  render() {
    return (
      <section className="container">
        <form className="w-50 mx-auto mt-5">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={this.onChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleLogin}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Login;
