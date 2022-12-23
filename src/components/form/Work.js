import React from "react";
import FormSection from "../utils/FormSection";
import InputGroup from "../utils/InputGroup";
import AddIcon from "../assets/AddIcon";
import AddThickIcon from "../assets/AddThickIcon";
import DeleteIcon from "../assets/DeleteIcon";
import "../../styles/FormSection.css";

class Work extends React.Component {
  render() {
    const { state, onChange, onAdd, onDelete } = this.props;

    const workGroups = state.map((workItem) => {
      const { id, employer, title, responsibilities, startDate, endDate } =
        workItem;
      return {
        id: id,
        fields: [
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
        ],
      };
    });

    const addWorkButton = (
      <button id="add-work-btn" onClick={onAdd} className="add-button">
        <AddThickIcon className="icon" />
      </button>
    );

    return (
      <FormSection title="Work Experience" addButton={addWorkButton}>
        {workGroups.map((workGroup) => (
          <div className="work-item card" key={`work-group-${workGroup.id}`}>
            <InputGroup
              fields={workGroup.fields}
              key={`edu-${workGroup.id}`}
              onChange={onChange}
            />
            <div className="button-container">
              <button id="add-work-btn" onClick={onAdd} className="add-button">
                <AddIcon className="icon" />
              </button>
              <button
                id={`delete-work-${workGroup.id}`}
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

export default Work;
