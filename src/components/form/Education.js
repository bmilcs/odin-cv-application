import React from "react";
import FormSection from "../utils/FormSection";
import InputGroup from "../utils/InputGroup";
import uniqid from "uniqid";
import "../../styles/FormSection.css";

class Education extends React.Component {
  render() {
    const { state, onChange, onAdd, onDelete } = this.props;

    const educationGroups = state.map((educationItem) => {
      const { id, school, degree, startDate, endDate } = educationItem;
      return {
        id: id,
        fields: [
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
        ],
      };
    });

    return (
      <FormSection title="Education">
        {educationGroups.map((eduGroup) => (
          <div className="education-item" key={`edu-group-${eduGroup.id}`}>
            <InputGroup
              fields={eduGroup.fields}
              key={`edu-${eduGroup.id}`}
              onChange={onChange}
            />
            <button id={`delete-education-${eduGroup.id}`} onClick={onDelete}>
              Delete
            </button>
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
