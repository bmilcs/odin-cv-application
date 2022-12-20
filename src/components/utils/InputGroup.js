import React from "react";
import Input from "./Input";

class InputGroup extends React.Component {
  render() {
    const { fields, onChange } = this.props;
    return (
      <>
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
      </>
    );
  }
}

export default InputGroup;
