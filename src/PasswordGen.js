import React, { Component } from "react";
import Slider from "react-input-slider";
import "./PasswordGen.css";

class PasswordGen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pwd: "",
      length: 1,
    };
  }

  render() {
    return (
      <div className="main">
        <h1 className="header">Generate a strong Password</h1>
        <div className="pwd-gen">
          <input
            className="pwd-field"
            type="text"
            placeholder="Generated password will be shown here"
          />
          <div className="slider-box">
            <label className="length-label">{this.state.length}</label>
            <Slider
              className="slider"
              axis="x"
              xstep={1}
              xmin={1}
              xmax={20}
              x={this.state.length}
              onChange={({ x }) => this.setState({ length: parseInt(x) })}
              styles={{
                track: {
                  backgroundColor: "rgba(163, 203, 56, 0.5)",
                  width: 200,
                  height: 20,
                },
                active: {
                  backgroundColor: "rgba(0, 148, 50,1.0)",
                },
              }}
            />
          </div>
          <div className="conditions">
            <input type="checkbox" text="a-z" />
          </div>
        </div>
      </div>
    );
  }
}

export default PasswordGen;
