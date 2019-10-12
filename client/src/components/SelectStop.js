import React, { Component } from "react";
import StopPrediction from "./StopPrediction";

class SelectStop extends Component {
  constructor(props) {
    super(props);
    this.state = { stops: [], predictions: [] };

    this.selectOurStop = this.selectOurStop.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:3001/schedule/getStops/${this.props.route.tag}`)
      .then(res => res.json())
      .then(res => this.setState({ stops: res.data }));
  }

  selectOurStop(val, event) {
    console.log(`Stop: ${val}`);
    fetch(
      `http://localhost:3001/schedule/getPredictions/${this.props.route.tag}/${val}`
    )
      .then(res => res.json())
      .then(res =>
        this.setState({
          stops: this.state.stops,
          predictions: res.data.predictions
        })
      );
  }

  render() {
    const uniqueStopList = [];
    this.state.stops.forEach(stop => {
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
          onClick={e => this.selectOurStop(stop.tag, e)}
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
      display = <StopPrediction predictions={this.state.predictions} />;
    }

    return (
      <div className="route-stops">
        <ul id="SelectStop">{menuItems}</ul>
        {display}
      </div>
    );
  }
}

export default SelectStop;
