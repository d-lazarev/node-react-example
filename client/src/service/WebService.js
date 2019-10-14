class WebService {
    callServer(url) {
        return fetch(url)
        .then(res => res.json());
    }

    getRoutes() {
        return this.callServer("http://localhost:3001/schedule/getRoutes");
    }

    getStops(route) {
        return this.callServer(`http://localhost:3001/schedule/getStops/${route}`);
    }

    getPredictions(route, stop) {
        return this.callServer(`http://localhost:3001/schedule/getPredictions/${route}/${stop}`);    
    }
}

export default new WebService();