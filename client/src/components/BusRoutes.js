import React, { Component } from "react";
import BusRouteSearch from "./BusRouteSearch";
import WebService from "../service/WebService";
import SelectStop from "./SelectStop";

class BusRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = { routes: [], selectedRoute: {}, stops: [] };

    this.selectRoute = this.selectRoute.bind(this);
  }

  componentDidMount() {
    WebService.getRoutes().then(res => this.setState({ routes: res.data }));
  }

  selectRoute(routeObj) {
    this.setState({
      routes: this.state.routes,
      stops: this.state.stops,
      selectedRoute: routeObj
    });

    WebService.getStops(routeObj.tag).then(res =>
      this.setState({
        routes: this.state.routes,
        stops: res.data,
        selectedRoute: this.state.selectedRoute
      })
    );
  }

   render() {
    return (
      <div>
        <BusRouteSearch
          routes={this.state.routes}
          selectedRoute={this.state.selectedRoute}
          selectRoute={this.selectRoute}
        />

        <SelectStop stops={this.state.stops} route={this.state.selectedRoute} />
      </div>
    );
  }
}

export default BusRoutes;
