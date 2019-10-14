import React, { Component } from "react";
import FilteredSearch from "./FilteredSearch";
import SelectedRoute from "./SelectedRoute";
import ModalRouteList from "./ModalRouteList";

class BusRouteSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };

    this.updateSearch = this.updateSearch.bind(this);
    this.selectRoute = this.selectRoute.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  selectRoute(routeObj) {
    this.setState({ search: "" });
    this.props.selectRoute(routeObj);
  }

  resetSearch() {
    this.setState({ search: "" });
  }

  render() {
    let display = "";

    if (this.state.search.length > 0) {
      if (this.state.search[0] === "#") {
        display = (
          <ModalRouteList
            routes={this.props.routes}
            search=""
            selectRoute={this.selectRoute}
            resetSearch={this.resetSearch}
          />
        );
      } else {
        display = (
          <FilteredSearch
            routes={this.props.routes}
            search={this.state.search}
            selectRoute={this.selectRoute}
          />
        );
      }
    }

    return (
      <div id="RouteSearch">
        <SelectedRoute selectedRoute={this.props.selectedRoute} />
        <div className="route-search">
          <input
            id="BusRouteSearch"
            type="text"
            placeholder="Enter a Route or # for list"
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
