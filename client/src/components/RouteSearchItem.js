import React, { Component } from "react";

class RouteSearchItem extends Component {
  constructor(props) {
    super(props);

    this.selectRoute = this.selectRoute.bind(this);
  }

  selectRoute() {
    this.props.selectRoute(this.props.route);
  }

  render() {
      const theClass= `route-button ${this.props.displayClass}`;

    return (
        <li className={theClass} onClick={this.selectRoute}>{this.props.route.title}</li>
    );
  }
}

export default RouteSearchItem;
