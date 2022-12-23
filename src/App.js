import React from "react";
import "./styles/App.css";
import "./styles/Main.css";
import Header from "./components/Header";
import Form from "./components/Form";
import {
  emptyForm,
  EducationItem,
  WorkItem,
} from "./components/form/emptyForm";
import sampleData from "./components/form/sampleData";
import Preview from "./components/Preview";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...sampleData };
  }

  handlePersonalChange = (e) => {
    const { id, value } = e.target;
    this.setState((prevState) => {
      return {
        ...prevState,
        personal: {
          ...prevState.personal,
          [id]: value,
        },
      };
    });
  };

  handleWorkEducationChange = (e) => {
    // this.state.education & this.state.work contain arrays of objects
    // e.target (ie: an input element)'s html id contains the following info:
    // category (education or work), the corresponding state object key(school, degree, startDate, etc.)
    // and an uniqid (work or school id).
    // - example: "education-degree-sj208alq"

    const { id, value } = e.target;
    const categoryObjKeyAndUniqID = id.split("-");
    const category = categoryObjKeyAndUniqID[0];
    const objKey = categoryObjKeyAndUniqID[1];
    const uniqID = categoryObjKeyAndUniqID[2];

    this.setState((prevState) => {
      return {
        ...prevState,
        [category]: prevState[category].map((item) => {
          if (item.id !== uniqID) return item;
          return {
            ...item,
            [objKey]: value,
          };
        }),
      };
    });
  };

  handleAddItem = (e) => {
    e.preventDefault();

    const { id } = e.target;
    const category = id.split("-")[1];
    const newObj = category === "education" ? EducationItem() : WorkItem();

    this.setState((prevState) => {
      return {
        ...prevState,
        [category]: [...prevState[category], newObj],
      };
    });
  };

  handleDeleteItem = (e) => {
    e.preventDefault();

    const { id } = e.target;
    const categoryAndUniqID = id.split("-");
    const category = categoryAndUniqID[1];
    const uniqid = categoryAndUniqID[2];

    this.setState((prevState) => {
      return {
        ...prevState,
        [category]: prevState[category].filter((item) => item.id !== uniqid),
      };
    });
  };

  render() {
    return (
      <div className="app-container">
        <Header />
        <main>
          <div className="main-wrapper">
            <Preview state={this.state} />
            <Form
              state={this.state}
              onDelete={this.handleDeleteItem}
              onAdd={this.handleAddItem}
              onPersonalChange={this.handlePersonalChange}
              onWorkEducationChange={this.handleWorkEducationChange}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
