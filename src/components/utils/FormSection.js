import React from "react";
import Input from "./Input";
import "../../styles/FormSection.css";

class FormSection extends React.Component {
  render() {
    const { title, fields, onChange } = this.props;

    return (
      <div className="section-container">
        <h2>{title}</h2>
        <div className="input-group">
          {fields.map((field) => {
            const { description, id, type, value } = field;
            return (
              <Input
                description={description}
                id={id}
                key={id}
                type={type}
                value={value}
                onChangeHandler={onChange}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default FormSection;
