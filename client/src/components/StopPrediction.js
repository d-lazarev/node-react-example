import React, { Component } from "react";

class StopPrediction extends Component {
  render() {
    let display = <p>Please Wait...</p>;
    let tagClass = "odd";

    if (this.props.predictions.length > 0) {
      const predictions = this.props.predictions;
      const predictionList = predictions.map(p => {
        const predicted = new Date(p.epochTime);
        const render = (
          <li key={p.seconds} className={tagClass}>
            {predicted.toDateString()} - {predicted.toLocaleTimeString()}
          </li>
        );

        tagClass = tagClass === "odd" ? "even" : "odd";

        return render;
      });
      display = <ul>{predictionList}</ul>;
    }

    return <div>{display}</div>;
  }
}

export default StopPrediction;
