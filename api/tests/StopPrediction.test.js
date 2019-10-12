require('jest');

const StopPrediction = require('../server/data/StopPrediction');

function getLocalDate(time) {
    const offset = (new Date().getTimezoneOffset() / 60) * -1;
    const utcDate = new Date(time);
    return new Date(utcDate.getTime() + offset);    
}


describe('StopPrediction', () => {
    const validSeconds = 660;
    const validTime = new Date().getTime();
    
    let testObj;

    beforeEach(() => {
        testObj = new StopPrediction(validSeconds, validTime);
    });
    
    test('should contain valid data', () => {
        expect(testObj.seconds).toEqual(validSeconds);
        expect(testObj.epochTime).toEqual(validTime);
    });

    test('minutes should be valid', () => {
        expect(testObj.toMinutes()).toEqual(validSeconds / 60);
    });

    test('minutes should be valid', () => {
        expect(testObj.toMinutes()).toEqual(validSeconds / 60);
    });

    test('Date object should be valid', () => {

        expect(testObj.toDate()).toEqual(getLocalDate(validTime));
    });

    test('obj should be valid', () => {
        expect(testObj.toObj()).toEqual({seconds: validSeconds, minutes: validSeconds/60, epochTime: validTime, formattedDateTime: getLocalDate(validTime)});
    })
    
    test('should throw exception on invalid data', () => {
        expect(() => {
            const badObj = new Route(validTitle, "c");
        }).toThrow();
    });
})
