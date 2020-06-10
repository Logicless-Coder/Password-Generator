import React, { Component } from "react";
import Slider from "react-input-slider";
import "./PasswordGen.css";

class PasswordGen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pwd: "",
      length: 12,
      lower: true,
      upper: true,
      digits: true,
      symbols: true,
    };
  }

  generatePassword = () => {
    var allowedChars = [];
    if (this.state.lower) {
      for (let i = 97; i < 123; i++) {
        allowedChars.push(String.fromCharCode(i));
      }
    }

    console.log(allowedChars);
  };

  handleChange = (event) => {
    switch (event.target.name) {
      case "lower":
        this.setState({
          lower: !this.state.lower,
        });
        break;
      case "upper":
        this.setState({
          upper: !this.state.upper,
        });
        break;
      case "digits":
        this.setState({
          digits: !this.state.digits,
        });
        break;
      case "symbols":
        this.setState({
          symbols: !this.state.symbols,
        });
        break;
    }
  };

  render() {
    return (
      <div className="main">
        <h1 className="header">Generate a strong Password</h1>
        <div className="pwd-gen">
          <input
            className="pwd-field"
            type="text"
            placeholder="Generated password will be shown here"
            value={this.state.pwd}
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
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox"
                name="lower"
                onClick={this.handleChange}
                checked={this.state.lower}
              />
              a - z
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox"
                name="upper"
                onClick={this.handleChange}
                checked={this.state.upper}
              />
              A - Z
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox"
                name="digits"
                onClick={this.handleChange}
                checked={this.state.digits}
              />
              0 - 9
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox"
                name="symbols"
                onClick={this.handleChange}
                checked={this.state.symbols}
              />
              Symbols
            </label>
          </div>
          <div className="button-box">
            <button onClick={this.generatePassword} className="generate-button">
              Generate
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PasswordGen;
