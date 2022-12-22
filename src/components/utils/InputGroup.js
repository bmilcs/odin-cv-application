import React from "react";
import Input from "./Input";

class InputGroup extends React.Component {
  render() {
    const { fields, onChange, children } = this.props;
    return (
      <div className="input-group">
        {fields.map((field) => {
          const { description, id, type, value, classes } = field;
          return (
            <Input
              description={description}
              id={id}
              classes={classes}
              key={id}
              type={type}
              value={value}
              onChangeHandler={onChange}
            />
          );
        })}
      </div>
    );
  }
}

export default InputGroup;
