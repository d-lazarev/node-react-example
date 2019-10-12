var BusScheduledService = require('../services/BusScheduleService');

class BusScheduleController {
    getRoutes(req, res) {
        return BusScheduledService.getRoutes();
    }

    getStops(routeNumber) {
        return BusScheduledService.getStopsForRoute(routeNumber);
    }

    getPredictions(routeNumber, stopNumber) {
        return BusScheduledService.getPredictionForStop(routeNumber, stopNumber);
    }
}

module.exports = new BusScheduleController();