import "./App.css";
import React, { Component } from "react";
import Profile from "./Profile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "bolbol rayana",
      bio: "jgezgjrl jezmgj",
      imgSrc: "/couv.JPG",
      profession: "footballer",
      toggle: false,
    };
  }
  hideShow = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <div>
        {this.state.toggle ? (
          <>
            <Profile
              fullName={this.state.fullName}
              imgSrc={this.state.imgSrc}
              bio={this.state.bio}
              profession={this.state.profession}
            />
          </>
        ) : (
          <></>
        )}

        <button onClick={this.hideShow}>
          {this.state.toggle ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}
export default App;
