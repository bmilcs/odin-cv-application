import uniqid from "uniqid";

const emptyWorkObj = {
  id: uniqid(),
  employer: "",
  title: "",
  responsibilities: "",
  startDate: "",
  endDate: "",
};

const emptyEducationObj = {
  id: uniqid(),
  school: "",
  degree: "",
  startDate: "",
  endDate: "",
};

const emptyForm = {
  personal: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  education: [emptyEducationObj],
  work: [emptyWorkObj],
};

export { emptyForm, emptyWorkObj, emptyEducationObj };
