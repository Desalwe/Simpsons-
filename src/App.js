// src/App.js
import React, { Component } from "react";
import "./App.css";
import Quotes from "./Quotes"
import Lamp from "./Lamp"

class App extends Component {
  state = {
        working: true,
  }
  isWorkingClick = () => {
    this.setState({ working: !this.state.working });
    console.log('I was pressed');
  }

  render() {
    const changeTitleColor = this.state.working ? "App-title" : "App-title2"; 
    return (
      <div className="App">
        <header className="App-header">
          <h1 className={changeTitleColor}>Simpsons Quotes</h1>
          <button onClick={this.isWorkingClick } className="isWorkingButton">I'm a button</button> 
        </header>
        <Lamp on />
        <Lamp/> 
        <Quotes/>
      </div>
    );
  }
}

export default App;