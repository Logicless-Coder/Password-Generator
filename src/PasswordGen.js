import React, { Component } from "react";

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
      <div>
        <input
          type="text"
          placeholder="Generated password will be shown here"
        />
      </div>
    );
  }
}

export default PasswordGen;
