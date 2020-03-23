import React, { Component } from "react";
import { observer, inject } from "mobx-react";

let count = 0;
const ThemeContext = React.createContext("light");

class ThemedButton extends React.Component {
  // 현재 선택된 테마 값을 읽기 위해 contextType을 지정합니다.
  // React는 가장 가까이 있는 테마 Provider를 찾아 그 값을 사용할 것입니다.
  // 이 예시에서 현재 선택된 테마는 dark입니다.
  static contextType = ThemeContext;
  render() {
    return <button>{this.context}</button>;
  }
}

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

const ref = React.createRef();

@inject("counter")
@observer
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg1: "안녕하세요1",
      msg2: "쿄쿄쿄쿄",
      radioValue: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.test(10);
  }

  componentDidMount(){
    console.log(window.x = this);
  }

  test(x) {
    x();
    function x() {
      console.log(name);
      name = "lee";
      console.log(name);
    }
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

  handleInputChange(e) {
    this.setState({
      radioValue: e.target.value
    });
  }

  render() {
    const { counter } = this.props;
    const { radioValue } = this.state;
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
        <label>
          Is going:
          <input
            name="isGoing"
            type="radio"
            value="value1"
            checked={radioValue == "value1"}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Is going:
          <input
            name="isGoing"
            type="radio"
            value="value2"
            checked={radioValue == "value2"}
            onChange={this.handleInputChange}
          />
        </label>
        <ThemeContext.Provider value="dark">
          <Toolbar />
        </ThemeContext.Provider>
        <FancyButton ref={ref}>Click me!</FancyButton>;
      </div>
    );
  }
}

// 이젠 중간에 있는 컴포넌트가 일일이 테마를 넘겨줄 필요가 없습니다.
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

export default Counter;
