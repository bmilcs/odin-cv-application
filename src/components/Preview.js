import React from "react";
import "../styles/Preview.css";

const Preview = (props) => {
  const { state, clearAllFieldsHandler, loadSampleDataHandler } = props;
  const { personal, education, work } = state;

  const loadSampleDataButton = (
    <button className="standard-button" onClick={loadSampleDataHandler}>
      Load Sample Data
    </button>
  );

  const clearAllFieldsButton = (
    <button className="standard-button" onClick={clearAllFieldsHandler}>
      Clear All Fields
    </button>
  );

  return (
    <div className="left-column">
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
              <div className="preview-education-container" key={edu.degree}>
                <h3>{edu.school}</h3>
                <p>{edu.degree}</p>
                {edu.startDate && edu.endDate ? (
                  <p>
                    {edu.startDate} - {edu.endDate}
                  </p>
                ) : edu.startDate || edu.endDate ? (
                  <p>
                    {edu.startDate}
                    {edu.endDate}
                  </p>
                ) : null}
              </div>
            );
          })}
          <h2 className="preview-section-title">Work </h2>
          {work.map((w) => {
            return (
              <div className="preview-work-container" key={w.employer}>
                <h3>{w.title}</h3>
                <p>{w.employer}</p>
                {w.startDate && w.endDate ? (
                  <p>
                    {w.startDate} - {w.endDate}
                  </p>
                ) : w.startDate || w.endDate ? (
                  <p>
                    {w.startDate}
                    {w.endDate}
                  </p>
                ) : null}
                <p>{w.responsibilities}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="preview-button-container">
        {loadSampleDataButton}
        {clearAllFieldsButton}
      </div>
    </div>
  );
};

export default Preview;
