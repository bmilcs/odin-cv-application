import React from "react";
import TextField from "./TextFields";
import "../../styles/FormSection.css";

class FormSection extends React.Component {
  render() {
    const { title, inputFields, onChangeHandler } = this.props;

    return (
      <div className="section-container">
        <h2>{title}</h2>
        <div className="input-group">
          {inputFields.map((field, index) => {
            const { description, id, type, value } = field;
            return (
              <TextField
                description={description}
                id={id}
                key={id}
                type={type}
                index={index}
                value={value}
                onChangeHandler={onChangeHandler}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default FormSection;
