require('jest');

const RouteStop = require('../server/data/RouteStop');

describe('RouteStop', () => {
    const validTitle = 'Jane St At Sheppard Ave West';
    const validTag = 2567;
    
    let testObj;

    beforeEach(() => {
        testObj = new RouteStop(validTitle, validTag);
    });
    
    test('should contain valid data', () => {
        expect(testObj.title).toEqual(validTitle);
        expect(testObj.tag).toEqual(validTag);
    });

    test('should throw exception on invalid data', () => {
        expect(() => {
            const badObj = new Route(validTitle, "c");
        }).toThrow();
    });
})
