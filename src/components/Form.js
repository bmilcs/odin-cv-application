import React from "react";
import Personal from "./form/Personal";
import Education from "./form/Education";
import Work from "./form/Work";
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
          ...prevState.personal,
          [id]: value,
        },
      };
    });
  };

  handleWorkEducationChange = (e) => {
    // this.state.education & this.state.work contain arrays of objects
    // e.target (ie: an input element)'s html id contains the following info:
    // category (education or work), the corresponding state object key(school, degree, startDate, etc.)
    // and an uniqid (work or school id).
    // - example: "education-degree-sj208alq"

    const { id, value } = e.target;
    const categoryObjKeyAndUniqID = id.split("-");
    const category = categoryObjKeyAndUniqID[0];
    const objKey = categoryObjKeyAndUniqID[1];
    const uniqID = categoryObjKeyAndUniqID[2];

    this.setState((prevState) => {
      return {
        ...prevState,
        [category]: prevState[category].map((item) => {
          if (item.id !== uniqID) return item;
          return {
            ...item,
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
          onChange={this.handleWorkEducationChange}
        />
        <Work
          state={this.state.work}
          onChange={this.handleWorkEducationChange}
        />
      </form>
    );
  }
}

export default Form;
