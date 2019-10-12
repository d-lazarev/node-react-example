class StopPrediction {
    constructor(seconds, epochTime) {
        if(!isNaN(seconds) && !isNaN(epochTime)) {
            this._seconds = seconds;
            this._epochTime = epochTime;    
        } else {
            throw new Error('Invalid Data for Route');
        }
    }

    get seconds() {
        return this._seconds;
    }

    get epochTime() {
        return this._epochTime;
    }

    toMinutes() {
        return this._seconds / 60;
    }

    toDate() {
        const offset = (new Date().getTimezoneOffset() / 60) * -1;
        const utcDate = new Date(this._epochTime);
        return new Date(utcDate.getTime() + offset);
    }

    toObj() {
        return {seconds: this._seconds, minutes: this.toMinutes(), epochTime: this._epochTime, formattedDateTime: this.toDate()};
    }
}

module.exports = StopPrediction;