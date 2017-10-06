import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    value: null,
    displayValue: "0",
    waitingForOperand: false,
    operator: null
  };

  inputDigit(digit) {
    const { displayValue, waitingForOperand } = this.state;

    this.setState({
      displayValue:
        displayValue === "0" || waitingForOperand
          ? digit
          : displayValue + digit,
      waitingForOperand: waitingForOperand ? false : waitingForOperand
    });
  }

  inputDot() {
    const { displayValue } = this.state;
    this.setState({
      displayValue:
        displayValue.indexOf(".") === -1 ? displayValue + "." : displayValue
    });
  }

  deleteDigit() {
    const { displayValue } = this.state;
    this.setState({
      displayValue: displayValue.length === 1 ? "0" : displayValue.slice(0, -1)
    });
  }

  selectOperation(op) {
    const { displayValue } = this.state;
    this.setState({
      value: Number(displayValue),
      waitingForOperand: true,
      operator: op
    });
  }

  calculateValue() {
    const { displayValue, value, operator } = this.state;
    const operations = {
      "+": (prev_val, new_val) => {
        return prev_val + new_val;
      },
      "-": (prev_val, new_val) => {
        return prev_val - new_val;
      },
      x: (prev_val, new_val) => {
        return prev_val * new_val;
      },
      "÷": (prev_val, new_val) => {
        return prev_val / new_val;
      }
    };

    const calculatedValue = operations[operator](value, Number(displayValue));
    this.setState({
      displayValue: String(calculatedValue),
      value: calculatedValue,
      operator: null,
      waitingForOperand: false
    });
  }

  render() {
    const { displayValue } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CALCY</h1>
        </header>
        <div id="calculator">
          <div id="txtScreen">
            <span style={{ marginRight: "10px" }}>{displayValue}</span>
          </div>
          <div className="numericPad">
            <div className="rowsNumPad">
              <input type="button" value="7" className="btnNum" onClick={() => { this.inputDigit("7");}}/>
              <input type="button" value="8" className="btnNum" onClick={() => { this.inputDigit("8");}}/>
              <input type="button" value="9" className="btnNum" onClick={() => { this.inputDigit("9");}}/>
            </div>
            <div className="rowsNumPad">
              <input type="button" value="4" className="btnNum" onClick={() => { this.inputDigit("4");}}/>
              <input type="button" value="5" className="btnNum" onClick={() => { this.inputDigit("5");}}/>
              <input type="button" value="6" className="btnNum" onClick={() => { this.inputDigit("6");}}/>              
            </div>
            <div className="rowsNumPad">
              <input type="button" value="1" className="btnNum" onClick={() => { this.inputDigit("1");}}/>
              <input type="button" value="2" className="btnNum" onClick={() => { this.inputDigit("2");}}/>
              <input type="button" value="3" className="btnNum" onClick={() => { this.inputDigit("3");}}/>              
            </div>
            <div className="rowsNumPad">
              <input type="button" value="." className="btnNum" onClick={() => { this.inputDot();}}/>
              <input type="button" value="0" className="btnNum" onClick={() => { this.inputDigit("0");}}/>
              <input type="button" value="=" className="btnNum" onClick={() => { this.calculateValue();}}/>              
            </div>
          </div>

          <div className="funtionPad">
            <div className="rowsFuntionPad">
              <input type="button" value="DEL" className="btnFuntionPad" onClick={() => { this.deleteDigit();}}/>              
            </div>
            <div className="rowsFuntionPad">
              <input type="button" value="÷" className="btnFuntionPad" onClick={() => { this.selectOperation("÷");}}/>            
            </div>
            <div className="rowsFuntionPad">
              <input type="button" value="x" className="btnFuntionPad" onClick={() => { this.selectOperation("x");}}/>            
            </div><div className="rowsFuntionPad">
              <input type="button" value="-" className="btnFuntionPad" onClick={() => { this.selectOperation("-");}}/>            
            </div>
            <div className="rowsFuntionPad">
              <input type="button" value="+" className="btnFuntionPad" onClick={() => { this.selectOperation("+");}}/>            
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default App;
