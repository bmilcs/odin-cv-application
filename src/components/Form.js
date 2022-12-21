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
          ...prevState.personal,
          [id]: value,
        },
      };
    });
  };

  handleEducationChange = (e) => {
    // this.state.education contains an array of education objects
    // e.target (ie: an input element)'s id contains the corresponding state object key (school, degree, startDate, etc.)
    // and an uniqid (school id). example e.target id: "degree-sj208alq"

    const { id, value } = e.target;
    const objKeyAndSchoolID = id.split("-");
    const objKey = objKeyAndSchoolID[0];
    const schoolID = objKeyAndSchoolID[1];

    this.setState((prevState) => {
      return {
        ...prevState,
        education: prevState.education.map((eduItem) => {
          if (eduItem.id !== schoolID) return eduItem;
          return {
            ...eduItem,
            [objKey]: value,
          };
        }),
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
