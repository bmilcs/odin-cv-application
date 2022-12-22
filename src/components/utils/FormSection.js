import React from "react";
import "../../styles/FormSection.css";

class FormSection extends React.Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="section-container">
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    );
  }
}

export default FormSection;
