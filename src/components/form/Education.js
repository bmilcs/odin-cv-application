import React from "react";
import uniqid from "uniqid";
import FormSection from "../utils/FormSection";
import InputGroup from "../utils/InputGroup";
import "../../styles/FormSection.css";

class Education extends React.Component {
  render() {
    const { state, onChange } = this.props;

    const educationGroups = state.map((educationItem) => {
      const { id, school, degree, startDate, endDate } = educationItem;
      return [
        {
          description: "School",
          id: `school-${id}`,
          classes: "",
          type: "text",
          value: school,
        },
        {
          description: "Degree",
          id: `degree-${id}`,
          classes: "",
          type: "text",
          value: degree,
        },
        {
          description: "Start Date",
          id: `startDate-${id}`,
          classes: "",
          type: "text",
          value: startDate,
        },
        {
          description: "End Date",
          id: `endDate-${id}`,
          classes: "",
          type: "text",
          value: endDate,
        },
      ];
    });

    return (
      <FormSection title="Education">
        {educationGroups.map((fields, i) => (
          <InputGroup fields={fields} key={`edu-${i}`} onChange={onChange} />
        ))}
        <button>Add Education Item</button>
      </FormSection>
    );
  }
}

export default Education;
