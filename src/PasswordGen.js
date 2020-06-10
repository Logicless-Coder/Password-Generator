import React, { Component } from "react";
import Slider from "react-input-slider";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./PasswordGen.css";

import { FaRegCopy } from "react-icons/fa";

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
      copySuccess: false,
    };
  }

  generatePassword = () => {
    var allowedChars = [];
    if (this.state.lower) {
      for (let i = 97; i < 123; i++) {
        allowedChars.push(String.fromCharCode(i));
      }
    }
    if (this.state.upper) {
      for (let i = 65; i < 91; i++) {
        allowedChars.push(String.fromCharCode(i));
      }
    }
    if (this.state.digits) {
      for (let i = 48; i < 58; i++) {
        allowedChars.push(String.fromCharCode(i));
      }
    }
    if (this.state.symbols) {
      for (let i = 33; i < 48; i++) {
        allowedChars.push(String.fromCharCode(i));
      }
      for (let i = 58; i < 65; i++) {
        allowedChars.push(String.fromCharCode(i));
      }
    }

    console.log(allowedChars);
    var generatedPassword = "";
    for (let l = 0; l < this.state.length; l++) {
      var r = Math.floor(Math.random() * allowedChars.length);
      generatedPassword += allowedChars[r];
    }

    console.log(generatedPassword);
    this.setState({
      pwd: generatedPassword,
    });
  };

  handleChange = (event) => {
    var labl = event.target.name;
    if (labl === "lower") {
      this.setState({
        lower: !this.state.lower,
      });
    }
    if (labl === "upper") {
      this.setState({
        upper: !this.state.upper,
      });
    }
    if (labl === "digits") {
      this.setState({
        digits: !this.state.digits,
      });
    }
    if (labl === "symbols") {
      this.setState({
        symbols: !this.state.symbols,
      });
    }
  };

  render() {
    return (
      <div className="main">
        <h1 className="header">Generate a strong Password</h1>
        <div className="pwd-gen">
          <div className="pwd-display">
            <input
              className="pwd-field"
              type="text"
              placeholder="Generated password will be shown here"
              value={this.state.pwd}
            />
            <CopyToClipboard
              text={this.state.pwd}
              className="copy-button"
              onCopy={() => this.setState({ copySuccess: true })}
            >
              <button>
                <FaRegCopy />
              </button>
            </CopyToClipboard>
            <div className="copy-message">
              {this.state.copySuccess ? (
                <span style={{ border: "2px solid #2f3542" }}>Copied.</span>
              ) : null}
            </div>
          </div>
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
