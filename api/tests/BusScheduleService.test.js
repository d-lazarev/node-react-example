var BusScheduleService = require('../server/services/BusScheduleService');
var sinon = require('sinon');
var jest = require('jest');

const mockService = sinon.mock(BusScheduleService);

afterEach(() => {
    mockService.restore();
});

describe('Bus Schedule Service', () => {
    it('should return a set of sample bus routes', () => {
        const result = new Promise((resolve, reject) => {
            resolve( {
                status: 200,
                data: '{"route":[{"title":"5-Avenue Road","tag":"5"}]}'
            });
        });
        mockService.expects("callService").atLeast(1).returns(result);

        const routePromise = BusScheduleService.getRoutes();

        routePromise.then((routeList) => {
            expect(routeList.length).toBeGreaterThan(0);
            
            const route = routeList[0];
            expect(route.tag).toEqual(5);
            
            const routeObj = route.toObj();
            // console.table(routeObj);
            expect(routeObj.tag).toEqual(5);
       });
    });

    it('should return a set of sample stops for a given bus route', () => {
        const result = new Promise((resolve, reject) => {
            resolve( {
                status: 200,
                data: '{"route":{"latMax":"43.7062","stop":[{"lon":"-79.39986","title":"Eglinton Station","stopId":"14668","tag":"14189","lat":"43.7056499"}]}}'
            });
        });
        mockService.expects("callService").atLeast(1).returns(result);

        const routePromise = BusScheduleService.getStopsForRoute(5);

        routePromise.then((stopList) => {
            expect(stopList.length).toBeGreaterThan(0);
            
            const stop = stopList[0];
            expect(stop.tag).toEqual(14189);
            
            const stopObj = stop.toObj();
            //console.table(stopObj);
            expect(stopObj.tag).toEqual(14189);
       });
    });

    it('should return a set of sample stop predictions for a given bus route and stop', () => {
        const result = new Promise((resolve, reject) => {
            resolve( {
                status: 200,
                data: '{"predictions":{"agencyTitle":"Toronto Transit Commission","routeTag":"99","routeTitle":"99-Arrow Road","direction":{"title":"North - 99 Arrow Rd towards Jane","prediction":[{"isDeparture":"true","minutes":"11","seconds":"660","tripTag":"38908047","vehicle":"3252","affectedByLayover":"true","block":"84_8_80","branch":"99","dirTag":"99_1_99","epochTime":"1570809660000"},{"isDeparture":"true","minutes":"31","seconds":"1860","tripTag":"38908046","vehicle":"3252","affectedByLayover":"true","block":"84_8_80","branch":"99","dirTag":"99_1_99","epochTime":"1570810860000"},{"isDeparture":"true","minutes":"51","seconds":"3060","tripTag":"38908045","vehicle":"3252","affectedByLayover":"true","block":"84_8_80","branch":"99","dirTag":"99_1_99","epochTime":"1570812060000"}]},"stopTitle":"Arrow Rd At Deerhide Cres (South)","stopTag":"8832"},"copyright":"All data copyright Toronto Transit Commission 2019."}'
            });
        });
        mockService.expects("callService").atLeast(1).returns(result);

        const predictionPromise = BusScheduleService.getStopsForRoute(5, 1234);

        predictionPromise.then((prediction) => {
            expect(prediction).not.toBeNull();
            expect(prediction.predictions.length).toBeGreaterThan(0);
            expect(prediction.route).toEqual(99);
            expect(prediction.routeDescription).toEqual('99-Arrow Road');
            expect(prediction.direction).toEqual('North - 99 Arrow Rd towards Jane');   
    
       });
    });

});
