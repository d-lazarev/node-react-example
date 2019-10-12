require('jest');

const Route = require('../server/data/Route');

describe('Routes', () => {
    const validTitle = '1 - Test Route';
    const validTag = 1;
    
    let testObj;

    beforeEach(() => {
        testObj = new Route(validTitle, validTag);
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
