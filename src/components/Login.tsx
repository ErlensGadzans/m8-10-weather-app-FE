import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import axios from "axios";
import {} from "react-router-dom";

interface loginState {
  info: info;
}
interface info {
  email: String;
  password: String;
}
export class Login extends Component<any, loginState> {
  state = {
    info: {
      email: "",
      password: "",
    },
  };

  userHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.id === "email"
      ? this.setState({ info: { ...this.state.info, email: e.target.value } })
      : this.setState({
          info: { ...this.state.info, password: e.target.value },
        });
  };

login = async (e: any) => {
    e.preventDefault();
    const res = await axios("http://localhost:3077/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    if (res.status === 200) {
      localStorage.setItem("accessToken", res.data.accessToken);
      this.props.history.push("/");
    }
  };
  render() {
    return (
        <Container fluid id="signup-page-wrapper">
        <div className="signup-items">
          <a href="http://localhost:3077/users/googleLogin">
            {" "}
            <Button className="signup-btn google my-2">
              CONTINUE WITH GOOGLE
            </Button>
          </a>
        </div>
        <h6>OR</h6>
        <div className="form-inputs">
          <form className="form">
            <label>Email addess</label>
            <input
              className="form-input"
              id="email"
              name="email"
              type="email"
              placeholder="Email adress or username"
              onChange={this.userHandler} 
            />
            <br />
            <label>Password</label>
            <input
              className="form-input"
              id="password"
              name="password"
              type="password"
              placeholder="*********"
              onChange={this.userHandler}
            />
            <br />
         
            <div className="submit-btn">
              <input type="checkbox" id="checkbox" className="my-auto" />        
              <input
                className="form-input-submit"
                type="submit"
                value="LOG IN"
                onClick={this.login}
              />
            </div>
          </form>
        </div>
      </Container>
    );
  }
}

export default Login;
