import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div id="calculator">
          <input type="text" id="txtScreen" />
          <div className="numericPad">
            <div className="rowsNumPad">
              <input
                type="button"
                value="7"
                className="btnNum"
                onclick="writeNumbers(this.value)"
              />
              <input
                type="button"
                value="8"
                className="btnNum"
                onclick="writeNumbers(this.value)"
              />
              <input
                type="button"
                value="9"
                className="btnNum"
                onclick="writeNumbers(this.value)"
              />
            </div>
            <div className="rowsNumPad">
              <input
                type="button"
                value="4"
                className="btnNum"
                onclick="writeNumbers(this.value)"
              />
              <input
                type="button"
                value="5"
                className="btnNum"
                onclick="writeNumbers(this.value)"
              />
              <input
                type="button"
                value="6"
                className="btnNum"
                onclick="writeNumbers(this.value)"
              />
            </div>
            <div className="rowsNumPad">
              <input
                type="button"
                value="1"
                className="btnNum"
                onclick="writeNumbers(this.value)"
              />
              <input
                type="button"
                value="2"
                className="btnNum"
                onclick="writeNumbers(this.value)"
              />
              <input
                type="button"
                value="3"
                className="btnNum"
                onclick="writeNumbers(this.value)"
              />
            </div>
            <div className="rowsNumPad">
              <input
                type="button"
                value="."
                className="btnNum"
                onclick="writeNumbers(this.value)"
              />
              <input
                type="button"
                value="0"
                className="btnNum"
                onclick="writeNumbers(this.value)"
              />
              <input
                type="button"
                value="="
                className="btnNum"
                onclick="calculateResult()"
              />
            </div>
          </div>

          <div className="funtionPad">
            <div className="rowsFuntionPad">
              <input
                type="button"
                value="DEL"
                className="btnFuntionPad"
                onclick="clearEverything()"
              />
            </div>
            <div className="rowsFuntionPad">
              <input
                type="button"
                value="÷"
                className="btnFuntionPad"
                onclick="operations(this.value)"
              />
            </div>
            <div className="rowsFuntionPad">
              <input
                type="button"
                value="x"
                className="btnFuntionPad"
                onclick="operations(this.value)"
              />
            </div>
            <div className="rowsFuntionPad">
              <input
                type="button"
                value="-"
                className="btnFuntionPad"
                onclick="operations(this.value)"
              />
            </div>
            <div className="rowsFuntionPad">
              <input
                type="button"
                value="+"
                className="btnFuntionPad"
                onclick="operations(this.value)"
              />
            </div>
          </div>
        </div>
        <footer>
          <p>
            Made with <span>♥</span>{" "}
            <a href="https://github.com/psantwani">
              Piyush Santwani
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
