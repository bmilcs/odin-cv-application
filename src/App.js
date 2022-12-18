import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import BasicInfo from "./components/BasicInfo";

// section: name, email, phone
// section: education, school name, study title, date of study
// section: experience, company name, position title, main job tasks, date from-until

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <BasicInfo />
      </div>
    );
  }
}

export default App;
