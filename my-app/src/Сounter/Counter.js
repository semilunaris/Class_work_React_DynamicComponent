import React from 'react';
import Controls from './Controls';

class Counter extends React.Component {
  //                                                  Статика!!!
  static defaultProps = {
    initialValue: 8,
  };

  //                                             Состояние!!!
  state = {
    value: this.props.initialValue,
  };

  //                                              Кастомные методы!!!
  handleIncrement = () => {
    // Изменение стейта от актуального значения
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  //                                                  Рендер!!!
  render() {
    return (
      <div className='Counter'>
        <span className='Counter_value'>{this.state.value}</span>
        <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
      </div>
    );
  }
}

export default Counter;