import React, { Component } from "react";
import StopPrediction from "./StopPrediction";
import WebService from "../service/WebService";

class SelectStop extends Component {
  constructor(props) {
    super(props);
    this.state = { stops: [], predictions: [], selectedStop: {} };

    this.selectOurStop = this.selectOurStop.bind(this);
  }

  selectOurStop(val, event) {
    console.log(`Route: ${this.props.route.tag} - Stop: ${val.tag}`);

    WebService.getPredictions(this.props.route.tag, val.tag).then(res =>
      this.setState({
        stops: this.state.stops,
        predictions: res.data.predictions,
        selectedStop: val
      })
    );
  }

  render() {
    const uniqueStopList = [];
    this.props.stops.forEach(stop => {
      if (!uniqueStopList.find(s => s.tag === stop.tag)) {
        uniqueStopList.push(stop);
      }
    });

    let tagClass = "odd";
    const menuItems = uniqueStopList.map(stop => {
      const tag = (
        <li
          key={stop.tag.toString() + new Date().getTime().toString()}
          value={stop.tag}
          onClick={e => this.selectOurStop(stop, e)}
          className={tagClass}
        >
          {stop.title}
        </li>
      );

      tagClass = tagClass === "odd" ? "even" : "odd";
      return tag;
    });
    let display = "";

    if (this.state.predictions.length > 0) {
      display = <StopPrediction predictions={this.state.predictions} selectedStop={this.state.selectedStop}/>;
    }

    return (
      <div className="route-stops">
        <div className="select-stop">
          <ul id="SelectStop">{menuItems}</ul>
        </div>
        <div className="stop-predictions">{display}</div>
      </div>
    );
  }
}

export default SelectStop;
