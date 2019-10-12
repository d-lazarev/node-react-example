import React, { Component } from "react";
import BusRouteSearch from "./BusRouteSearch";
import BusRouteDisplay from "./BusRouteDisplay";

class BusRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = { routes: [], selectedRoute: {} };

    this.selectRoute = this.selectRoute.bind(this);
    this.resetRoute = this.resetRoute.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3001/schedule/getRoutes")
      .then(res => res.json())
      .then(res => this.setState({ routes: res.data }));
  }

  selectRoute(routeObj) {
    this.setState({ routes: this.state.routes, selectedRoute: routeObj });
  }

  resetRoute() {
    this.setState({ routes: this.state.routes, selectedRoute: {}});  
  }

  render() {
    const selectedRoute = this.state.selectedRoute;
    let display;

    if (selectedRoute.tag) {
      display = <BusRouteDisplay route={this.state.selectedRoute} resetRoute={this.resetRoute}/>;
    } else {
      display = <BusRouteSearch routes={this.state.routes} selectRoute={this.selectRoute} />;
    }

    return display;
  }
}

export default BusRoutes;
