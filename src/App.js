import React from "react";
import Header from "./components/Header";

// section: name, email, phone
// section: education, school name, study title, date of study
// section: experience, company name, position title, main job tasks, date from-until

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
