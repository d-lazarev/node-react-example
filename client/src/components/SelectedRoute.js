import React, { Component } from "react";

class SelectedRoute extends Component {
  render() {
      const route = this.props.selectedRoute.title || "";
    return (
      <div className="selected-route">
        <p>{route}</p>
      </div>
    );
  }
}

export default SelectedRoute;