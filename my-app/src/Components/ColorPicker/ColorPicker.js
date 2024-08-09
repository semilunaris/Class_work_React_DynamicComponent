import React, { Component } from "react";
import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    activOptionIdx: 1,
  };

  setActiveInd = (index) => {
    this.setState({ activOptionIdx: index });
  };

  makeOptionClassName = (index) => {
    const optionClasees = ["ColorPicker__options"];
    if (index === this.state.activOptionIdx) {
      optionClasees.push("ColorPicker_option_active");
    }
    return optionClasees.join(" ");
  };

  render() {
    return (
      <div className="colorPicker">
        <h2 className="ColorPicker__title">Select a Color</h2>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className={this.makeOptionClassName(index)}
                style={{ backgroundColor: color }}
                onClick={() => this.setActiveInd(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
