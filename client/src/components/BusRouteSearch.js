import React, { Component } from "react";
import FilteredSearch from "./FilteredSearch";

class BusRouteSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };

    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <div className="route-search">
        <input
          id="BusRouteSearch"
          type="text"
          placeholder="Enter a Route Name or Number"
          value={this.state.search}
          onChange={this.updateSearch}
        />
       <FilteredSearch routes={this.props.routes} search={this.state.search} selectRoute={this.props.selectRoute}/>
      </div>
    );
  }
}

export default BusRouteSearch;
