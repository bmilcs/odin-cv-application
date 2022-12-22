import React from "react";
import FormSection from "../utils/FormSection";
import InputGroup from "../utils/InputGroup";
import uniqid from "uniqid";
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

    return (
      <FormSection title="Work Experience">
        {workGroups.map((workGroup) => (
          <div className="work-item card" key={`work-group-${workGroup.id}`}>
            <InputGroup
              fields={workGroup.fields}
              key={`edu-${workGroup.id}`}
              onChange={onChange}
            />
            <button id={`delete-work-${workGroup.id}`} onClick={onDelete}>
              Delete
            </button>
          </div>
        ))}
        <button id="add-work-btn" onClick={onAdd}>
          Add Work Item
        </button>{" "}
      </FormSection>
    );
  }
}

export default Work;
