require('jest');

const RouteStopPrediction = require('../server/data/RouteStopPrediction');

describe('RouteStopPrediction', () => {
    let testObj;

    beforeEach(() => {
        testObj = new RouteStopPrediction();
    });
    
    test('should contain initialized data', () => {
        expect(testObj.route).toEqual(0);
        expect(testObj.routeDescription).toEqual('');
        expect(testObj.direction).toEqual('');
        expect(testObj.predictions.length).toEqual(0);
    });

    test('should build the object from supplied raw data', () => {
        const testData = '{"predictions":{"agencyTitle":"Toronto Transit Commission","routeTag":"99","routeTitle":"99-Arrow Road","direction":{"title":"North - 99 Arrow Rd towards Jane","prediction":[{"isDeparture":"true","minutes":"11","seconds":"660","tripTag":"38908047","vehicle":"3252","affectedByLayover":"true","block":"84_8_80","branch":"99","dirTag":"99_1_99","epochTime":"1570809660000"},{"isDeparture":"true","minutes":"31","seconds":"1860","tripTag":"38908046","vehicle":"3252","affectedByLayover":"true","block":"84_8_80","branch":"99","dirTag":"99_1_99","epochTime":"1570810860000"},{"isDeparture":"true","minutes":"51","seconds":"3060","tripTag":"38908045","vehicle":"3252","affectedByLayover":"true","block":"84_8_80","branch":"99","dirTag":"99_1_99","epochTime":"1570812060000"}]},"stopTitle":"Arrow Rd At Deerhide Cres (South)","stopTag":"8832"},"copyright":"All data copyright Toronto Transit Commission 2019."}'
        const predictionsObj = JSON.parse(testData).predictions;

        const predictions = testObj.fromRaw(predictionsObj);

        expect(testObj.predictions.length).toBeGreaterThan(0);
        expect(testObj.route).toEqual(99);
        expect(testObj.routeDescription).toEqual('99-Arrow Road');
        expect(testObj.direction).toEqual('North - 99 Arrow Rd towards Jane');   
    });
})
