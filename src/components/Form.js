import React from "react";
import Personal from "./form/Personal";
import emptyForm from "./form/emptyForm";
import Education from "./form/Education";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...emptyForm };
  }

  handlePersonalChange = (e) => {
    const { id, value } = e.target;
    this.setState((prevState) => {
      return {
        ...prevState,
        personal: {
          [id]: value,
        },
      };
    });
  };

  handleEducationChange = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    this.setState((prevState) => {
      return {
        ...prevState,
        education: {
          [id]: value,
        },
      };
    });
  };

  render() {
    return (
      <form>
        <Personal
          state={this.state.personal}
          onChange={this.handlePersonalChange}
        />
        <Education
          state={this.state.education}
          onChange={this.handleEducationChange}
        />
      </form>
    );
  }
}

export default Form;
