import React, { Component } from "react";
import "./App.css";
import BusRoutes from "./components/BusRoutes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: ""};
  }

 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bus Route Schedule</h1>
          <div>
           <BusRoutes />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
