var http = require("http");
var Route = require("../data/Route");
var RouteStop = require("../data/RouteStop");
var RouteStopPrediction = require('../data/RouteStopPrediction');

// External web calls
// http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=ttc
// http://webservices.nextbus.com/service/publicJSONFeed?command=routeConfig&a=ttc&r=99
// http://webservices.nextbus.com/service/publicJSONFeed?command=predictions&a=ttc&r=99&s=8832

class BusScheduleService {
  callService(url) {
    return new Promise((resolve, reject) => {
      http.get(url, res => {
        let rawData = "";
        const { statusCode } = res;
        res.setEncoding("utf8");
        res.on("data", chunk => (rawData += chunk));
        res.on("end", () => {
          resolve({ statusCode, data: rawData });
        });

        res.on("error", e => {
          reject({ statusCode, data: e.message });
        });
      });
    });
  }

  getRoutes() {
    const call =
      "http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=ttc";

    const result = this.callService(call);

    const onResolve = d => {
      const data = d.data;
      const routes = JSON.parse(data);
      return routes.route.map(r => new Route(r.title, parseInt(r.tag)));
    };

    const onReject = () => {
      return [];
    };

    return result.then(onResolve, onReject);
  }

  getStopsForRoute(routeNumber) {
    const call =`http://webservices.nextbus.com/service/publicJSONFeed?command=routeConfig&a=ttc&r=${routeNumber}`
    const result = this.callService(call);

    const onResolve = d => {
      const data = d.data;
      const stopObj = JSON.parse(data);
      const stops = stopObj.route.stop;
      return stops.map(r => new RouteStop(r.title, parseInt(r.tag)));
    };

    const onReject = () => {
      return [];
    };

    return result.then(onResolve, onReject);
  }

  getPredictionForStop(routeNumber, stopNumber) {
    const call =
    `http://webservices.nextbus.com/service/publicJSONFeed?command=predictions&a=ttc&r=${routeNumber}&s=${stopNumber}`;

  const result = this.callService(call);

  const onResolve = d => {
    const data = d.data;
    const predictionObjFromJson = JSON.parse(data);
    const predictionObj = predictionObjFromJson.predictions;
    const routeStopPrediction = new RouteStopPrediction();

    routeStopPrediction.fromRaw(predictionObj);

    return routeStopPrediction;
  };

  const onReject = () => {
    return [];
  };

  return result.then(onResolve, onReject); 
  }
}

module.exports = new BusScheduleService();
