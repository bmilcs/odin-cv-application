import uniqid from "uniqid";

const WorkItem = () => {
  return {
    id: uniqid(),
    employer: "",
    title: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  };
};

const EducationItem = () => {
  return {
    id: uniqid(),
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  };
};

const emptyForm = {
  personal: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  education: [],
  work: [],
};

export { emptyForm, WorkItem, EducationItem };
