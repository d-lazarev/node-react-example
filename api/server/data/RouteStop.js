class RouteStop {
    constructor(title, tag) {
        if(!isNaN(tag)) {
            this._title = title;
            this._tag = tag;    
        } else {
            throw new Error('Invalid Data for Route');
        }
    }

    get tag() {
        return this._tag;
    }

    get title() {
        return this._title;
    }

    toObj() {
        return {tag: this._tag, title: this._title};
    }
}

module.exports = RouteStop;