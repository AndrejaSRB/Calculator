import React, { Component } from "react";
import "./App.css";
import Button from "./components/elements/Button.jsx";
import { Input } from "./components/elements/Input.jsx";
import { ClearButton } from "./components/elements/ClearButton.jsx";
import * as math from "mathjs";

// odradi object disctructor
// const {input} = this.state

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }
  addToInput = val => {
    if (isNaN(val) && isNaN(this.state.input[this.state.input.length - 1])) {
      this.setState({ input: this.state.input });
    } else {
      this.setState({ input: this.state.input + val });
    }
  };
  handleEqual = () => {
    if (isNaN(this.state.input[this.state.input.length - 1])) {
      this.setState({ input: this.state.input });
    } else {
      this.setState({ input: math.eval(this.state.input) });
    }
  };
  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              AC
            </ClearButton>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;