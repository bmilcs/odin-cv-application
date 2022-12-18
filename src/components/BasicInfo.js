import React from "react";
import TextBox from "./InputField";
import "../styles/FormSection.css";

class PersonalInfo extends React.Component {
  render() {
    return (
      <div className="section-container">
        <h2>Basic Information</h2>
        <div className="input-group">
          <TextBox description="First Name" id="first_name" type="text" />
          <TextBox description="Last Name" id="last_name" type="text" />
          <TextBox description="E-mail" id="email" type="mail" />
          <TextBox description="Phone" id="phone" type="tel" />
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
