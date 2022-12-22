import React from "react";
import FormSection from "../utils/FormSection";
import InputGroup from "../utils/InputGroup";
import "../../styles/FormSection.css";

class Work extends React.Component {
  render() {
    const { state, onChange } = this.props;

    const workGroups = state.map((workItem) => {
      const { id, employer, title, responsibilities, startDate, endDate } =
        workItem;
      return [
        {
          description: "Employer",
          id: `work-employer-${id}`,
          classes: "",
          type: "text",
          value: employer,
        },
        {
          description: "Job Title",
          id: `work-title-${id}`,
          classes: "",
          type: "text",
          value: title,
        },
        {
          description: "Responsibilities",
          id: `work-responsibilities-${id}`,
          classes: "",
          type: "text",
          value: responsibilities,
        },
        {
          description: "Start Date",
          id: `work-startDate-${id}`,
          classes: "",
          type: "text",
          value: startDate,
        },
        {
          description: "End Date",
          id: `work-endDate-${id}`,
          classes: "",
          type: "text",
          value: endDate,
        },
      ];
    });

    return (
      <FormSection title="Work Experience">
        {workGroups.map((fields, i) => (
          <InputGroup fields={fields} key={`edu-${i}`} onChange={onChange} />
        ))}
        <button>Add Work Item</button>
      </FormSection>
    );
  }
}

export default Work;
