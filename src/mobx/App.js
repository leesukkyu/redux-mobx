import React, { Component } from "react";
import { observer, inject } from "mobx-react";

let count = 0;

@inject("counter")
@observer
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg1: "안녕하세요1",
      msg2: "쿄쿄쿄쿄"
    };
  }

  changeMsg1() {
    this.setState(
      {
        msg1: "나는 바보야" + count++
      },
      () => {
        console.log(this.state);
      }
    );
  }

  changeMsg2() {
    this.setState(
      {
        msg2: "나는 바보야2222" + count++
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    const { counter } = this.props;
    window.x = counter;
    return (
      <div>
        <h1>{counter.number}</h1>
        <button onClick={counter.increase}>+1</button>
        <button onClick={counter.decrease}>-1</button>
        <h1>{counter.test}</h1>

        <button
          onClick={() => {
            counter.test++;
          }}
        >
          +1
        </button>

        <button
          onClick={() => {
            counter.test--;
          }}
        >
          -1
        </button>

        <button onClick={this.changeMsg1.bind(this)}>{this.state.msg1}</button>
        <button onClick={this.changeMsg2.bind(this)}>{this.state.msg2}</button>
      </div>
    );
  }
}

export default Counter;
