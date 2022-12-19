import React from "react";
import FormSection from "../utils/FormSection";
import "../../styles/FormSection.css";

class Personal extends React.Component {
  render() {
    const { state, onChange } = this.props;
    const { firstName, lastName, email, phone, summary } = state;
    const fields = [
      {
        description: "First Name",
        id: "firstName",
        type: "text",
        value: firstName,
      },
      {
        description: "Last Name",
        id: "lastName",
        type: "text",
        value: lastName,
      },
      {
        description: "Phone",
        id: "phone",
        type: "tel",
        value: phone,
      },
      {
        description: "E-mail",
        id: "email",
        type: "email",
        value: email,
      },
      {
        description: "Summary",
        id: "summary",
        type: "textarea",
        value: summary,
      },
    ];

    return (
      <FormSection title="Personal Info" fields={fields} onChange={onChange} />
    );
  }
}

export default Personal;
