import React from "react";
import "../../styles/TextFields.css";

class TextBox extends React.Component {
  render() {
    const { description, index, id, type, value, onChangeHandler } = this.props;
    return (
      <div className="input-container">
        <label htmlFor={id}>{description}</label>
        <input
          type={type}
          name={id}
          id={id}
          index={index}
          value={value}
          onChange={(e) => onChangeHandler(index, e)}
        ></input>
      </div>
    );
  }
}

export default TextBox;
