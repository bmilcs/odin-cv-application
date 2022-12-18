import React from "react";
import FormSection from "./utils/FormSection";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [
        {
          type: "text",
          description: "First Name",
          id: "first_name",
          value: "hi",
        },
        {
          type: "text",
          description: "Last Name",
          id: "last_name",
        },
        {
          type: "email",
          description: "E-mail",
          id: "email",
        },
        {
          type: "tel",
          description: "Phone",
          id: "phone",
        },
      ],
      basicInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
    };
  }

  handleOnChange = (i, e) => {
    const fields = this.state.fields;
    const newValue = e.target.value;
    fields[i].value = newValue;
    this.setState({ fields });
  };

  render() {
    return (
      <form>
        <FormSection
          title="Basic Information"
          inputFields={this.state.fields}
          onChangeHandler={this.handleOnChange}
        />
      </form>
    );
  }
}

export default Form;
