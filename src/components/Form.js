import React from "react";
import Personal from "./form/Personal";
import emptyForm from "./form/emptyForm";

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

  render() {
    return (
      <form>
        <Personal
          state={this.state.personal}
          onChange={this.handlePersonalChange}
        />
      </form>
    );
  }
}

export default Form;
