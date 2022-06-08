import React, { Component } from "react";
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center p-4">
        {/* <img src={loading} alt="loading" /> */}
        <h4>loading...</h4>
      </div>
    );
  }
}

export default Spinner;
