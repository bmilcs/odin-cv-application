import React from "react";
import FormSection from "../utils/FormSection";
import InputGroup from "../utils/InputGroup";
import "../../styles/FormSection.css";

const Personal = (props) => {
  const { state, onChange } = props;
  const { firstName, lastName, email, phone } = state;
  const fields = [
    {
      description: "First Name",
      id: "firstName",
      classes: "",
      type: "text",
      value: firstName,
    },
    {
      description: "Last Name",
      id: "lastName",
      classes: "",
      type: "text",
      value: lastName,
    },
    {
      description: "Phone",
      id: "phone",
      classes: "",
      type: "tel",
      value: phone,
    },
    {
      description: "E-mail",
      id: "email",
      classes: "",
      type: "email",
      value: email,
    },
  ];

  return (
    <FormSection title="Personal Info">
      <div className="personal-info card">
        <InputGroup fields={fields} onChange={onChange} />
      </div>
    </FormSection>
  );
};

export default Personal;
