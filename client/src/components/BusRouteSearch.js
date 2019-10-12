import React, { Component } from "react";
import RouteSearchItem from "./RouteSearchItem";

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
    let display = "";
    const search = this.state.search;
    let displayClass = "odd";

    const filteredSearch = this.props.routes
      .filter(r => r.title.toLowerCase().indexOf(search.toLowerCase()) > -1)
      .map(rObj => {
        const tag = (
          <RouteSearchItem
            key={rObj.tag.toString()}
            route={rObj}
            selectRoute={this.props.selectRoute}
            displayClass={displayClass}
          />
        );

        displayClass = displayClass === "odd" ? "even" : "odd";
        return tag;
      });

    display = filteredSearch;

    return (
      <div className="route-search">
        <input
          id="BusRouteSearch"
          type="text"
          placeholder="Enter a Route Name or Number"
          value={this.state.search}
          onChange={this.updateSearch}
        />
        <div className="route-search-results">
          <ul>{display}</ul>
        </div>
      </div>
    );
  }
}

export default BusRouteSearch;
