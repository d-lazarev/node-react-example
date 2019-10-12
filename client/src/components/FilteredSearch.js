import React, { Component } from "react";
import RouteSearchItem from "./RouteSearchItem";

class FilteredSearch extends Component {
  render() {
    const search = this.props.search;
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
     
      return (
        <div className="route-search-results">
        <ul>{filteredSearch}</ul>
      </div>
      )
  }  
}

export default FilteredSearch;