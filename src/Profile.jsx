import React, { Component } from "react";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      sec: 0,
      timer: () =>
        setInterval(() => {
          this.setState({
            min: this.state.sec === 59 ? this.state.min + 1 : this.state.min,
            sec: this.state.sec === 59 ? 0 : this.state.sec + 1,
          });
        }, 1000),
    };
    this.timing = 0;
  }
  componentDidMount() {
    this.timing = this.state.timer();
  }
  componentWillUnmount() {
    clearInterval(this.timing);
  }

  render() {
    return (
      <div className="card">
        <p>
          {" "}
          {this.state.min} : {this.state.sec}
        </p>

        <img src={this.props.imgSrc} alt="Avatar" className="img" />
        <div className="container">
          <h4>
            <b>{this.props.fullName}</b>
          </h4>
          <h5>{this.props.profession}</h5>
          <p>{this.props.bio}</p>
        </div>
      </div>
    );
  }
}
