import React, { Component } from "react";
import FilteredSearch from "./FilteredSearch";

class ModalRouteList extends Component {
  constructor(props) {
    super(props);

    this.resetSearch = this.resetSearch.bind(this);
  }
  resetSearch(e) {
    e.preventDefault();
    this.props.resetSearch();
  }

  render() {
    return (
      <div className="modal-wrapper" onClick={this.resetSearch}>
        <FilteredSearch
          routes={this.props.routes}
          search=""
          selectRoute={this.props.selectRoute}
        />
      </div>
    );
  }
}

export default ModalRouteList;