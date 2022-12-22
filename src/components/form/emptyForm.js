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
  education: [EducationItem()],
  work: [WorkItem()],
};

export { emptyForm, WorkItem, EducationItem };
