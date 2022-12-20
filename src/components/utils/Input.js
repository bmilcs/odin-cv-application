import React from "react";
import "../../styles/TextFields.css";

class Input extends React.Component {
  render() {
    const { description, id, classes, type, value, onChangeHandler } =
      this.props;
    return (
      <div className="input-container">
        <label htmlFor={id}>{description}</label>
        <input
          type={type}
          name={id}
          className={classes}
          key={id}
          id={id}
          value={value}
          onChange={onChangeHandler}
        ></input>
      </div>
    );
  }
}

export default Input;
