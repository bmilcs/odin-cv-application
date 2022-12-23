import React from "react";
import "../../styles/FormSection.css";

class FormSection extends React.Component {
  render() {
    const { title, children, addButton } = this.props;

    return (
      <div className="section-container">
        <div className="section-header-container">
          <h2>{title}</h2>
          {addButton}
        </div>
        <div>{children}</div>
      </div>
    );
  }
}

export default FormSection;
