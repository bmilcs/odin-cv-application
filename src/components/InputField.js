import React from "react";
import "../styles/InputField.css";

class TextBox extends React.Component {
  render() {
    const { description, id, type } = this.props;
    return (
      <div className="input-container">
        <label htmlFor={id}>{description}</label>
        <input type={type} name={id} id={id}></input>
      </div>
    );
  }
}

export default TextBox;
