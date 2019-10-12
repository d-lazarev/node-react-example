import React, { Component } from "react";
import SelectStop from "./SelectStop";

class BusRouteDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { stops: [] };
    this.resetRoute = this.resetRoute.bind(this);
  }

  resetRoute() {
    this.props.resetRoute();
  }

  render() {
    return (
      <div className="selected-route">
        <p>
          {this.props.route.title}
        </p>
          <button onClick={this.resetRoute}>Back to Search</button>
        <SelectStop route={this.props.route} />
      </div>
    );
  }
}

export default BusRouteDisplay;
