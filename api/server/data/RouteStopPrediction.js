const StopPrediction = require('./StopPrediction');

class RouteStopPrediction {
  constructor() {
    this._route = 0;
    this._routeDescription = "";
    this._routeTag = 0;
    this._direction = "";
    this._predictions = [];
  }

  get route() {
      return this._route;
  }

  get routeDescription() {
      return this._routeDescription;
  }

  get routeTag() {
      return this._routeTag;
  };

  get direction() {
      return this._direction;
  }

  get predictions() {
      return this._predictions;
  }

  fromRaw(obj) {
      const directionObj = obj.direction;
      const predictionsList = directionObj.prediction;

      this._route = parseInt(obj.routeTag);
      this._routeDescription = obj.routeTitle;
      this._direction = directionObj.title;
      this._predictions = predictionsList.map(predictionObj => new StopPrediction(parseInt(predictionObj.seconds), parseInt(predictionObj.epochTime)));

      return this.predictions;
  }

  toObj() {
      return ({
          route: this._route,
          title: this._routeDescription,
          direction: this._direction,
          predictions: this._predictions.map(pred => pred.toObj())
      });
  }
}

module.exports = RouteStopPrediction;
