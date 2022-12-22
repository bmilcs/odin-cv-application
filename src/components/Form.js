import React from "react";
import Personal from "./form/Personal";
import Education from "./form/Education";
import Work from "./form/Work";

class Form extends React.Component {
  render() {
    const { state, onDelete, onAdd, onPersonalChange, onWorkEducationChange } =
      this.props;

    return (
      <form>
        <Personal state={state.personal} onChange={onPersonalChange} />
        <Education
          state={state.education}
          onChange={onWorkEducationChange}
          onAdd={onAdd}
          onDelete={onDelete}
        />
        <Work
          state={state.work}
          onChange={onWorkEducationChange}
          onAdd={onAdd}
          onDelete={onDelete}
        />
      </form>
    );
  }
}

export default Form;
