import React from "react";
import FormSection from "../utils/FormSection";
import InputGroup from "../utils/InputGroup";
import "../../styles/FormSection.css";

class Education extends React.Component {
  render() {
    const { state, onChange, onAdd } = this.props;

    const educationGroups = state.map((educationItem) => {
      const { id, school, degree, startDate, endDate } = educationItem;
      return [
        {
          description: "School",
          id: `education-school-${id}`,
          classes: "",
          type: "text",
          value: school,
        },
        {
          description: "Degree",
          id: `education-degree-${id}`,
          classes: "",
          type: "text",
          value: degree,
        },
        {
          description: "Start Date",
          id: `education-startDate-${id}`,
          classes: "",
          type: "text",
          value: startDate,
        },
        {
          description: "End Date",
          id: `education-endDate-${id}`,
          classes: "",
          type: "text",
          value: endDate,
        },
      ];
    });

    return (
      <FormSection title="Education">
        {educationGroups.map((fields, i) => (
          <div className="education-item">
            <InputGroup fields={fields} key={`edu-${i}`} onChange={onChange} />
          </div>
        ))}
        <button id="add-education-btn" onClick={onAdd}>
          Add Education Item
        </button>
      </FormSection>
    );
  }
}

export default Education;
