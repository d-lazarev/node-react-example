import React, { Component } from "react";
import FilteredSearch from "./FilteredSearch";
import SelectedRoute from "./SelectedRoute";

class BusRouteSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };

    this.updateSearch = this.updateSearch.bind(this);
    this.selectRoute = this.selectRoute.bind(this);
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  selectRoute(routeObj) {
    this.setState({search: ''});
    this.props.selectRoute(routeObj);
  }

  render() {
    let display = "";

    if (this.state.search.length > 0) {
      display = (
        <FilteredSearch
          routes={this.props.routes}
          search={this.state.search}
          selectRoute={this.selectRoute}
        />
      );
    }

    return (
      <div id="RouteSearch">
        <SelectedRoute selectedRoute={this.props.selectedRoute} />
        <div className="route-search">
          <input
            id="BusRouteSearch"
            type="text"
            placeholder="Enter a Route Name or Number"
            value={this.state.search}
            onChange={this.updateSearch}
          />
          {display}
        </div>
      </div>
    );
  }
}

export default BusRouteSearch;
