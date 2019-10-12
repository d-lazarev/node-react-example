var express = require('express');
var BusScheduleController = require('../controllers/BusScheduleController');
var router = express.Router();

/* GET home page. */
router.get('/getRoutes', (req, res, next) => {
  BusScheduleController.getRoutes().then( routes => {
    res.json(
      { success: true, data: routes.map(route => route.toObj() ) }
      );
} );
});

router.get('/getStops/:routeNumber', (req, res, next) => {
  BusScheduleController.getStops(req.params.routeNumber).then( stops => {
    res.json({success: true, data: stops.map(stop => stop.toObj())});           
  });
});

router.get('/getPredictions/:routeNumber/:stopNumber', (req, res, next) => {
  BusScheduleController.getPredictions(req.params.routeNumber, req.params.stopNumber).then( pred => {
    res.json({success: true, data: pred.toObj()});
  });
});

module.exports = router;
