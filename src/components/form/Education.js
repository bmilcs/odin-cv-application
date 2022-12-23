import React from "react";
import FormSection from "../utils/FormSection";
import InputGroup from "../utils/InputGroup";
import AddIcon from "../assets/AddIcon";
import DeleteIcon from "../assets/DeleteIcon";
import "../../styles/FormSection.css";
import AddThickIcon from "../assets/AddThickIcon";

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

    const addEducationButton = (
      <button id="add-education-btn" onClick={onAdd} className="add-button">
        <AddThickIcon />
      </button>
    );

    return (
      <FormSection title="Education" addButton={addEducationButton}>
        {educationGroups.map((eduGroup) => (
          <div className="education-item card" key={`edu-group-${eduGroup.id}`}>
            <InputGroup
              fields={eduGroup.fields}
              key={`edu-${eduGroup.id}`}
              onChange={onChange}
            />
            <div className="button-container">
              <button
                id="add-education-btn"
                onClick={onAdd}
                className="add-button"
              >
                <AddIcon />
              </button>
              <button
                id={`delete-education-${eduGroup.id}`}
                onClick={onDelete}
                className="delete-button"
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        ))}
      </FormSection>
    );
  }
}

export default Education;
