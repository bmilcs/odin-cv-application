import React from "react";
import Input from "./Input";

const InputGroup = (props) => {
  const { fields, onChange, children } = props;
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
};

export default InputGroup;
