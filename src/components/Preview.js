import React from "react";
import "../styles/Preview.css";

class Preview extends React.Component {
  render() {
    const { state } = this.props;
    const { personal, education, work } = state;

    return (
      <div className="preview-container">
        <div className="preview-header-container">
          <h1 className="preview-name">
            {personal.firstName} {personal.lastName}
          </h1>
          <p>{personal.phone}</p>
          <p>{personal.email}</p>
        </div>
        <div className="preview-content-container">
          <h2 className="preview-section-title">Education</h2>
          {education.map((edu) => {
            return (
              <div className="preview-education-container">
                <h3>{edu.school}</h3>
                <p>{edu.degree}</p>
                <p>
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            );
          })}
          <h2 className="preview-section-title">Work Experience</h2>
          {work.map((w) => {
            return (
              <div className="preview-work-container">
                <h3>{w.title}</h3>
                <p>{w.employer}</p>
                <p>
                  {w.startDate} - {w.endDate}
                </p>
              </div>
            );
          })}{" "}
        </div>
      </div>
    );
  }
}

export default Preview;
